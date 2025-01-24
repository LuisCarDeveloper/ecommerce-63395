
export function capitalFirstChar(val) {
    if (val){
        return val?.trim()         // Eliminar espacios al inicio y final
        .split(' ')    // Separar por espacio
        .map(v => v[0].toUpperCase() + v.slice(1).toLowerCase())  // Capitalizar la primera letra, minúscula el resto
        .join(' ');
             // Volver a unir las palabras   
    } else{
        return '';
    }

}

function pluralLastChar(val) {
    return val?.trim()         // Eliminar espacios al inicio y final

    .map(v => v[0].toUpperCase() + v.slice(1).toLowerCase())  // Capitalizar la primera letra, minúscula el resto
    .join(' ');     // Volver a unir las palabras
}

export default function productsAdapter(productList=[]){
    const newProductList= productList.map (product =>{
        return {
            id: product.id
            ?capitalFirstChar(product.id)
            :'',
            category: product.category
                ?capitalFirstChar(product.category)
                :'',
            trade: product.trade
                ?capitalFirstChar(product.trade)
                :'',
            type: product.type
                ?capitalFirstChar(product.type)
                :'',
            pack: parseInt(product.pack),
            unity: product.pack > 1 ?`${capitalFirstChar(product.unity)}s`:capitalFirstChar(product.unity),
            volumen: product.volumen,
            obs: product.obs,
            price:`S/. ${parseFloat(product.priceReg).toFixed(2)}`,
            priceOnline:`S/. ${parseFloat(product.priceOnline).toFixed(2)}`,
            stock:`${parseInt(product.stock)}`
        }
    })
    return newProductList
}
