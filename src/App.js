import './App.css';
import NavBar from './components/NavBar/index';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer category={"category"}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer idProduct={1}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
