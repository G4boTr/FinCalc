import "../../assets/styles/TableModal.css";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";



function TableModal(  { showModal, closeModal, amount, frecuency, yearFrecuency, interest, selectDate, cuotas } ) {

  const modalClassName = showModal ? "modal display-block" : "modal display-none";

  const tableRef = useRef(null);

  const generatePDF = () => {

    const table = tableRef.current;

    html2canvas(table).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("tabla_credito_pdf");
    });
  };

/*
const generatePDF = () => {
  
  const table = tableRef.current;
  
  const tableHtml = table.outerHTML;

  fetch('http://localhost:3000/generar-pdf', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      html: tableHtml,
    }),
  })
    .then(response => response.blob())
    .then(blob => {
      
      const url = window.URL.createObjectURL(new Blob([blob]));
     
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'tabla_credito.pdf');
      
      document.body.appendChild(link);
     
      link.click();
      
      link.parentNode.removeChild(link);
    })
    .catch(error => {
      console.error('Error al descargar el PDF', error);
      
    });
};

*/

  const totalPagado = cuotas.totalPagado;
  const totalInteresPagado = cuotas.totalInteresPagado;
  const cuotasList = cuotas.cuotas;  

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
  }


  return (
    <div className={modalClassName}>
      <div className="modal-content bg-dark">
        <span onClick={closeModal} className="close">&times;</span>
        <div className="table-responsive-md" ref={tableRef}>
          <table className="table table-striped table-dark table-borderless border border-2 table-hover">
            <thead className="table-dark">
              <tr>
                <td colSpan="5">
                  <div className="top-div" style={{ color: "white", display: "flex", justifyContent: "space-between" }}>
                    <p>Detalles del credito: </p>
                    <p>Fecha del Credito: {selectDate}</p>
                    <p>Monto del Credito: $ {formatNumber(amount)}</p>
                    <p>Forma de pago: {frecuency}</p>
                    <p>Plazo de pago: {yearFrecuency} Años</p>
                    <p>Interes: {interest} %</p>
                  </div>
                </td>
              </tr>
              <tr className="tr-head">
                <th>Cuota No:</th>
                <th>Abono Capital:</th>
                <th>Abono Interes:</th>
                <th>Total Cuota:</th>
                <th>Saldo Pendiente:</th>
              </tr>
            </thead>
            <tbody>
              {cuotasList.map((cuota) => (
                <tr key={cuota.id}>
                  <td>{cuota.id}</td>
                  <td>{formatNumber(cuota.abonoCapital)}</td>
                  <td>{formatNumber(cuota.abonoInteres)}</td>
                  <td>{formatNumber(cuota.totalCuota)}</td>
                  <td>{formatNumber(cuota.saldoPendiente)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5">
                  <p>Total pagado: {formatNumber(totalPagado)}</p>
                  <p>Total interes pagado: {formatNumber(totalInteresPagado)}</p>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <button className="btn btn-dark border border-secundary" onClick={generatePDF}>Descargar</button>
                </td>
                <td colSpan={3}>
                  <button className="btn btn-dark border border-secundary" onClick={closeModal}>Salir</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};  

export default TableModal;