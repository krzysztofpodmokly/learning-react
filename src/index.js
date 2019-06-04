import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    // 1 Method of defining state
    // constructor(props) {
    //     super(props);
    //     // This is the only time we do direct assignment to THIS.STATE
    //     this.state = { lat: null, errorMessage: '' };
    // }

    // 2 Method of defining state
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        // Connecting to Geolocation API
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState( { lat: position.coords.latitude } ),
            err =>  this.setState( { errorMessage: err.message } )
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat } />
        }

        return <Spinner message="Please accept location request" />;
    }

    render() {
        return (
            <div className="border red">
                { this.renderContent() }
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API