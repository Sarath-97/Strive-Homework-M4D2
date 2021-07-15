import "./App.css";
import MyNav from "./Components/MyNavbar";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import LatestReleases from "./Components/LatestReleases";
import FormComments from "./Components/FormComments";
import CommentArea from "./Components/CommentArea";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Regristration from "./Components/Regristration";

function App() {
  return (
    <div>
        <Router>
        <MyNav />
        <Welcome />
        <Route path="/regristration" exact render = {(routerProps) => <Regristration {...routerProps} />/>
        <Regristration />
    <Route path="/" exact render = {(routerProps) => <LatestReleases {...routerProps} />}/>
        
        <Footer />
    </Router>
      </div>
  );
}

export default App;
