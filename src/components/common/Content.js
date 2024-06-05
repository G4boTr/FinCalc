import React from "react";

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.defaultMsj = "Elije una de las opciones...";
    }
    render() {
        return(
            <div className="Content">
                <h1 style={ { fontSize: "85px", marginTop: "5px" } }> { this.defaultMsj } </h1>
            </div>
        );
    }
};



