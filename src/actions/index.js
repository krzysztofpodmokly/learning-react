import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // console.log('About to fetch posts')
    await dispatch(fetchPosts());

    // METHOD 1
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    // METHOD 2
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value(); // execute

    // await Promise.all(userIds.map(id => dispatch(fetchUser(id))));
    // console.log(userIds)
    // console.log('getState() => ', getState().posts);
    // console.log('Fetched posts')
};

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
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response });
};


// export const fetchUser = function(id) { 
//     return async function(dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type: 'FETCH_USER', payload: response });
//     };
// };