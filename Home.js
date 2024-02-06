import React, { useState } from 'react';
import './App.css';

const Home = () => {
  // State to store the entered data
  const [enteredData, setEnteredData] = useState('');

  // Function to handle textarea changes
  const handleTextareaChange = (e) => {
    setEnteredData(e.target.value);
  };

  // Function to handle the "Send" button click
  const handleSendClick = () => {
    // Log the entered data
    console.log('Entered data:', enteredData);

    // Clear the textarea after processing
    setEnteredData('');
  };

  return (
    <div className="home">
      <h2 className="title">Welcome to Watcher</h2>
      <div className="create">
        <form>
          <label className="label">How are you?</label>
          <br />
          <textarea className="data" id="data" type="text" placeholder="Enter message" required
            value={enteredData}
            onChange={handleTextareaChange}
          ></textarea>
          <br />
          <button className="btn" onClick={handleSendClick}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};



export default Home;
