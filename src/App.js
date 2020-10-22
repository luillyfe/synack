import React, {useEffect, useState} from 'react';
import './App.css';
import {Search} from "./components/Search";
import {Results} from "./components/Results";

/**
 * TODO: include .env file
 * */
function App() {
    const query = "Lectures"
    const [google, setGoogleData] = useState([])
    const [bing] = useState([])

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}&q=${query}`
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res.items);
                setGoogleData(res.items)
            })
            .catch(console.error)
    }, [query, setGoogleData])

  return (
    <div className="App">
        <Search query={query} />
        <Results data={{ google, bing }} />
    </div>
  );
}

export default App;
