import './App.css';
import AppRouter from './routes';
import ShopProvider from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <AppRouter />
    </ShopProvider>
  );
}

export default App;
