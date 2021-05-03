import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import WorkTree from '../WorkTree/WorkTree';
import Tribos from '../Tribos/Tribos';
import './Menu.css'


function Menu() {
  const diretorias = ['Projetos', 'Vendas', 'Marketing', 'Desenvolvimento', 'PVP'];
  const [active, setActive] = useState(diretorias[0]);
  const tribos = [
    {
      nome: 'Draconis',
      logo: <img className="tribos" src="/Images/Draconis.png" alt="Draconis"/>,
    },
    {
      nome: 'Orion',
      logo: <img className="tribos" src="/Images/Orion.png" alt="Orion"/>,
    },
    {
      nome: 'Sirius',
      logo: <img className="tribos" src="/Images/Sirius.jpg" alt="Sirius"/>,
    },
    {
      nome: 'Psique',
      logo: <img className="tribos" src="/Images/Psique.png" alt="Psique"/>,
    }
  ];
  const [tribo, setTribos] = useState(tribos[0]);
  const handleNavbarClick = (diretoria) => {
    setActive(diretoria);
  }
  const handleTriboClick = (tribo) => {
    setTribos(tribo);
  }
  return (
    <div className="box">
     <Navbar diretorias={diretorias} active={active} handleClick={handleNavbarClick}/>
     {active === "Projetos" && (
       <Tribos tribos={tribos} activeTribo={tribo} handleClick={handleTriboClick}/>
     )}
     <WorkTree active={active} activeTribo={tribo}/>
    </div>
  );
}

export default Menu;
