

import { useEffect } from 'react'
import './App.css'
import Products from './components/Products' 
import { useSelector ,useDispatch} from 'react-redux'
import { updateTotal } from './features/cartSlice'


function App() {
  const { products, total,amount } = useSelector((state) => state.cart)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateTotal())
  },[products,dispatch])


  return (
    <>
      <div>App is Running..</div>
      <div>Cart Items {amount}</div>
      <div>
        {products.map((item,i) => <Products key={i} name={item.name} price={item.price} amount={item.amount}/>)}
      </div>
      <div>total : {total}</div>
    </>
  )
}

export default App
