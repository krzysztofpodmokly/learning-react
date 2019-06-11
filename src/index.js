import React from 'react';
import ReactDOM from 'react-dom';
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

