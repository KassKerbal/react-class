import { useEffect, useState } from 'react'
import { doc, getDoc, collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function UseProductHook(itemId) {

    const [productHook, setProducts] = useState([]);

    const [error, setError] = useState(null);

    useEffect((() => {

        if (itemId) {
            (async () => {
                try {
                    const docRef = doc(db, "products", itemId);
                    const docSnap = await getDoc(docRef);
                    const productDetail = { id: docSnap.id, ...docSnap.data() };
                    if (docSnap.exists()) {
                        setProducts(productDetail);
                    } else {
                        setError("No such document!");
                    }
                } catch (err) {
                    setError(err);
                }

            })()
        } else {
            (async () => {
                try {
                    const q = query(collection(db, "products"));
                    const querySnapshot = await getDocs(q);
                    const products = [];
                    querySnapshot.forEach((doc) => {
                        products.push({ id: doc.id, ...doc.data() });
                        setProducts(products);
                    });

                } catch (err) {
                    setError(err);
                }
            })()

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);

    return [productHook, error]
}

export default UseProductHook