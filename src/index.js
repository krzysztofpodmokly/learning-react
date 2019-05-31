import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        // This is the only time we do direct assignment to THIS.STATE
        this.state = { lat: null };

        // Connecting to Geolocation API
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // console.log(position);
                this.setState( { lat: position.coords.latitude } )
            },
            (err) => console.log(err)
        );
    }

    render() {
        return <div>Latitude: { this.state.lat }</div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API