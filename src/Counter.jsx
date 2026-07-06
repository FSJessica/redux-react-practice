import { useDispatch, useSelector } from 'react-redux';

const Counter = ( ) => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return ( 
        <div>
           <h2>Counter in Counter Component: {count}</h2> 
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>    
        </div>
    );
};

export default Counter;