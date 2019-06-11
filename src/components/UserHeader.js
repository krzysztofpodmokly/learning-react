import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        // Outsourcing finding a proper user to mapStateToProps
        // const user = this.props.users.find(user => user.data.id === this.props.userId);
        // console.log(this.props.user);

        const { user } = this.props
        
        if (!user) {
            return null;
        }

        return <div className="header">{ user.data.name }</div>
    }
}

// ownProps is a reference to props in a component
// it is meant to outsource some logic in order to relieve the component itself
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.data.id === ownProps.userId) }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);