import "../../assets/styles/TableModal.css";

function TableModal(  { showModal, closeModal } ) {

  console.log("showModal", showModal)
  /* const modalClassName = showModal ? "modal modal-open" : "modal"; */
  const modalClassName = showModal ? "modal display-block" : "modal display-none"
  return(     
    <div className={modalClassName}>
      <div className="modal-content">
        <span  onClick={closeModal} className="close">&times;</span>
        <div>
          <p>...</p>
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
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
       
   
  );
};

export default TableModal;