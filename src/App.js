import "./App.css";
import FetchTrendingHashtags from "./components/FetchTrendingHashtags";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
function App() {
  return (
    <div className="App">
      <Button variant="contained">Fetch trends</Button>
      <Router>
        <FetchTrendingHashtags />
      </Router>
    </div>
  );
}

export default App;
