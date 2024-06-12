import "../../assets/styles/SideBar.css";

const SideBar = ( { onClick } ) => {

  const optionClick = (option) => {
    onClick(option);
  };

 
  
  return(  

  <div className="side-bar">
    <ul>
      <li> Opciones </li>
      <li onClick= { () => optionClick("Descuentos") } className="li-hover"> Descuentos </li>
      <li onClick= { () => optionClick("IVA 19%") } className="li-hover"> IVA 19% </li>
      <li onClick= { () => optionClick("Simulador de Credito") } className="li-hover"> Simulador de Credito </li>
      <li onClick= { () => optionClick("Intercambio de Divisas") } className="li-hover"> Intercambio de Divisas </li>
    </ul>
  </div>
  
  );
} 
export default SideBar;
