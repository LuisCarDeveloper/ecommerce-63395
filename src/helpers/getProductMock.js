
export function getProductMock( products , delay=2000){
    return new Promise ((resolve)=>{
        setTimeout( ()=>{ resolve ( products ) }, delay )
    })
}