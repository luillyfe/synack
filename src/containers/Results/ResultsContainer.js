import React from 'react';
import {Results} from "../../components/Results";

export function ResultsContainer ({ google, bing }) {
    return (
            <Results data={{ google, bing }} />
        );
    }
