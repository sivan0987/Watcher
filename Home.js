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
    if(enteredData.length > 0){
        fetchData(enteredData)
            .then(isBadValue => {
                console.log(isBadValue);
                // Handle isBadValue here
                if (isBadValue) {
                    // Show popup or perform other actions
                    console.log('Bad words detected!');
                    setPopData('Bad words detected!')
                } else {
                    // Show popup or perform other actions
                    console.log('Text is clean');
                    setPopData('Text is clean')
                }
            })
            .catch(error => {
                console.error(error);
                // Handle error
            });
    }
    // Clear the textarea after processing
    setEnteredData('');
    setPopData('');
};


  async function fetchData(enteredData) {
    const url = 'https://neutrinoapi-bad-word-filter.p.rapidapi.com/bad-word-filter';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '8dc9c1d272msh91e6ef9d5046f47p195507jsn7bc0ee65d8f6',
            'X-RapidAPI-Host': 'neutrinoapi-bad-word-filter.p.rapidapi.com'
        },
        body: new URLSearchParams({
            content: enteredData
        })
    };

    try {
        const response = await fetch(url, options);
        if( response.status!==200){
            console.log("Error");
        }
        else{
            const result = await response.text();
            const jsonObject = JSON.parse(result);
            const isBadValue = jsonObject['is-bad'];
            
            return isBadValue;
            
            // alert(isBadValue);
           
        }
      
    } catch (error) {
        console.error(error);
    }
}



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
          <button id="send" className="btn" onClick={handleSendClick}>
            Send
          </button>
        </form>

      </div>
      {/* <div className="popup" onClick={myFunction}>
        <span className="popuptext" id="myPopup">hi u...</span>
     </div> */}
     <p> {pop}</p>

    </div>
  );
};

export default Home;