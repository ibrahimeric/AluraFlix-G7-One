import React from 'react';
import '../Styles/Button.css';

const Button = ({ type, onClick, children, icon }) => {
  let className = "btn";

  //clase para tipo de boton
  switch (type) {
    case "button":
      className += " button-transparent";
      break;
    case "guardar":
      className += " button-guardar";
      break;
    case "selected":
      className += " button-selected";
      break;
    case "limpiar":
      className += " button-limpiar";
      break;
    case "home":
      className += " button-home";
      break;
    case "nuevo-video":
      className += " button-nuevo-video";
      break;
    default:
      break;
  }

  return (
    <button className={className} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  )
}

export default Button