import './App.css';
// import Layout from './components/layout';
// import Home from './pages/home'
// import Detail from './pages/detail'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
// import Product from './product';
// import ProductList from './productList';

function App() {
  return (
    // <BrowserRouter> 
    //   <Routes>
    //     <Route path='/' element={<Layout />}> 
    //      <Route index element={<Home />} />
    //      <Route path='/:slug' element={<Detail />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    // <Product/>
    <Home/>
  );
}

export default App;
