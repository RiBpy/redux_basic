import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import buyCake from '../redux/cakes/cakeActions'

function InputCakeContainer () {
    const[number,setNumber]=useState(1)
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        const val=e.value
        val<numOfCakes?setNumber(val):alert("Out Of Stock")
    }
  return (
    <div>
        
      <h2>Number of cakes - {numOfCakes} </h2>
      <input type="text"  onChange={(e)=>handleChange(e.target)} />
      <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cake</button>
      <h6>Using Hooks</h6>
    </div>
  )
}



export default InputCakeContainer