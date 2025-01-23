import Item from "../../common/item/item"

export function ListContainerFilterPresentation( {productList} ) {

   return (
    <div >
        <Item productList={productList}/>
    </div>
  );
}