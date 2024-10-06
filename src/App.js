import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./Components/index";
import Pagesprofile from "./Components/pagesprofile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pages-profile" element={<Pagesprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
