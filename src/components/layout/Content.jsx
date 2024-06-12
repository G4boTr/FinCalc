import { Component } from "react";
export default class Content extends Component {
    constructor(props) {
        super(props)
        this.defaultMsj = "Elije una de las opciones...";
    }
    render() {
        return(
            <div className="Content">
                <h1 style={ { fontSize: "85px", marginTop: "5px", zIndex: 25, marginLeft: "5vw", color: "#fff" } }
                > { this.defaultMsj } </h1>
            </div>
        );
    }
};




