import { Component } from "react";

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.defaultMsj = "Elije una de las opciones...";
    }
    render() {
        return(
            <div className="d-flex">
                <h1 className="display-1"> { this.defaultMsj } </h1>                
            </div>
            
        );
    }
};




