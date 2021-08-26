import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import About from "./components/about/AboutMe.jsx";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={About} exact path="/" />
        <Route component={About} path="/improved-portfolio" />
        <Route component={Projects} path="/projects" />
        <Route component={Contact} path="/contact" />
        <Route component={Resume} to="/resume" />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
