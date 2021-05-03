import React from 'react';
import clsx from 'clsx';
import './Tribos.css'


function Navbar({ tribos, activeTribo, handleClick }) {
  return (
      <div>
        {tribos.map((tribo, index) => {
          const selected = activeTribo.nome === tribo.nome;
          return (
            <button
            onClick={() => handleClick(tribo)}
            className={clsx('logoTribos', {'selectedTribo': selected})}
            type="button" key={index}
            >
              {tribo.logo}
            </button>
          )})}
      </div>
  );
}

export default Navbar;
