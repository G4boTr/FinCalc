import { useState, useEffect } from "react";
import { formatNumber } from "./Discounts";

function CurrencyExchange() {

  const [amount, setAmount] = useState("");  
  const [dolarRate, setDolarRate] = useState("");
  const [euroRate, setEuroRate] = useState("");
  const [pesoRate, setPesoRate] = useState("");  
  const [ofImport, setOfImport] = useState("Dolar");
  const [toImport, setToImport] = useState("Dolar");
  const [result, setResult] = useState(0);
  
  const handleOfImport = (event) => {
    setOfImport(event.target.value);
  }

  const handleToImport = (event) => {
    setToImport(event.target.value);
  }

  const handleImporteValueChange = (event) => {
    const inputImporteValue = parseFloat(event.target.value) || 0;
    setAmount(inputImporteValue);  
  }


  function calculateExchange() {
    let fromRate = 1;
    let toRate = 1;
  
    if (ofImport === "USD") {
      fromRate = dolarRate;
    } else if (ofImport === "EUR") {
      fromRate = euroRate;
    } else if (ofImport === "COP") {
      fromRate = pesoRate;
    } else {
      fromRate = dolarRate;
    }
  
    if (toImport === "USD") {
      toRate = dolarRate;
    } else if (toImport === "EUR") {
      toRate = euroRate;
    } else if (toImport === "COP") {
      toRate = pesoRate;
    } else {
      toRate = dolarRate;
    }
  
    const exchangeResult = (amount / fromRate) * toRate;
    setResult(exchangeResult.toFixed(2));
  }
  
  useEffect(() => {
    calculateExchange();

  });

  /*
  useEffect(()=> {

    const apiKey = "de2df6cb48fd88aea69d9df9";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

    fetch(url)
     .then((response) => response.json())
     .then((data) => {
       setDolarRate(data.conversion_rates.USD || 0);
       setEuroRate(data.conversion_rates.EUR || 0);
       setPesoRate(data.conversion_rates.COP || 0);
     
     })
     .catch((error) => console.log(error))

      
  },[]);
 */
  useEffect(() => {
    fetch("/api/currencies.json")
      .then((response) =>  response.json())
      .then((data) => {
        setDolarRate(data.rates.USD || 0);
        setEuroRate(data.rates.EUR || 0);
        setPesoRate(data.rates.COP || 0);
       })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return (
    <div>
      <h2 style={{color: "white"}}>Intercambio de Divisas</h2>
      <table className="table table-borderless border border-2">
        <thead className="table-dark">
          <tr>
            <th>Importe: </th>
            <th>De: </th>
            <th>A: </th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td><input className="form-control" onChange={handleImporteValueChange} type="text"  placeholder="Ingrese importe"/></td>
              <td>
                <select onChange={handleOfImport} value={ofImport}  className="form-select" name="" id="">
                  <option value="USD">Dolar USD</option>
                  <option value="EUR">Euro EUR</option>
                  <option value="COP">Peso COP</option>
                </select>
              </td>
              <td>
                <select value={toImport} className="form-select" name="" id="" onChange={handleToImport}>
                  <option value="USD">Dolar USD</option>
                  <option value="EUR">Euro EUR</option>
                  <option value="COP">Peso COP</option>
                </select>
              </td>
            </tr>
        </tbody>    
        <tfoot>
          <tr>
            <td>
              <span>Importe: {formatNumber(amount)} de {ofImport} </span>  
            </td>
            <td>
            <span>Es: {formatNumber(result)} {toImport}</span>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CurrencyExchange;
