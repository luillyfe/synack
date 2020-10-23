export const requestResults = (query, engine) => dispatch => {
    if (engine === 'Both') {
        return Promise.all([
            fetch(`${process.env.REACT_APP_GOOGLE_API_URL}&q=${query}`),
            fetch(`${process.env.REACT_APP_BING_API_URL}&q=${query}`, {
                method: 'GET',
                headers: {'Ocp-Apim-Subscription-Key': process.env.REACT_APP_BING_API_KEY}
            })
        ])
            .then(([google, bing]) => Promise.all([google.json(), bing.json()]))
            .then(([google, bing]) => {
                dispatch({
                    type: 'REQUEST_RESULTS_SUCCESS',
                    payload: {
                        google: google.items, bing: bing.webPages.value,
                    }
                })
            })
            .catch(console.error)
    } else if (engine === 'Google') {
        return fetch(`${process.env.REACT_APP_GOOGLE_API_URL}&q=${query}`)
            .then(res => res.json())
            .then(google => {
                dispatch({
                    type: 'REQUEST_RESULTS_SUCCESS',
                    payload: {
                        google: google.items, bing: [],
                    }
                })
            })
    } else if (engine === 'Bing') {
        return fetch(`${process.env.REACT_APP_BING_API_URL}&q=${query}`, {
            method: 'GET',
            headers: {'Ocp-Apim-Subscription-Key': process.env.REACT_APP_BING_API_KEY}
        })
            .then(res => res.json())
            .then(bing => {
                dispatch({
                    type: 'REQUEST_RESULTS_SUCCESS',
                    payload: {
                        google: [], bing: bing.webPages.value,
                    }
                })
            })
    }
}
