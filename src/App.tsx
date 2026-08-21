import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Rankings from './pages/Rankings';
import Wallet from './pages/Wallet';
import Signup from './pages/Signup';
import Artist from './pages/Artist';
import Nft from './pages/Nft';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/nft/:id" element={<Nft />} />
      </Route>
    </Routes>
  );
}

export default App;
