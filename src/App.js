import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const products = [
  //   { name: 'laptop', price: 120000 },
  //   { name: 'Phone', price: 10500 },
  //   { name: 'R15(bike)', price: 600500 },
  //   { name: "Flat", price: 10600500 }
  // ]

  // const bikes = [
  //   { name: 'Apache', version: 'v3', price: 2100000 },
  //   { name: 'Palser', version: 'double disc', price: 2300000 },
  //   { name: 'Yahamaha', version: 'v3', price: 6100000 },
  //   { name: 'Suzuki', version: 'v3', price: 3100000 },

  // ]
  return (
    <div className="App">
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <h1>Bike name and price</h1>
      {
        bikes.map(bike => <Bikes name={bike.name} version={bike.version} price={bike.price}></Bikes>)
      } */}
      {/* <Product name="laptop" price="120000 BD"></Product>
      <Product name="Phone" price="10500 BD"></Product>
  <Product name="R15(bike)" price="600500 BD" ></Product> */}
      <Counter></Counter>


    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(10);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter: {count} </h1>
      <h1>Increase</h1>
      <button onClick={increaseCount}>Increase</button>
      <h1>Decrease</h1>
      <button onClick={decreaseCount}>Decrease:</button>
    </div>




  );
}

// function Product(props) {
//   return (
//     <div className='product'>
//       <h1>Name: {props.name}</h1>
//       <p>Price: {props.price}</p>

//     </div>
//   );
// }

// function Bikes(props) {
//   return (
//     <div className="bike">
//       <h2>Name: {props.name}</h2>
//       <p>Version: {props.version}</p>
//       <h4>Price: {props.price}</h4>
//     </div>
//   )
// }


export default App;
