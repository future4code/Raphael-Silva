import React from 'react';

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div className="Etapa1">
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <div>
          <p>1. Qual é o seu nome?</p>
          <input value></input>
        </div>
        <div>
          <p>2. Qual é a sua idade?</p>
          <input value></input>
        </div>
        <div>
          <p>3. Qual é o seu email?</p>
          <input value></input>
        </div>
        <div>
          <p>4. Qual é a sua escolaridade?</p>
          <select>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino superior completo">Ensino superior completo</option>
          </select>
        </div>
      </div>
    )
  }
}
