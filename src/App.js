import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./Components/index";
import Pagesprofile from "./Components/pagesprofile";
import SignIn from './Components/pagesSignIn';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pages-profile" element={<Pagesprofile />} />
        <Route path="/pages-sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
