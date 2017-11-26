import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AwesomeComponent from './components/AwesomeComponent.jsx';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AwesomeComponent />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);