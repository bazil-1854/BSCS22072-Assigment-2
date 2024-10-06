import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./Components/index"; 
import SignIn from './Components/pagesSignIn';
import Pagesprofile from './Components/pagesProfile';
import SignUp from './Components/pagesSignUp';
import PagesBlank from './Components/pagesBlank';
import UiButtons from './Components/uiButtons';
import UiForms from './Components/uiForms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pages-profile" element={<Pagesprofile />} />
        <Route path="/pages-SignIn" element={<SignIn />} />
        <Route path="/pages-SignUp" element={<SignUp />} />
        <Route path="/pages-blank" element={<PagesBlank />} />
        <Route path="/ui-buttons" element={<UiButtons />} />
        <Route path="/ui-forms" element={<UiForms />} />
      </Routes>
    </Router>
  );
}

export default App;
