import './App.css';
import Button from "../src/components/common/Button";
import SideBar from './components/common/SideBar';
import Content from './components/common/Content';

function App() {    
  return (
    <div className='App'>       
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
