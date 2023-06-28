
import { useThemeContext } from "./App"

const voosDisponiveis = [
  {
    id: '123',
    title: 'Volta ter. 19 de Julho',
    details: [
      {
        id: '132',
        title: 'Espaço para as pernas dentro da média (76cm)'
      },
      {
        id: '133',
        title: 'Saída USB no assento'
      },
      {
        id: '134',
        title: 'Vídeo sob demanda'
      },
      {
        id: '135',
        title: 'Estimativa das emissões de carbono: 83kg'
      }
    ]
  },
  {
    id: '151',
    title: '13:00 - 15:00',
    details: [
      {
        id: '132',
        title: 'Espaço para as pernas dentro da média (76cm)'
      },
      {
        id: '133',
        title: 'Saída USB no assento'
      },
      {
        id: '134',
        title: 'Vídeo sob demanda'
      },
      {
        id: '135',
        title: 'Estimativa das emissões de carbono: 83kg'
      }
    ]
  }
]
function ItemVooDetails ({ details }) {
  const value = useThemeContext();
  return (
    <ul>
      {details.map(detail => (
        <li key={detail.id} style={{ color: value.color, fontFamily: value.font }}>{detail.title}</li>
      ))}
    </ul>  
  )
}
function ItemVoo ({ title, children }) {
  return (
    <div className="voo"> 
      <header>
        <h3>{title}</h3>
      </header>
      <div className="voo-details">
        {children}
      </div>
    </div>
  )
}

function Voos() {
  return (
    <div className="voos">
      {voosDisponiveis.map(voo => (
        <ItemVoo key={voo.id} title={voo.title}>
          <ItemVooDetails details={voo.details} />
        </ItemVoo>
      ))}
    </div>
  )
}

export default Voos;