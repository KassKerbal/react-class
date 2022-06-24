import './App.css';
import NavBar from './components/NavBar/index';
import ItemListContainer from './containers/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
