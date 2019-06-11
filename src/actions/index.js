import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creator
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
    // Bad Approach!!!
    // With this approach we are receiving either API response or an object
    // const response = await jsonPlaceholder.get('/posts');

    // Redux-Thunk allows for returning either action object or function
    // and if function is returned Thunk invokes this function automatically with 
    // dispatch & getState as arguments
    
};

// Lodash library is used here to prevent from sending multiple requests
// with _.memoize function is save in memory once it was invoked for the first time
export const fetchUser = (id) => dispatch => _fetchuser(id, dispatch);

const _fetchuser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response });
});

// export const fetchUser = function(id) { 
//     return async function(dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type: 'FETCH_USER', payload: response });
//     };
// };