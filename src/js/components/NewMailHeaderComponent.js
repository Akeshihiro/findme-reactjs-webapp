import React from "react";

export default class NewMailHeaderComponent extends React.Component {


    createContent() {
        return <div>
            <div className="row">
                <div className="col-md-11">
                    <font size="5">Neue Nachricht </font>
                    <span className=" 	glyphicon glyphicon-envelope"></span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div style={{border:"1px solid"}}></div>
                </div>
            </div>
        </div>;
    }



    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}