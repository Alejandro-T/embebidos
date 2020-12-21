import React, { Component } from 'react';
import '../css/estilos.css';
import Images from '../Imagenes/Images';


var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };

    
class Datemovil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          //default value of the date time
          date: '',
        };
      }
      componentDidMount() {
        var that = this;
    
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        
    
        that.setState({
          //Setting the value of the date time
          date:
            date + '/' + month + '/' + year
        });
      }
    render() {
      return (
      <div className="date">
          <div className="date__left">
              <p className = "date__text">{this.state.date}</p>
          </div>
          <div className="date__rigth">
              <img src={Images.d} className="date__img"></img>
          </div>
      </div>
      );
    }
  }
export default Datemovil;