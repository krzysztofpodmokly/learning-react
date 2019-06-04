import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

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
=======
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45PM"
            avatar={faker.image.avatar()}
            content="Nice blog Post!"
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
            author="Alex"
            timeAgo="Today at 12:00PM"
            avatar={faker.image.avatar()}
            content="Huh, nice one!"
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
            author="Jane"
            timeAgo="Yesterday at 5:00PM"
            avatar={faker.image.avatar()}
            content="That was awesome!"
            />
        </ApprovalCard>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// semantic-ui.com
// semantic ui cdn
>>>>>>> 078f858e3bcd7807facf30666268eb2bfb185a1f
