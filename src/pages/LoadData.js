import {useState} from "react";
import AddForm from "./AddForm.js";
import DisplayForm from "./DisplayForm.js";

const data=()=>
{ 
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData !=null ){ return userData;} 
    else{ return [];}
};
 
function LoadData(){
   
    const [ userData, setUserData] = useState([]); 
    const [ dataTODO, setDataTODO ] = useState(data);

    const handleSelect = (id) =>
            { 
                let copydata = dataTODO.map( (item) => { 
                if(item.id === Number(id))
                    { return{...item, complete: !item.complete};    }
                else
                    { return {...item};    }    
                 }  ); 
                 setDataTODO(copydata);   
                 setUserData(copydata);
            };   
     
    const handleComplete = ()=>
        {
           let filterdata = dataTODO.filter( task => { return !task.complete; } );
           setDataTODO(filterdata);
           setUserData(filterdata);
        };

    const handleAdd = (things)=> 
        {   
            let newdata = [...dataTODO];
            newdata = [...newdata,{  id: dataTODO.length +1, task: things , complete: false  }];
            setDataTODO(newdata);
            setUserData(newdata);
        };


    return(
        <div  >  
            <DisplayForm   dataTODO = {dataTODO}   handleComplete = {handleComplete} handleSelect ={handleSelect} userData ={userData} /> 
            <AddForm handleAdd = {handleAdd}/> 
        </div>);
}


export default LoadData;



