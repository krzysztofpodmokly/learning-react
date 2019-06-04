import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        // This is the only time we do direct assignment to THIS.STATE
        this.state = { lat: null, errorMessage: '' };

        // Connecting to Geolocation API
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // console.log(position);
                this.setState( { lat: position.coords.latitude } )
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    componentDidMount() {
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: { this.state.lat }</div>
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API