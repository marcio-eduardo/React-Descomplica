import { ThemeContext } from './App';

export const Fonts = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div>
          <button type="button" onClick={() => value.setFont('arial')}>Arial</button>
          <button type="button" onClick={() => value.setFont('impact')}>Impact</button>
          <button type="button" onClick={() => value.setFont('dubai')}>Dubai</button> 
        </div>
      )}
    </ThemeContext.Consumer>
    
  )
}