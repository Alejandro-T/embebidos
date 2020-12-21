import React from 'react';
import '../css/estilos.css';
import Images from '../Imagenes/Images';

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };

    
const footermo = (props) =>{
    return(
    <div className="footermovil">
        
        <div className="footermovil__list">
            <div className="footermovil__item">
               <img src={Images.a} className="footermovil__img"></img>
            </div>
            <div className="footermovil__item">
               <img src={Images.b} className="footermovil__img"></img>
              
            </div>
            <div className="footermovil__item">
               <img src={Images.c} className="footermovil__img"></img>
                <p></p>
            </div>
        </div>
    </div>
    );
}
export default footermo;