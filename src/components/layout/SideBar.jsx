import "../../assets/styles/SideBar.css";

//import 'bootstrap/dist/css/bootstrap.min.css';

const SideBar = ({ onClick }) => {

  const optionClick = (option) => {
    onClick(option);
  };

  return (
    <div className="d-flex flex-column vh-100 bg-dark text-white text-center col-sm-4 my0">
      <div className="p-0 flex-shrink-0">
        <ul className="list-unstyled bg-dark vh-100">
          <li className="opciones font-weight-bold mb-2">Opciones</li>
          <li onClick={() => optionClick("Descuentos")} className="hover cursor-pointer py-3">Descuentos</li>
          <li onClick={() => optionClick("IVA 19%")} className="hover cursor-pointer py-3 ">IVA 19%</li>
          <li onClick={() => optionClick("Simulador de Credito")} className="hover cursor-pointer py-3">Simulador de Credito</li>
          <li onClick={() => optionClick("Intercambio de Divisas")} className="hover cursor-pointer py-3">Intercambio de Divisas</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

