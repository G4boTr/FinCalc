import "../../assets/styles/TableModal.css";

function TableModal(  { showModal, closeModal, amount, frecuency, yearFrecuency, interest, selectDate, cuotas } ) {

  const modalClassName = showModal ? "modal display-block" : "modal display-none"
  return(     
    <div className={modalClassName}>
      <div className="modal-content">
        <span  onClick={closeModal} className="close">&times;</span>
        <div>
          <p>Detalles del credito: </p>
          <p>Fecha del Credito: {selectDate}</p>
          <p>Monto del Credito: $ {amount}</p>
          <p>Forma de pago:  {frecuency}</p>
          <p>Plazo de pago: {yearFrecuency}</p>
          <p>Interes: {interest}%</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Cuota No: </th>
              <th>Abono Capital: </th>
              <th>Abono Interes: </th>
              <th>Total Cuota: </th>
              <th>Saldo Pendiente: </th>
            </tr>
          </thead>
          <tbody>
            {cuotas.map((cuota) => (
              <tr key={cuota.id}>
                <td>{cuota.id}</td>
                <td>{cuota.abonoCapital}</td>
                <td>{cuota.abonoInteres}</td>
                <td>{cuota.totalCuota}</td>
                <td>{cuota.saldoPendiente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
       
   
  );
};

export default TableModal;