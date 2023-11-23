import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import TrendingGame from './components/TrendingGame';
import "./style/landingPage.css"
import BestGame from './components/BestGame';

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro/>
      </div>

      <div className="trending">
        <TrendingGame/>
      </div>

      <div className="best">
        <BestGame/>
      </div>
    </div>
  ); 
}

export default App;
