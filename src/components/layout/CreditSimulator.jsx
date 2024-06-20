import { useState } from "react";
import ButtonMain from "../common/ButtonMain.jsx";
import TableModal from "./TableModal.jsx";

function CreditSimulator() {

  const [amount, setAmount] = useState(0);
  const [frecuency, setFrecuency] = useState("Mensual");
  const [yearFrecuency, setYearFrecuency] = useState(1);
  const [interest, setInterest] = useState(0);
  const [cuotas, setCuotas] = useState({cuotas: [], totalPagado: 0, totalInteresPagado: 0});
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    calcularCuotas();
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const handleFrecuencyChange = (event) => {
    setFrecuency(event.target.value);
  }

  const handleYearFrecuencyChange = (event) => {
    setYearFrecuency(event.target.value);
  }

  const handleInterestChange = (event) => {
    setInterest(event.target.value);
  }

  const todayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const [selectDate, setSelectDate] = useState(todayDate());

  const calcularCuotas = () => {
    const cuotasCalculadas = [];
    const monto = parseFloat(amount);
    const plazo = parseInt(yearFrecuency);
    const interesAnual = parseFloat(interest) / 100;
    const cuotasTotales = plazo * 12;
  
    const cuota = monto * (interesAnual / 12) / (1 - Math.pow(1 + (interesAnual / 12), -cuotasTotales));
  
    let saldoPendiente = monto;
    let totalPagado = 0;
    let totalInteresPagado = 0;
  
    for (let i = 1; i <= cuotasTotales; i++) {
      const abonoInteres = saldoPendiente * (interesAnual / 12);
      const abonoCapital = cuota - abonoInteres;
      saldoPendiente -= abonoCapital;
      
      totalPagado += cuota;
      totalInteresPagado += abonoInteres;
  
      cuotasCalculadas.push({
        id: i,
        abonoCapital: abonoCapital.toFixed(2),
        abonoInteres: abonoInteres.toFixed(2),
        totalCuota: cuota.toFixed(2),
        saldoPendiente: saldoPendiente.toFixed(2)
      });
    }
  
    const resultadoFinal = {
      cuotas: cuotasCalculadas,
      totalPagado: totalPagado.toFixed(2),
      totalInteresPagado: totalInteresPagado.toFixed(2)
    };
  
    setCuotas(resultadoFinal);
  };
  
  
  return (
    <div>
      <TableModal showModal={showModal} closeModal={closeModal} amount={amount} selectDate={selectDate} frecuency={frecuency} yearFrecuency={yearFrecuency} interest={interest} cuotas={cuotas} />
      <h2 style={{ color: "white" }}>Simulador de Crédito</h2>
      <table className="table table-borderless border border-2">
        <thead className="table-dark">
          <tr>
            <th>Fecha del crédito: </th>
            <th>Monto del crédito: </th>
            <th>Forma de pago: </th>
            <th>Plazo de pago: </th>
            <th>Interés: </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input onChange={(e) => { setSelectDate(e.target.value) }} value={selectDate} type="date" className="form-control" /></td>
            <td><input onChange={handleAmountChange} value={amount} className="form-control" type="number" placeholder="Monto: $" /></td>
            <td>
              <select onChange={handleFrecuencyChange} value={frecuency} className="form-select">
                <option value="Mensual">Mensual</option>
              </select>
            </td>
            <td>
              <select onChange={handleYearFrecuencyChange} value={yearFrecuency} className="form-select">
                <option value="1">01 año</option>
                <option value="2">02 años</option>
                <option value="3">03 años</option>
                <option value="4">04 años</option>
                <option value="5">05 años</option>
                <option value="6">06 años</option>
                <option value="7">07 años</option>
                <option value="8">08 años</option>
                <option value="9">09 años</option>
                <option value="10">10 años</option>
                <option value="11">11 años</option>
                <option value="12">12 años</option>
              </select>
            </td>
            <td>
              <input onChange={handleInterestChange} value={interest} className="form-control" type="number" placeholder="Interés" />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              <ButtonMain text="Calcular" className={"btn btn-dark"} onClick={openModal} />              
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default CreditSimulator;


