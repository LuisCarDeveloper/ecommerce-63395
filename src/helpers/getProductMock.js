
export function getProductMock( products , delay=2000){
    console.log('Se ejecuta el delay')
    return new Promise ((resolve)=>{
        setTimeout( ()=>{ resolve ( products ) }, delay )
    })
}