import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { TweetProvider } from './context/TweetContext';


ReactDOM.render(
    <React.StrictMode>
        <TweetProvider>
            <Router>
                <App />
            </Router>
        </TweetProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

