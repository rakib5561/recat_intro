import logo from './logo.svg';
import './App.css';

function App() {

  const productsList = [

    { name: 'Laptop', price: '$990' },
    { name: 'Phone', price: '$1090' },
    { name: 'watch', price: '$1250' },
    { name: 'camera', price: '$980' },
    { name: 'keyboear', price: '$90' }

  ]

  return (
    <div className="App">

      {
        productsList.map(product => <Pruducts name={product.name} price={product.price}></Pruducts>)
      }

    </div>
  );
}


function Pruducts(propts) {

  return (

    <div>
      <h2>Name : {propts.name}</h2>
      <h4>Price : {propts.price}</h4>
    </div>

  )
}


export default App;
