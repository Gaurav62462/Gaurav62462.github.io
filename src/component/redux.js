import React from 'react';
import { Addtolist } from './actions/actiontype';
import { connect } from 'react-redux';

let Button =({ whatsap, stateobject, saysomething }) =>{
	<div>
	<button onClick={saysomething}>Click here to change the value</button>
	<h2>{whatsap}</h2>
	<button onClick={ => console.log('Redux state:' , stateobject 	)}>
	Press to inspect STATE in console panel</button>
	</div>
}

const mapStateToProps = (state) => ({
	whatsap : state.say,
	stateobject
})

const mapDispatchToProps =(dispatch) => ({
	saysomething : ()=>{dispatch(sayhello())}
})

Button = connect( 
	mapStateToProps,mapDispatchToProps
	) (Button)

export default Button;