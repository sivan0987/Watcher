import React, { useState } from 'react';
import './App.css';

const Home = () => {
  // State to store the entered data
  const [enteredData, setEnteredData] = useState('');
  const [pop, setPopData] = useState('');

  // Function to handle textarea changes
  const handleTextareaChange = (e) => {
    setEnteredData(e.target.value);
  };

  const handleSendClick = () => {
    // Log the entered data
    console.log('Entered data:', enteredData);
    if (enteredData.length > 0) {
      fetchData(enteredData)
        .then(isBadValue => {
          console.log(isBadValue);
          // Handle isBadValue here
          if (isBadValue) {
            // Show popup or perform other actions
            console.log('Bad words detected!');
            setPopData('Bad words detected!');
            // setEmail(''); // Reset email field when bad words detected
          } else {
            // Show popup or perform other actions
            console.log('Text is clean');
            setPopData('Text is clean');
          }
        })
        .catch(error => {
          console.error(error);
          // Handle error
        });
    }
    // Clear the textarea after processing
    setEnteredData('');
  };

 
  async function fetchData(enteredData) {
    const url = 'https://neutrinoapi-bad-word-filter.p.rapidapi.com/bad-word-filter';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'a6e209929dmsh6507b7357477ed5p17ab47jsn8b50fd95de52',
        'X-RapidAPI-Host': 'neutrinoapi-bad-word-filter.p.rapidapi.com'
      },
      body: new URLSearchParams({
        content: enteredData
      })
    };

    try {
      const response = await fetch(url, options);
      if (response.status !== 200) {
        console.log("Error");
      } else {
        const result = await response.text();
        const jsonObject = JSON.parse(result);
        const isBadValue = jsonObject['is-bad'];

        return isBadValue;
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="home">
      {/* <h2 className="title">Welcome to Watcher</h2> */}
      <div className="create">
      <div>
      <img className='col-1'  id="img" alt= "" src="/logo_watcher.jpg"></img>
      </div>
      

      <div className='col-2'>
        <h1 className="title">Determind the text type</h1>
        <p className="pr">
            Hi, our site is designed to help identify bullying and prevent it!
            <br></br>
            Enter text in the box and it will detect if it's suspecious.
            </p>
            <form>
                <br />
                <textarea
                className="data"
                id="data"
                type="text"
                placeholder="Enter message"
                value={enteredData}
                required
                onChange={handleTextareaChange}
                ></textarea>
                <br />
                <button id="send" className="btn" onClick={handleSendClick}>
                Send
                </button>
                </form>
                      {/* Popup Window */}
                    {pop && (
                        <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={() => setPopData('')}>&times;</span>
                            <p className="txtPop">{pop}</p>
                        </div>
                        </div>
                    )}
      </div>    

      </div>
      <br></br>

    </div>
  );
};

export default Home;
