import './App.css';
import Layout from './components/layout';
import Home from './pages/home'
import Detail from './pages/detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Layout />}> 
         <Route index element={<Home />} />
         <Route path='/:id' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
