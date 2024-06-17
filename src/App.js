import React, { useState, useEffect } from 'react';
import './App.css';
import Discounts from './components/layout/Discounts';
import IVA from './components/layout/IVA';
import CreditSimulator from './components/layout/CreditSimulator';
import CurrencyExchange from './components/layout/CurrencyExchange';
import LoadingScreen from './components/layout/LoadingScreen';


function App() {
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const preventContextMenu = (event) =>{
    event.preventDefault();
    
  }

  

  const renderContent = () => {
    switch (selectedOption) {
      case 'Descuentos':
        return <Discounts />;
      case 'IVA':
        return <IVA />;
      case 'Simulador de Crédito':
        return <CreditSimulator />;
      case 'Intercambio de Divisas':
        return <CurrencyExchange />;
      default:
        return <h2 style={{color: "white"}}>Elige una de las opciones...</h2>;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="container-fluid" onContextMenu={ preventContextMenu }>
      <div className="row">
        <div id="main-div" className="col-sm-3 text-white sidebar p-0 pt-3">
          <ul className=" list-group list-group-flush text-center">
            <li className="list-group-item  text-white border-0"              
            > Opciones </li> 
            
            <li className="li-hover list-group-item  text-white border-0"  onClick={() => setSelectedOption('Descuentos')}>Descuentos</li>
            <li className="li-hover list-group-item  text-white border-0"  onClick={() => setSelectedOption('IVA')}>IVA</li>
            <li className="li-hover list-group-item  text-white  border-0"  onClick={() => setSelectedOption('Simulador de Crédito')}>Simulador de Crédito</li>
            <li className="li-hover list-group-item  text-white  border-0"  onClick={() => setSelectedOption('Intercambio de Divisas')}>Intercambio de Divisas</li>
          </ul>
        </div>
        <div className="col-sm-9 main-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;

