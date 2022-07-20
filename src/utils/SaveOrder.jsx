import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"
import Swal from 'sweetalert2'

function SaveOrder(cart, order, isValidation) {

    const batch = writeBatch(db)

    const outOfStock = [];

    cart.forEach((item, idx) => {
        (async () => {
            try {
                const docRef = doc(db, "products", item.id);
                const docSnap = await getDoc(docRef);
                const product = {
                    id: docSnap.id,
                    stock: docSnap.data().stock,
                };

                if (docSnap.exists() && product.stock >= item.quantity) {
                    batch.update(doc(db, 'products', product.id), {
                        stock: product.stock - item.quantity
                    })
                } else {
                    outOfStock.push(product);
                }
            } catch (err) {
                Swal.fire('¡Error! No se ha podido realizar la compra');
            }

            if (cart.length - 1 === idx) {
                if (outOfStock.length === 0) {
                    try {
                        const docRef = await addDoc(collection(db, 'orders'), order);
                        batch.commit().then(() => {
                            isValidation({ status: "OrderCompleated" });
                            Swal.fire({
                                icon: 'success',
                                title: 'Se generó la orden de compra',
                                text: `id: ${docRef.id}`,
                            })
                        })
                    } catch (err) {
                        Swal.fire('¡Error! No se ha podido realizar la compra');
                    }
                } else {

                    Swal.fire({
                        title: '¡No se pudo realizar la compra!',
                        text: `Productos fuera del stock. ¿Desea comprar el stock restante?`,
                        showDenyButton: true,
                        confirmButtonText: 'Comprar',
                        denyButtonText: `No comprar`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            isValidation({ status: "BuyRemaining", items: outOfStock });
                        } else if (result.isDenied) {
                            isValidation({ status: "OutOfStock", items: outOfStock });
                            Swal.fire('Compra no realizada, productos sin stock retirados del carrito');
                        }
                    })
                }
            }
        })()
    })

}

export default SaveOrder