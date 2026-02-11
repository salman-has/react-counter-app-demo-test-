
import {useSelector,useDispatch} from 'react-redux';
import './counter.css';
export default function Counter(){
    const count=useSelector((state)=> state.value);
    const dispatch=useDispatch();
    

    
    
    return(
        <div div className='main'>
            <h2>Increment/Decrement Counter</h2>
            <h1>Count :<span style={{color:count>0? "green":"red"}}>{count}</span> </h1>
            <button className='btn-increment' onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
            <button className='btn-decrement' onClick={()=>dispatch({type:'DECREMENT'})}>--</button>
        </div>
    );
}