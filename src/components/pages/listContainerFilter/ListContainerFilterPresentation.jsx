import ItemGeneric from '../../common/itemGeneric/ItemGeneric'

export function ListContainerFilterPresentation( {filteredProductList} ) {
   return (
    <div >
        <ItemGeneric productList={filteredProductList}/>
    </div>
  );
}