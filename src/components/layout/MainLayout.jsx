import SideBar from "./SideBar";
import Content from "./Content";


const MainLayout = () => {

    const handleClick = (option) => {
        console.log("Click en opcion", option)
    };

    return(
        <div className="d-flex text-center" >            
            <SideBar onClick={ handleClick }/>
            <Content />               
        </div>
    );
}

export default MainLayout;