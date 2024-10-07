import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Components/Index';
import KindofCoffee from './Components/KindofCoffee';
import Footer from './Components/Footer';
import LiveCoffeeMaking from './Components/LiveCoffeeMaking';
import CoffeeStats from './Components/CoffeeStats';
import CoffeeServe from './Components/CoffeeServe';
import EcoFriendlySystem from './Components/EcoFriendlySystem';
import Generic from './Components/Generic';
import Elements from './Components/Elements';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/CoffeeServe" element={<CoffeeServe />} />
        <Route path="/CoffeeStats" element={<CoffeeStats />} />
        <Route path="/LiveCoffeeMaking" element={<LiveCoffeeMaking />} />
        <Route path="/EcoFriendlySystem" element={<EcoFriendlySystem />} />
        <Route path="/KindofCoffee" element={<KindofCoffee />} />
        <Route path="/Footer" element={<Footer />} />
        
        <Route path="/Generic" element={<Generic />} />
        <Route path="/Elements" element={<Elements />} />
      </Routes>
    </Router>
  );
}

export default App;