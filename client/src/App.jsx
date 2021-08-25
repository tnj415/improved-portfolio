import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={About} path="/" exact />
        {/* <Route component={About} to="/about" /> */}
        <Route component={Projects} path="/projects" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </BrowserRouter>
  );
}
