import "./App.css";
import FetchTrendingHashtags from "./components/FetchTrendingHashtags";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <FetchTrendingHashtags />
    </Router>
  );
}

export default App;
