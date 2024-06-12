import SideBar from "./SideBar";
import Content from "./Content";

const MainLayout = () => {

    const handleClick = (option) => {
        console.log("Click en opcion", option)
    };

    return(
        <div className="main-layout" style={ { margin: 0, padding: 0, display: "flex", justifyContent: "flex-start"} }>            
            <SideBar onClick={ handleClick }/>
            <Content />            
        </div>
    );
}

export default MainLayout;