import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Menu.css'


function Menu() {
  const diretorias = ['Projetos', 'Vendas', 'Comercial', 'Desenvolvimento', 'PVP']
  const [active, setActive] = useState(diretorias[0])
  const handleClick = (diretoria) => {
    setActive(diretoria);
  }
  return (
    <div className="box">
     <Navbar diretorias={diretorias} active={active} handleClick={handleClick}/>
    </div>
  );
}

export default Menu;
