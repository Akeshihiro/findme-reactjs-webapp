import React from "react";
import ReactDOM from "react-dom";


import LoginViewComponent from "./pages/LoginViewComponent";


var Main = function () {
    return <div>
        <LoginViewComponent/>
    </div>
}

ReactDOM.render(<Main />, document.getElementById('app'));