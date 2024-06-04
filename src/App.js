import './App.css';
import Button from './components/common/Button';

function App() {

  const handleClick = () => {
    console.log("Boton clickeado")
  }
  return (
    <div>

      <Button onClick= { handleClick } className="left-buttons"
      > Haz click aqui

      </Button>
      
    </div>
  );
}

export default App;
