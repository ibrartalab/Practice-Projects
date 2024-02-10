

import { useEffect, useState } from 'react'
import './App.css'
import Products from './components/Products'
import { useSelector, useDispatch } from 'react-redux'
import { updateTotal } from './features/cartSlice'


function App() {
  const { products, total, amount } = useSelector((state) => state.cart)
  const [inputValue, setInputValue] = useState()
  const [filterdData, setFilterData] = useState(products)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateTotal())
  }, [products, dispatch])




  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='search...' />
      <div>App is Running..</div>
      <div>
        {filterdData.filter((item) => {
          return inputValue === '' ? item : item.name.toLowerCase().includes(inputValue)
        }).map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </div>
      <div>Cart Items {amount}</div>
      <div>
        {products.map((item, i) => <Products key={i} name={item.name} price={item.price} amount={item.amount} />)}
      </div>
      <div>total : {total}</div>
    </>
  )
}

export default App
