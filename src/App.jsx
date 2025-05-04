import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <h1>Minha Primeira Página React! ✨</h1>
      <p>Começando do zero!</p>

      <nav>
        <Link to="/home">Ir para a Home Page</Link>
      </nav>
    </>
  );
}

export default App;
