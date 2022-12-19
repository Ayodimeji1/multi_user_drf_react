import './App.css';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Home from './components/home';
import Categories from './components/categories';
import CategoryProducts from './components/categoryproducts';
import Products from './components/products';
import ProductDetail from './components/productdetail';
import Footer from './components/footer';
import Checkout from './components/checkout';
import 'bootstrap/dist/css/bootstrap.min.css';



// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <>
    {/* <div className="App">
      
    </div> */}
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:product_slug/:product_id' element={<ProductDetail/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>} />
    </Routes>   
    <Footer/>
    
    </>
  );
}

export default App;
