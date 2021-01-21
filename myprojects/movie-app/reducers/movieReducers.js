import * as types from '../constants/actionTypes'

const initialState ={
    loading : false,
    nowPlaying : [],
    error : null
}

function movieReducers (state=initialState,action) {
    switch (action.type) {
        case types.GET_NOW_PLAYING_REQUEST :  
            
            return Object.assign({}, state, {
                  loading: true,

            });
            break;

        case types.GET_NOW_PLAYING_SUCCESS :  
            //console.log(action.nowPlayingMovies)
            return Object.assign({}, state, {
                loading: false,
                nowPlaying : action.nowPlayingMovies
            });
            break;
        case types.GET_NOW_PLAYING_FAILURE :  
            return Object.assign({}, state, {
                    loading : false,
                    error : action.error

            });
            break;
            default : return state

        } 
    }

    export default movieReducers





