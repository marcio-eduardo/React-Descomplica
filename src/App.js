import Voos from "./Voos";
import React from "react";
import { AssentosOnibus } from "./AssentosOnibus";
import { ViaCep } from "./ViaCEP";

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
const Lista = () => {
  const passos = [
    'Configurar projeto',
    'Embedar React',
    'Criar components',
    'Escrever testes'
  ]; 
  return (
    <ul>
      {passos.map((valor, index) => (
        <ListItem key={`item-${index}`} label={valor} />
      ))}      
    </ul>
  )
}

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

function App() {
  const labelBtn = 'Entre aqui';

  return (
    <div className="App">
      <MeuBotao label={'Bom dia!!!'} />
      <Titulo />
      <ViaCep />
      <AssentosOnibus />
      <Voos />
      <Lista />
      <Pessoa idade={14}/>
      <Pessoa idade={15}/>
      <Pessoa idade={50}/>
      <Pessoa idade={21}/>
      <Pessoa idade={16}/>
      <article>
        <h2>Subtítulo </h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      </article>
      <Btn label={`${labelBtn} !!!`} idade={30} />
    </div>
  );
}

export default App;
