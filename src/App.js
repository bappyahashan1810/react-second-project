import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Product></Product>
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h1>Name:</h1>
      <p>Price:</p>
    </div>
  );
}

export default App;
