import React from 'react';
import '../../Styles/Home.css';
import Button from '../../Components/Button';
import { FaHome, FaPlus } from "react-icons/fa";

function Home() {
  return (
    <div className="Home">
      <h1>Bienvenido a AluraFlix</h1>
      <div className="button-container">
        <Button type="button">BUTTON</Button>
        <Button type="button">GUARDAR</Button>
        <Button type="selected">SELECTED</Button>
        <Button type="limpiar">LIMPIAR</Button>
        <Button type="home" icon={<FaHome size={20} />}>HOME</Button>
        <Button type="nuevo-video" icon={<FaPlus  size={15} />}>NUEVO VIDEO</Button>
      </div>
    </div>
  )
}

export default Home