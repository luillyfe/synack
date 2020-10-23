import React, {useEffect, useState} from 'react';
import './App.css';
import {Search} from "./components/Search";
import {Results} from "./components/Results";

/**
 * TODO: include .env file
 * */
function App() {
    const [state, setState] = useState({
        query: "",
        google: [],
        bing: []})

    const {query, google, bing} = state;

    const setQuery = q => {
        setState({...state, query: q})
    }

    useEffect(() => {
        // TODO: Handle when engines return irregular numbers of results
        Promise.all([
            fetch(`${process.env.REACT_APP_GOOGLE_API_URL}&q=${query}`),
            fetch(`${process.env.REACT_APP_BING_API_URL}&q=${query}`, {
                method: 'GET',
                headers: {'Ocp-Apim-Subscription-Key': process.env.REACT_APP_BING_API_KEY}
            })
        ])
            .then(([google, bing]) => Promise.all([google.json(), bing.json()]))
            .then(([google, bing]) => {
                setState({
                    ...state,
                    google: google.items,
                    bing: bing.webPages.value,
                })
            })
            .catch(console.error)
    }, [query, setState])

  return (
    <div className="App">
        <Search query={query} submitQuery={setQuery} />
        <Results data={{ google, bing }} />
    </div>
  );
}

export default App;
