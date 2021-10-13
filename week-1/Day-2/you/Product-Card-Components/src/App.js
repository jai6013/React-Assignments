import { useState } from 'react';
import './App.css';
import { ProductCard } from './Components/ProductCard';
import data from './Config/db.json'
function App() {
  const [productData, setProductData] = useState(data) 
  const handleAdd = (id) => {
    const newProductArray =  productData.map((item) => item.id ===id ? {...item, quantity: item.quantity + 1} : item)
    setProductData(newProductArray)
  }
  const handleSubtract = (id) => {
    const newProductArray =  productData.map((item) => item.id ===id ? {...item, quantity: item.quantity - 1} : item)
    setProductData(newProductArray)
  }
  return (
    <>
    <h2 className="heading">Pruduct Cards</h2>
    <div className="App">
      { productData.map((item) => {
          
         return <ProductCard item = {item} handleAdd={handleAdd} handleSubtract={handleSubtract}/>
        })
      }
    </div>
    </>
  );
}

export default App;
