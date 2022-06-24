import * as React from "react";

const SelectForm = ( {itemTODO, handleSelect} )=> {

   return(
    <div >
    <ul> 
    <li
     id = {itemTODO.id} key = {itemTODO.id +itemTODO.task  } value ={ itemTODO.id} name ='itemTODO'
       onClick = { (event) =>{ event.preventDefault(); handleSelect(event.currentTarget.id) ;} } className ={itemTODO.complete ? "itemNotTODO" : "itemTODO"} >
    {itemTODO.task}  
    </li>  
    </ul>
    </div>);
};

export default SelectForm;

