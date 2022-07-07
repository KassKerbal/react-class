import './App.css';
import NavBar from './components/NavBar/index';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './containers/Cart';
import ShopProvider from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
