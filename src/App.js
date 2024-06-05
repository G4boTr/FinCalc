import './App.css';
import Button from './components/common/Button';

function App() {

  const handleClick = (event) => {
    console.log(`Usted dio click en: ${ event.target.className }`)
  }
  return (
    <div>

      <Button text= "Opciones" onClick= { handleClick } className="left-buttons" /> 

      
      
    </div>
  );
}

export default App;
