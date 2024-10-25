import './App.css';
import Layout from './components/layout';
import Home from './pages/home'
import Detail from './pages/detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { ProductProvider } from './components/productContext'; 
// import Product from './product';


function App() {
  return (
    <ProductProvider> 
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path='product/:id' element={ <Detail /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
