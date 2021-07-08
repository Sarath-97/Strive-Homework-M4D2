
import './App.css';
import MyNav from './Components/MyNavbar';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import LatestReleases from './Components/LatestReleases';
import FormComments from './Components/FormComments';
import CommentArea from './Components/CommentArea';



function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      
      <LatestReleases  />
      <Footer />


    </div>
  );
}

export default App;
