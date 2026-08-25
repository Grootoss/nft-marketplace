import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Rankings from './pages/Rankings';
import Wallet from './pages/Wallet';
import Signup from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
