/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import projetos from '../../diretorias/projetos.json';
import vendas from '../../diretorias/vendas.json';
import marketing from '../../diretorias/marketing.json';
import desenvolvimento from '../../diretorias/desenvolvimento.json';
import pvp from '../../diretorias/pvp.json';
import clsx from 'clsx';
import lodash from 'lodash';
import './WorkTree.css';


function WorkTree({ active, activeTribo }) {
  const [hierarquia, setHierarquia] = useState([]);

  const resolveJson = (json, array, level) => {
    if (json.children.length > 0) {
      json.children.forEach(element => {
        resolveJson(element, array, (level + 1));
      });
    }
    json.level = level;
    array.push(json);
    return array;
  }

  const buildWorkTree = (json) => {
    const persons = [];
    const level = 0;
    resolveJson(json, persons, level);
    let groupedPersons = lodash.groupBy(persons, 'level')
    if (active === 'Projetos') {
      groupedPersons = Object.values(groupedPersons).map((cargo) => cargo.filter((person) => person.tribo === activeTribo.nome || person.tribo === undefined));
    }
    setHierarquia(groupedPersons);
  }

  useEffect(() => {
    const jsons = { Projetos: projetos, Vendas: vendas, Marketing: marketing, Desenvolvimento: desenvolvimento, PVP: pvp };
    buildWorkTree(jsons[active]);
  }, [active, activeTribo])

  return (
    <div className="container">
      {Object.values(hierarquia).map((level) =>
        <div className={clsx('level', `_${level[0].level}`)}>
          <div className="leftMenu">
            <div >{lodash.first(level).cargo}</div>
          </div>
          <div className="rightMenu">
            {level.map((person) =>
              <div className={clsx('person', `__${person.level}`)}>{person.nome}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkTree;
