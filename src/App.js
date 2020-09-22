import React from 'react';
import './App.css';
import Counter from './demo/Counter';
//import User from './demo/User';


// function First(){
// let name = 'Component'
//   return(
//     <div>
//       <hr/>
//   <h1>My First {name}</h1>
//       <hr/> 
//     </div>
//   )

// }

// function Learning(proops){
//     return(

//     <h2>I'm learning ReactJs {proops.name}</h2>
       
//     )
  
//   }

//   function Secound(){
//     let comp = 'Component'
//       return(
//         <div>
//           <hr/>
//       <h1>My Secound {comp}</h1>
//           <hr/> 
//         </div>
//       )
    
//     }
    
// function Person1(proops){
//   let user = 'Person1'
//   return(
// <div>
//   <mark>
//   <h3>{proops.hi} from Component {user}</h3>
//   </mark>
// </div>
//   )
// }


function App() {
  return (
    <div>
      <header>
        <Counter/>
        {/* <User name = 'John' surname = 'Smith'/> */}
        {/* <Learning name = 'Components'/>
        <First/>
        <Secound/>
        <Person1 hi = 'Hello'/> */}
      </header>
    </div>
  );
}

export default App;
