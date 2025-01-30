  // Formatear la fecha desde los valores de Firestore
  export default function formattDate(orderData){
    const dateFormat = new Date(orderData.date?.seconds * 1000).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",    // Incluir la hora
    minute: "2-digit",  // Incluir los minutos
    hour12: false,      // Formato de 24 horas
   }) 
   return dateFormat;
 };

