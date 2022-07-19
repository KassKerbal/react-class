import './App.css';
import AppRouter from './routes';
import ShopProvider from './context/ShopContext';
import UserProvider from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <ShopProvider>
        <AppRouter />
      </ShopProvider>
    </UserProvider>
  );
}

export default App;
