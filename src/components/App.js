import React from 'react';// 3rd party packages should be placed before importing files which were created => it's a convention
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    // 'term' comes from SearchBar.js => value of the input was transffered via 'props'
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={ { marginTop: '10px' } }>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                <ImageList images={ this.state.images } />
            </div>
        );
    }
}

export default App;

// 1. Component renders itself one time with no list of images
// 2. onSearchSubmit method called
// 3. Request made to unsplash
// 4. ...wait...
// 5. Request complete
// 6. Set image data on state of App component
// 7. App component rerenders and shows images

// 1st Approach of writing API call => 'then'
// onSearchSubmit(term) {
//     axios.get('https://api.unsplash.com/search/photos', {
//         params: { query: term },
//         headers: {
//             Authorization: 'Client-ID 10daf940064d7e9f664f17b6196260e11730d3bce5d2279c5d0e53fd2ee6788d'
//         }
//     })
//     .then(response => {
//         console.log(response.data.results);
//     })
// }