import Axios from 'axios'
import React, { useEffect, useState ,Component}  from 'react'
import { View, Text } from 'react-native'
import YouTube from 'react-native-youtube'
// playing video https://api.themoviedb.org/3/movie/297762/videos?api_key=###

const YTubeApi = 'AIzaSyB5UIIJmtNR8xJ2qrpn6dHzBlLH3c-tyiw'


const PlayYouTubeComponent = () => {
       
    
    return (
        <View>
            <YouTube
                apiKey={YTubeApi}
                videoId='pAYEQP8gx3w' // The YouTube video ID
                play={true}  // control playback of video with true/false
            
                fullscreen // control whether the video should play in fullscreen or inline
                loop // control whether the video should loop when ended
                // onReady={e => this.setState({ isReady: true })}
                // onChangeState={e => this.setState({ status: e.state })}
                // onChangeQuality={e => this.setState({ quality: e.quality })}
                // onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
        </View>
    )
}

export default PlayYouTubeComponent
