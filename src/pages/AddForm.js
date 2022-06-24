import * as React from "react";
import {useState} from "react";


const AddForm = ({handleAdd}) =>
{
   const [things, setThings] = useState('');
   
   const handleSubmit = (event) =>{event.preventDefault(); handleAdd(things);setThings("");};

   return(
      <>
      <form  className= "form-control" onSubmit = {handleSubmit}  > 
        <label> Enter your task : </label> 
        <input type ="text" value = {things} onChange = { (event) => setThings(event.target.value)  }  />
        <br/>
        <button type="submit" className= "btn btn-outline-success" > Add Task</button>
      </form>
       </>);
}


export default AddForm;





