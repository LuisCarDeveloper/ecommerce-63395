import ModalAddPresentation from "./ModalPresentation"
import ReactDOM from "react-dom";
import './ModalAdd.scss'

export default function ModalAdd ( { isModalOpen, closeModal, product } ){
   if(!isModalOpen) return null;
      return ReactDOM.createPortal (
         <ModalAddPresentation product={product} closeModal={closeModal}/>,
         document.getElementById("modal-root"))
   

}