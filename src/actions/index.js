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