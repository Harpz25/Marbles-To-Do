import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import  useSession  from "./pages/Session.js";
import LoadData from "./pages/LoadData.js";
import Marbles_logo from "./marbles_todo.png";
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  return (
    <div className="App">
      <header className="AppHeader" > 
      <img src={Marbles_logo} className = "AppLogo" alt = "Marbles_logo"/>
      <h1>Welcome to Marbles To Do!</h1>
      </header>
      <Routes className = "container">
            <Route path="/" element={<Home />} />
             <Route path ="session" element = {<Session/>} />
             <Route path="loaddata" element={<LoadDataRoute  />} />
        </Routes>
    </div> );
}


function Home()
{
  return (
    <>
      <main>
        <h2> Stay Organized, Stay Ahead</h2>
        <br/>
          <p> Marbles To Do is a fully web based and free to use website which let you to create your very own simple to do list. <br/>
              Get organized, stay on top of your tasks and start listing your tasks by clicking the link below!
          </p>     
          <nav> 
                <Link to="/session">Proceed</Link>
          </nav>
      </main>
      <footer> Marbles To Do | Your To-Do List </footer>
    </>);
}


function Session()
{
  const [termsAccepted, setTermsAccepted] = useSession('terms', false);

  if(!termsAccepted) 
  {
    return(
       <>
       <main>
          <h2>Terms of Service</h2>
          <br/>
          <p> 
            Before we get started, Marbles To Do website will saved your data activity in order to provide better service in terms 
            of website functionality and user experience. Click the button below if you agree to the terms of Marbles To Do website.
          </p>
          <button onClick={ () => {setTermsAccepted(true);} }> I accept </button>
          {console.log(termsAccepted)}
        </main>  
        <footer> <nav> Return To <Link to="/">Homepage</Link> </nav>  </footer>
       </>);
  }
  else
  {   
    return(
        <>
        <main>
           <h2> Getting Started</h2>
           <br/>
           <p> Click the link below to start creating your very own to do list and plan your life!</p>
           <nav>
             <Link to="/loaddata"> Proceed </Link>
            </nav>
           </main>  
           <footer> <nav> Return To <Link to="/">Homepage</Link> </nav>  </footer>
        </>);
  }
}


function LoadDataRoute()
{
   return(
    <>
    <div className = "loadMarbles"> 
      <h2 > To Do List </h2> 
         <br/>
         <p>✍️ To add task, type in your task in the textbox provided and then click the "Add Task" button <br/>
         ✍️ To remove task, select task shown from the list and then click the "Remove Task" button</p>
        <br/>
      <LoadData/>
      <br/>
      <p> If you wish to delete all of your saved data, you may click the button below </p>
      <button className = "sessionClear" onClick={() => {localStorage.clear(); alert("Your data have been successfully deleted!"); }}>
            clear my data 
      </button>
   </div>
    <footer> <nav> Return To <Link to="/">Homepage</Link> </nav>  </footer>
    </>);
}


export default App;



