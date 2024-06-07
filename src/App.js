import './App.css';
import ImplementLoadingScreen from './components/layout/ImplementLoadingScreen';

function App() {   
  
  const preventContextMenu = (event) => {
    event.preventDefault();
    
  }
 
  return (
    <div className='App' onContextMenu={ preventContextMenu }> 
      <ImplementLoadingScreen />    
    </div>
  );
}
export default App;
