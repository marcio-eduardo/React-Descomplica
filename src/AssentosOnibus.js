import React, { useState, useEffect } from "react"


//Atual
const Assento = (props) => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
  }

  useEffect(() =>{
    console.log('Nasceu')
  }, []);

  useEffect(() =>{
    if (disabled){
      console.log('Disabled alterou para ', disabled)
    }
  }, [disabled]);

  return (
    <button 
      className="assento" 
      type="button"
      disabled={disabled}
      onClick={() => handleClick()}
    >
      {disabled ? 'X' : props.pos}
    </button>
  )
}

//Legado
// class Assento extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       disabled: false
//     }
//   }

// handleClick() {
//   this.setState({
//     disabled: true
//   })
// }

//   render() {
//     return (
//       <button 
//         className="assento" 
//         type="button"
//         disabled={this.state.disabled}
//         onClick={() => this.handleClick()}
//       >
//         {this.state.disabled ? 'X' : this.props.pos}
//       </button>
//     )
//   }
// }

const Fileira = (props) => {
  return (
    <div className="fileira">
      {[0, 1, 2 ,3].map((pos, index) => (
        <Assento key={index} pos={props.de + pos} />
      ))}
    </div>
  )
}

export const AssentosOnibus = () => {
  return (
    <div className="container">
      {[1, 5, 9, 13, 17].map((pos, index) => (
        <Fileira key={index} de={pos} />
      ))}
    </div>
  )
}