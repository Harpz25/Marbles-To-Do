import * as React from "react";
import SelectForm from "./SelectForm.js";

const DisplayForm =({dataTODO, handleComplete, handleSelect, handleSession})=> {

    const handleChange =()=> { localStorage.setItem('userData', JSON.stringify(dataTODO));}
    
    return(
        <div  >
            
        { dataTODO.map( itemTODO =>{ 
            return(<SelectForm   itemTODO ={itemTODO}  handleSelect = {handleSelect} handleComplete = {handleComplete} handleSession = {handleSession} /> )})
        }

         <button type = "input" className= "btn btn-outline-warning" onClick = {handleComplete} onChange ={handleChange()}> Remove Task</button>
       
        </div>
    );
};

export default DisplayForm;


