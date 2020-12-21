import React from 'react';
import '../css/estilos.css';
import Images from '../Imagenes/Images';

    
const perfilmov = (props) =>{
    return(
        <div className="creador">
            <div className="creador__contain">
                <div className="creador__header">
                    <h1 className="creador__title">Diseñado Por:</h1>
                    <img src={Images.yo} className="creador__img"></img>
                </div>
                <div className="creador__middle">
                    <h2 className="creador__name">Alejandro Torres</h2>
                </div>
                <div className="creador__footer">
                <p className="creador__desc">"Soy estudiante de la carrera de ingenieria en sistemas"</p>
                <p className="creador__desc">Actualmente estoy en 7mo semestre"</p>
                </div>
                <div className="creador__contw">
                <svg className="creador__swim"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,202.7C384,203,480,117,576,106.7C672,96,768,160,864,208C960,256,1056,288,1152,256C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            </div>
            
            
        </div>
        
    );
}
export default perfilmov;