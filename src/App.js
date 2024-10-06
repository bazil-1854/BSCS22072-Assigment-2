import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./Components/index"; 
import SignIn from './Components/pagesSignIn';
import Profile from './Components/profile';
import SignUp from './Components/pagesSignUp';
import PagesBlank from './Components/pagesBlank';
import UiButtons from './Components/uiButtons';
import UiForms from './Components/uiForms';
import UiCards from './Components/uiCards';
import UiTypography from './Components/uiTypography';
import UiIcons from './Components/uiIcons';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pages-profile" element={<Profile />} />
        <Route path="/pages-SignIn" element={<SignIn />} />
        <Route path="/pages-SignUp" element={<SignUp />} />
        <Route path="/pages-blank" element={<PagesBlank />} />
        <Route path="/ui-buttons" element={<UiButtons />} />
        <Route path="/ui-forms" element={<UiForms />} />
        <Route path="/ui-cards" element={<UiCards />} />
        <Route path="/ui-typography" element={<UiTypography />} />
        <Route path="/ui-icons" element={<UiIcons />} />
      </Routes>
    </Router>
  );
}

export default App;
