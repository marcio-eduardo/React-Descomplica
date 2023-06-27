import { useState, useEffect } from "react"

export const ViaCep = () => {

  const [ endereco, setEndereco ] = useState({});

  const fetchCEP = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(dados => dados.json())
      .then(endereco => {
        console.log(endereco);
        setEndereco(endereco);
      })
  }

  useEffect(() => {
    //console.log('Renderizou!!!')
    fetchCEP('26115720')
  }, [])
  return (
    <table>
      <tbody>
        <tr>
          <td>Bairro:</td>
          <td>{endereco.bairro}</td>
        </tr>
        <tr>
          <td>Logradouro:</td>
          <td>{endereco.logradouro}</td>
        </tr>
        <tr>
          <td>UF:</td>
          <td>{endereco.uf}</td>
        </tr>
        <tr>
          <td>Localidade:</td>
          <td>{endereco.localidade}</td>
        </tr>
      </tbody>
    </table>
  )
}