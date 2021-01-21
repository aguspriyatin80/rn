import Axios from 'axios'
import * as types from './../constants/actionTypes'
//import {BASE_URL,API_KEY} from './../constants/general'

export const getNowPlayingRequest = () =>({
  type : types.GET_NOW_PLAYING_REQUEST   
})

export const getNowPlayingSuccess = (movies) =>({
    type : types.GET_NOW_PLAYING_SUCCESS,
    nowPlayingMovies : movies    
  })

export const getNowPlayingFailure = (error) =>({
    type : types.GET_NOW_PLAYING_FAILURE,
    error  

})

export const getNowPlayingAction = () =>{
    return async( dispatch ) => {
        
        try{
            dispatch( getNowPlayingRequest() )
            const response = await Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=da06bc5bd57ed7dfd2653656d7890fbc&language=en-US')    
            
            dispatch(getNowPlayingSuccess(response.data.genres))
            //console.log(response.data.results)            
        }

        catch (error) { dispatch (getNowPlayingFailure(error)) 

        }
    }


}

