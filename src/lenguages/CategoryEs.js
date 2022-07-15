function CategoryEs(item) {

    switch (item.category) {
        case "food":
            return "Alimentación";
        case "cages":
            return "Jaulas";
        case "toys":
            return "Juguetes";
        case "accessories":
            return "Accesorios";
        default:
            break;
    }
   
}

export default CategoryEs