import React from "react";
import Home from "./NewProject/Home";
import About from "./NewProject/About";
import Services from "./NewProject/Services";
import Context from "./NewProject/Context";
import Policy from "./NewProject/Policy";
import Error from "./NewProject/Error";
import { Switch, Route } from "react-router-dom";

export default function Routing() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/context" component={Context} />
        <Route path="/policy" component={Policy} />
        <Route path="/Error" component={Error} />
      </Switch>
    </div>
  );
}
