import React from 'react';
import clsx from 'clsx';
import './Navbar.css'


function Navbar({ diretorias, active, handleClick }) {
  return (
      <div className="navbar">
        {diretorias.map((diretoria, index) => {
          const first = index === 0;
          const last = diretorias.length - 1 === index;
          const selected = active === diretoria;
          return (
          <button
          onClick={() => handleClick(diretoria)}
          key={index}
          className={clsx('buttons', {'first': first, 'last': last, 'selected': selected})}
          type="button"
          >
            {diretoria}
          </button>
          )})}
      </div>
  );
}

export default Navbar;
