import "./App.css";
import FetchTrendingHashtags from "./components/FetchTrendingHashtags";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <FetchTrendingHashtags />
    </Router>
  );
}

export default App;
