import { useState, useEffect } from "react";
function Discounts() {

  const [value, setValue] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState("");
  const [saving, setSaving] = useState("");


  const handleValueChange =  (event) => { 
    setValue(event.target.value);
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
      <h2>Descuentos</h2>
      <table className="table">
        <thead>
        <tr>
          <th>Valor</th>
          <th>Descuento  %</th>
          <th>Resultado con descuento</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><input value={value} onChange={handleValueChange} placeholder="Ingresa valor" type="text"></input></td>
          <td><input value={discount} onChange={handleDiscountChange} placeholder="Ingresa % descuento" type="text" maxLength={3} ></input></td>
          <td><input value={result} disabled type="text"></input></td>
        </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <p >Usted ahorro {saving}</p>
            </td>
          </tr>
        </tfoot>
      </table>     
    </div>
  );
}

export default Discounts;
