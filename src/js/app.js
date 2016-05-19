import React from "react";
import ReactDOM from "react-dom";
import { Router, hashHistory } from "react-router";

<<<<<<< HEAD

import LoginViewComponent from "./pages/LoginViewComponent";


var Main = function () {
    return <div>
        <LoginViewComponent/>
    </div>
}

ReactDOM.render(<Main />, document.getElementById('app'));
=======
import routes from "./routes";

ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById("app")
);
>>>>>>> c0f160b0ace89630ba7c468bf6e6e074a098affc
