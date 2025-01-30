import CounterProducts from "./counterproducts/CounterProducts"
import FinishAddProducts from "./finishAddProducts/FinishAddProducts"


export default function ItemCountPresentation ( { count, handleClickRemove, handleClickAdd,  openModal}){
  const classCounterBttn = 'counterProducts'
  const classAddCartBttn = 'finishAddProducts'

  return (
    <div className ='counterDetail'>
      <CounterProducts className={classCounterBttn}
        count={count} 
        handleClickRemove={handleClickRemove} 
        handleClickAdd={handleClickAdd}
      />
			<FinishAddProducts className = {classAddCartBttn}
				openModal ={openModal}
			/>       
    </div>
    )

}