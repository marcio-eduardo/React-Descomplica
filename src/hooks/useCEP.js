import { useState, useEffect } from "react"

export const useCep = (cep) => {

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
    fetchCEP(cep)
  }, [cep])

  return endereco;   
}