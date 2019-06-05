import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    // 'this' is undefined
    // onFormSubmit(event) {
    //   event.preventDefault();

    //   console.log(this.state.term);
    // }

    // 1st method of correcting 'this' => transform to arrow function
    onFormSubmit = (event) => {
      event.preventDefault(); // prevent page from refreshing after enter is clicked

      // When we are in class based components we refrence 'props' object with 'this'
      this.props.onSubmit(this.state.term);
      // With this approach we transfer value of the input to APP Component
    }

    render() {
        return (
          <div className="ui segment">
            {/* 2nd method of correcting 'this' => arrow function on onSubmit */}
            {/* <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> */}
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Image Search</label>
                <input
                  type="text"
                  value={ this.state.term }
                  onChange={ e => this.setState({ term: e.target.value }) }
                />
              </div>
            </form>
          </div>
        );
    }
};

export default SearchBar;

// Controlled elements
// 1. User types in input
// 2. Callback is invoked => onChange
// 3. We call setState with the new value => term will contain whatever the user has input
// 4. Component rerendered
// 5. Input is told what its value is (coming from state)