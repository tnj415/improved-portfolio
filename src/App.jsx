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
        <Route component={About} exact path={process.env.PUBLIC_URL+"/"}  />
        {/* <Route component={About} path="/improved-portfolio" /> */}
        <Route component={Projects} path={process.env.PUBLIC_URL+"/projects"} />
        <Route component={Contact} path={process.env.PUBLIC_URL+"/contact"} />
        <Route component={Resume} path={process.env.PUBLIC_URL+"/resume"} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
