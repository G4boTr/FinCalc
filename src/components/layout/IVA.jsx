import { useState } from "react";
import { formatNumber } from "./Discounts";
function IVA() {

  const [inputValue, setInputValue] = useState("");
  const [ivaRate, setIvaRate] = useState(19);
  const [ivaValue, setIvaValue] = useState(0);
  
  const handleInputChange =  (event) => { 
    setInputValue(event.target.value);
  }

  const handleSelectChange =  (event) => { 
    setIvaRate(parseInt(event.target.value));
  }

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      console.log(event.key);
      calculateIva();
  
  }
}

  const calculateIva = () =>{
    const value = parseFloat(inputValue);
    if(!isNaN(value)){
      const iva = (value * (ivaRate / 100)).toFixed();
      setIvaValue(iva);

    } else {
      setIvaValue("");
    }
}
 
  return (
    <div>
      <h2>IVA</h2>
      <table className="table table-borderless border border-2">
        <thead className="table-dark">
          <tr>
            <th>Ingrese Valor</th>
            <th>Ingrese % IVA</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input className="form-control" onKeyDownCapture={handleKeyPressed} onBlur={calculateIva} placeholder="Ingrese Valor" type="text" value={inputValue} onChange={handleInputChange}/>
              </td>
              <td>
                <select className="form-select" value={ivaRate} onChange={handleSelectChange} onClick={calculateIva}>
                  <option value="5">5%</option>
                  <option value="19">19%</option>
                </select>
              </td>
            </tr>
          </tbody>        
        <tfoot>
          <tr>
            <td colSpan={2}>
              <p>El valor del IVA es: $ {formatNumber(ivaValue)} </p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default IVA;
