import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="divLogo">
        <img className="logo" alt="logo" src="/Images/logoAmarela.png" />
      </div>
      <div className="divTitle">
        Árvore de membros
      </div>
    </div>
  );
}

export default Header;
