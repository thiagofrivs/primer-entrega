import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Esto es un párrafo."/>
    </div>
  );
}

export default App;
