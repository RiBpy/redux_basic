import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import buyCream from '../redux/icecream/creamActions'

function CreamContainer () {
    const numOfIceCreams=useSelector(state=>state.iceCream.numOfIceCreams)
    const dispatch=useDispatch()
  return (
    <div>
        
      <h2>Number of IceCreams - {numOfIceCreams} </h2>
      <button onClick={()=>dispatch(buyCream())}>Buy IceCream</button>
      <h6>Using Hooks</h6>
    </div>
  )
}


export default CreamContainer