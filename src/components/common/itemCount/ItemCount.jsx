import ItemCountPresentation from "./ItemCountPresentation"
import './ItemCount.scss'

export default function ItemCount ( {stock, addProductInCart}){

    return (
        <ItemCountPresentation stock ={stock} addProductInCart={addProductInCart}/>
    )
    
}