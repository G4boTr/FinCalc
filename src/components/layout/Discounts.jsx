import { useState, useEffect } from "react";

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  
}
export default function Discounts() {

  const [value, setValue] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState("");
  const [saving, setSaving] = useState("");


  const handleValueChange =  (event) => { 
    const inputValue = event.target.value;    
    setValue(inputValue);
    
  }

  const handleDiscountChange =  (event) => {
    setDiscount(event.target.value);
  }

 


  useEffect(() => {
    const numValue = parseFloat(value);
    const numDiscount = parseFloat(discount);

    if (isNaN(numValue) || isNaN(numDiscount) || numValue < 0 || numDiscount < 0) {
      setResult("");
      setSaving("");
      return;
    } 

    const result = numValue - (numValue * numDiscount / 100);
    setResult(result.toFixed());
    setSaving((numValue - result).toFixed());
  }, [value, discount]);

  return (
    <div className="table-responsive-md">
      <h2 style={{color: "white"}}>Descuentos</h2>
      <table className="table table-borderless border border-2">
        <thead className="table-dark">
        <tr>
          <th>Valor</th>
          <th>Descuento %</th>
          <th>Resultado con descuento</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><input min= "0" inputMode="numeric" pattern="[0-9]*" className="form-control" value={ value } onChange={ handleValueChange } placeholder="Ingresa valor" type="number"></input></td>
          <td><input minLength={1} className="form-control"  style={ { width: "65px"} } value={ discount } onChange={handleDiscountChange} placeholder="%?" type="text" maxLength={2} ></input></td>
          <td><input min="0" style={{color: "green"}} className="form-control" value={ `$ ${formatNumber(result) }`} disabled type="text"></input></td>
        </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <p style={{color: "green"}}>Usted ahorro: $ { formatNumber(saving) } </p>
            </td>
          </tr>
        </tfoot>
      </table>     
    </div>
  );
}


export { formatNumber };

