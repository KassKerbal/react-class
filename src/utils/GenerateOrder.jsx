
function GenerateOrder(user, cart, total) {

    return {
        buyer: {
            name: user.name,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email,
            country: user.country,
            adress: user.adress,
            zipCode: user.zipCode,
        },
        items: cart
        ,
        total: total,
        orderDate: new Date().toLocaleString()
    }
}

export default GenerateOrder;