import "./App.css";
import FetchTrendingHashtags from "./components/FetchTrendingHashtags";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <button variant="contained">Fetch trends</button>
      <Router>
        <FetchTrendingHashtags />
      </Router>
    </div>
  );
}

export default App;
