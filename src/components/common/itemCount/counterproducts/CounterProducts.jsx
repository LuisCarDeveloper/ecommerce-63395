
export default function CounterProducts ( { className, count, handleClickRemove, handleClickAdd}){

    return (
            <div className={className}>
                <button onClick = {handleClickRemove}>-</button>
                <div> {count} </div>
                <button onClick = {handleClickAdd}>+</button>
            </div>      
    )

}