import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Index from './Components/Index';
import KindofCoffee from './Components/KindofCoffee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} /> 
        <Route path="/KindofCoffee" element={<KindofCoffee />} /> 
      </Routes>
    </Router>
  );
}

export default App;