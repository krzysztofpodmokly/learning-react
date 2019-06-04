import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    render() {
        return (
          <div className="ui segment">
            <form className="ui form">
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