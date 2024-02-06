async function fetchData() {
    const url = 'https://neutrinoapi-bad-word-filter.p.rapidapi.com/bad-word-filter';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '8dc9c1d272msh91e6ef9d5046f47p195507jsn7bc0ee65d8f6',
            'X-RapidAPI-Host': 'neutrinoapi-bad-word-filter.p.rapidapi.com'
        },
        body: new URLSearchParams({
            content: 'This text does not actually contain any bad words fuck!',
            'censor-character': '*'
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const jsonObject = JSON.parse(result);

        const isBadValue = jsonObject['is-bad'];

        console.log(isBadValue);
    } catch (error) {
        console.error(error);
    }
}

// Now you can call fetchData() to execute the asynchronous operation
fetchData();