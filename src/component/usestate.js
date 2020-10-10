import React ,{useState, useEffect}  from 'react';


const Usestatefunc = () =>{

	const [count, setcount] = useState(0);

	
	return(
		<div>
 
		<h1> Welcome to the Hooks {count}</h1>
		<button onClick={() => setcount(0)}>Reset</button>
		<button onClick={() => setcount(count + 1)}>increment</button>
		<button onClick={() => setcount(count - 1)}>decrement</button>
    </div>

		)
}

export default Usestatefunc; 