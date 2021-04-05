import "./App.css";
import FetchTrendingHashtags from "./components/FetchTrendingHashtags";
import { BrowserRouter as Router } from "react-router-dom";
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
