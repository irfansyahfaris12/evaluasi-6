import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../container/Home";
import Food from "../container/Food";
import Drink from "../container/Drink";
import Navbar from "../component/Navbar";
import Contact from "../container/Contact";

function Routes(){
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/Food" component={Food} />
            <Route path="/Drink" component={Drink} />
            <Route path="/Contact" component={Contact} />
        </Router>
    );
}

export default Routes;  