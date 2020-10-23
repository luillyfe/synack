import React from 'react';
import './App.css';
import {Search} from "./components/Search";
import Results from "./containers/Results";
import {requestResults} from "./containers/Results/actions";
import {connect} from "react-redux";

/**
 * TODO: include .env file
 * */
function App({requestResults}) {
    const handleSearch = (query, engine) => {
            requestResults(query, engine)
    }

    return (
        <div className="App">
            <Search submitQuery={handleSearch}/>
            <Results/>
        </div>
    );
}

const mapStateToProps = () => ({})
const mapDispatchToProps = {requestResults}
export default connect(mapStateToProps, mapDispatchToProps)(App);
