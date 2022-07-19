
function CheckUser(user) {

    let isValid = true;

    if (!(user.name !== undefined)) {
        isValid = false;
    } 

    if (!(user.lastName !== undefined && isValid )) {
        isValid = false;
    }

    if ((isNaN(parseInt(user.phone) && isValid))) {
        isValid = false;
    } 

    if (!(user.email !== undefined && isValid)) {
        isValid = false;
    } 

    if (!(user.country !== undefined && isValid)) {
        isValid = false;
    }

    if (!(user.adress !== undefined && isValid)) {
        isValid = false;
    }

    if ((isNaN(parseInt(user.phone) && isValid))) {
        isValid = false;
    }

    return isValid
}
export default CheckUser