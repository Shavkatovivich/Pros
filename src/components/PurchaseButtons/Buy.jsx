import React, {useRef} from "react";
import {Link} from "react-router-dom"
import "./buy.css"

const Buy = () => {

    const btnExit = useRef();

    const showExit = () => {
        btnExit.current.classList.toggle("show")
    }


  return (
    <div>
        <div className="container">
               <div className="buy__links">
                  <Link className="modal__link" to="#" onClick={showExit}>XARID QILISH</Link>
                 <Link className="modal__link" to="#" onClick={showExit}>BOG'LANISH</Link>
               </div>
                 <div className="modal__murojaat">
                    <div className="murojaat" ref={btnExit}>
                            <button className="modal__form-btn" onClick={showExit}>x</button>
                            <form className="modal__form" action="#" >
                                <h1 className="modal__form-title">XARID QILISH</h1>
                                <label className="modal__form-label" htmlFor="">Ism</label>
                                <input className="modal__form-input" type="text" required/>    
                                <label className="modal__form-label" htmlFor="">Nomer</label>
                                <input className="modal__form-input" type="text" required placeholder=""/> 
                                <button className="modal__form-link">YUBORISH</button>   
                            </form>  
                        </div> 
                 </div>
        </div>
    </div>
  )
};



export default Buy
