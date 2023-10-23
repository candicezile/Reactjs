/*This line imports the necessary modules from the 'react' library. 
It imports the React object and the useState hook. useState is used to manage the
 state of variables in functional components.*/
import React, { useState } from 'react';
import './App.css';


//This defines a functional component named App.

function App() {


  /* This line declares a state variable name using the useState hook.
   Initially, name is set to an empty string, and setName is a function
   used to update the name state.
Similarly, there are state variables for age and email,
 initialized to empty strings.*/
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState('');







  /*This is a function named testVariable. When called, it logs the values of
  name, age, and email to the console.*/
  const displayVariable = (e) => {
    e.preventDefault();
    const formData = { name, age, email };
     setDisplay(name, age, email);
    // localStorage.setItem('formData', JSON.stringify(formData));
    // console.log('Form data saved:', formData);
  };


  

  /*The value and onChange attributes of the input fields are used to bind 
the input values to the corresponding state variables (name, age, email).*/
  return (
    <form className="form-background">
      <div className="App">
        <h1>React form</h1>

        <div className="Form">
          <label className='input'>Name</label><br></br>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="Form">
          <label className='input'>Age</label><br></br>
          <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div className="Form">
          <label className='input'>Email</label><br></br>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <button type="submit" className='button' onClick={displayVariable}>Submit</button>

         {/* Display the state values */}
         <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </form>
  );
}

/* This exports the App component as the default export of this module, making it available for use in
 other parts of your React application.*/
export default App;

