import { useState, useRef } from "react";


export const Formulario = () => {
  const [ fieldValue, setFieldValue ] = useState({
    nome: '',
    cidade: ''
  });

  const fieldCidade = useRef(null);

  const handleChange = (e) => {
    console.log(e.target.value)
    setFieldValue({
      ...fieldValue,
      [e.target.name]: e.target.value
    })
  }

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fieldCidade.current.value);

  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="https://youtube.com.br">
        <input 
          type="text" 
          name="nome" 
          value={fieldValue.nome} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="cidade" 
          ref={fieldCidade}
        />

        <button action="submit">Enviar</button>
      </form>
    </div>
  )
}