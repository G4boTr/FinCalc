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
      case 'IVA 19%':
        return <IVA />;
      case 'Simulador de Crédito':
        return <CreditSimulator />;
      case 'Intercambio de Divisas':
        return <CurrencyExchange />;
      default:
        return <h2>Elige una de las opciones...</h2>;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="container-fluid" onContextMenu={ preventContextMenu }>
      <div className="row">
        <div className="col-sm-2 bg-dark text-white sidebar">
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item bg-dark text-white border-0" onClick={() => setSelectedOption('Opciones')}>Opciones</li>
            <li className="list-group-item bg-dark text-white border-0" onClick={() => setSelectedOption('Descuentos')}>Descuentos</li>
            <li className="list-group-item bg-dark text-white border-0" onClick={() => setSelectedOption('IVA 19%')}>IVA 19%</li>
            <li className="list-group-item bg-dark text-white border-0" onClick={() => setSelectedOption('Simulador de Crédito')}>Simulador de Crédito</li>
            <li className="list-group-item bg-dark text-white border-0" onClick={() => setSelectedOption('Intercambio de Divisas')}>Intercambio de Divisas</li>
          </ul>
        </div>
        <div className="col-sm-10 main-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;

