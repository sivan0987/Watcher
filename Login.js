import React, { useState } from 'react';
import Home from './Home';
import './App.css';


const Login = () => {
  const [inputText, setInputText] = useState('');
  const [savedText, setSavedText] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSaveToFile = () => {
    // Update the state variable with the entered text
    setSavedText(inputText);

    // Update state to indicate that text has been saved
    setInputText('');
  };

  return (
    <div className="login-container">
      
      {savedText ? (
        <Home savedText={savedText} />
      ) : (
        <>
        <div>
            <div>
                <img className='col-1'  id="img" alt= "" src="/logo_watcher.jpg"></img>
            </div>
            <div className='col-2'>
                <div  className="login-container">
                    <label htmlFor="inputText">Enter Email:</label>
                    <input
                        type="text"
                        id="inputText"
                        value={inputText}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                    />
                    <button onClick={handleSaveToFile}>Save Email</button> 
                </div>
            </div>
      
        </div>
             
           
         
        </>
      )}
    </div>
  );
};

export default Login;
