import React, {Component} from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


class Todoapp extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            
        }
    }

    nameChangeHandler = (e) =>{
        this.setState({
            name : e.target.value
        })
    }


    FormHandlers = (e) => {
        e.preventDefault();
    }
    

    render(){
       
        return(
            <div className='container'>
           <nav className='navbar navbar-expand-lg navbar-light bg-dark text-white' style={{  justifyContent:'center'}}> 
           <h1>To Do App</h1></nav>
           <form style={{height: '100%', width :'50%'}} onSubmit={this.FormHandlers}>
              <div className="form-group" >
               <label>Item Name:</label>
               <textarea className='form-control' type="text"  name='name' onChange={this.nameChangeHandler} />
               </div>
              
              
               <button className='btn btn-danger' type="button="> Create Item</button>
               
           </form>
           <br />
           <br />
           <br />

           <MDBTable>
           <MDBTableHead>
               <tr>
               <th>Item Name</th>

               </tr>
               </MDBTableHead>
               <MDBTableBody>
               <tr>
                   <td>Pen</td>

               </tr>
               </MDBTableBody>
           </MDBTable>
            </div>
        )
    }
}

export default Todoapp;
