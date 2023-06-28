import React, { createContext, useState, useContext } from "react";

import Voos from "./Voos";
import { AssentosOnibus } from "./AssentosOnibus";
import { ViaCep } from "./ViaCEP";
import { Fonts } from "./Fonts";
import { Formulario } from "./Formulario";

const Titulo = () => (
  <h1>
    <span>Olá </span>
    <strong>Mundo!!!</strong>
  </h1>
)
const Btn = (props) => {
  return (
    <button type="button">{props.label} - {props.idade}</button>
  )
}
function Pessoa(props){
  return (
    <section>
      Você é {props.idade >= 18 ? 'maior' : 'menor'} de idade.
    </section>
  )
}
const ListItem = ({ label }) => {
  return (
    <li>{ label }</li>
  )
}
// const Lista = () => {
//   const passos = [
//     'Configurar projeto',
//     'Embedar React',
//     'Criar components',
//     'Escrever testes'
//   ]; 
//   return (
//     <ul>
//       {passos.map((valor, index) => (
//         <ListItem key={`item-${index}`} label={valor} />
//       ))}      
//     </ul>
//   )
// }
class MeuBotao extends React.Component {
  //const handleClick = (e) => {
  //  console.log('clicou', e)
  //};

  imprime() {
    console.log('Imprime aqui')
  }
  handleClick(e) {
    e.preventDefault();
    console.log('Clicou', e);
    this.imprime();
    console.log(this);
  }
  render() {
    return (
      <a onClick={(e) => {this.handleClick(e)}} href="https://Yutube.com.br">{this.props.label} </a>
    )
  }
}

export const ThemeContext = createContext({});
export const useThemeContext = () => useContext(ThemeContext);
const SettingsContext = createContext({});
export const useSettingsContext = () => useContext(SettingsContext);

function App() {
  
  const [font, setFont] = useState('Dubai');
  const labelBtn = 'Entre aqui';

  return (
    <SettingsContext.Provider value={{ cepUrlBase: 'https://viacep.com.br' }}>
      <ThemeContext.Provider value={{ color: 'orange', font: font, setFont }}>
        <div className="App">
          <Titulo />
          <Formulario />
          <MeuBotao label={'Bom dia!!!'} />
          <Fonts />
          <ViaCep />
          <AssentosOnibus />
          <Voos />
          {/* <Lista />
          <Pessoa idade={14}/>
          <Pessoa idade={15}/>
          <Pessoa idade={50}/>
          <Pessoa idade={21}/>
          <Pessoa idade={16}/>
          <article>
            <h2>Subtítulo </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </article> */}
          <Btn label={`${labelBtn} !!!`} idade={30} />
        </div>
      </ThemeContext.Provider>
    </SettingsContext.Provider>
  );
}

export default App;
