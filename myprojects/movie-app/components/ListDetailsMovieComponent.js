import YouTube from 'react-native-youtube'
import React, { useEffect, useState ,Component}  from 'react'
import { View, Image, Text,TextInput, TouchableOpacity, StyleSheet,Dimensions,Modal} from "react-native";
import shareImage from './../sample/images/shareImage.png'
import commentImage from  './../sample/images/commentImage.png'
import starfilledIMage from './../sample/images/starfilledImage.png'
import staremptyImage from './../sample/images/staremptyImage.png'
import TouchableOpacityComponent from './../components/TouchableOpacityComponent'
import Share from "react-native-share"; 
import Axios from 'axios';

const YTubeApi = 'AIzaSyB5UIIJmtNR8xJ2qrpn6dHzBlLH3c-tyiw'
const link1VideoId ='https://api.themoviedb.org/3/movie/'
const link2VideoId = '/videos?api_key=a5560efa6ad4fd8537b91dcd4763ee78'
const linkPoster = 'https://image.tmdb.org/t/p/w500'

const ListDetailsMovieComponent = (props) => {
    const [modalVisbile,setModalVisible] = useState(false)
    const [videoId,setVideoId] = useState(null)
    
    let rating= 10
       
    const getVideoId  =  (url1,movieId,url2) => {
        Axios.get(url1+movieId+url2)
        .then(r=> setVideoId(r.data.results[0].key))
    }
    
                                                                                                                                                                                                                                        
     
    getVideoId(link1VideoId,props.movie.id,link2VideoId)
    //console.log(videoId)
    
    return (
        <View style={styles.card} >
                    { videoId && <YouTube 
                        apiKey={YTubeApi}
                        videoId={videoId} // The YouTube video ID
                        play={false} // control playback of video with true/false
                        //fullscreen 
                        loop // control whether the video should loop when ended
                        style={{  height: 300 }}
                    />  }
                    
       
                  
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.itemTitle}>{props.movie.title}</Text>
                        <Text style={styles.itemYear}>{props.movie.release_date.substr(0,4)}</Text>
                    </View>
                    
                    <View style= {styles.line1}/>
                    <View style={{flexDirection:'row'}} >
                        <View >
                            <Image
                                source={{ uri: linkPoster+props.movie.poster_path}}
                                style={styles.itemImage2}
                            />     
                        </View>
                        
                        <View style={{left:30}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-end',
                            marginBottom:10,marginTop:10}}>
                                <View style={{marginRight:30}}>
                                    <Image source={starfilledIMage} style={styles.starfilledImage} />
                                    <Text style={{height:24,fontWeight:'bold',fontSize:16,alignItems:'center'}}>
                                        9/10</Text>
                                </View>
                                <View style={{marginRight:20,alignItems:'center'}}>
                                    <View>
                                        <TouchableOpacity onPress={()=> setModalVisible(true)}>
                                            <Image source={staremptyImage} style={styles.staremptyImage}/>
                                        </TouchableOpacity>
                                        <Modal 
                                            transparent = {true}
                                            visible = {modalVisbile}
                                            animationType ='slide'
                                        >
                                            <View style = {styles.ViewScreen}>
                                                <View style ={styles.viewModal} >
                                                    <Text style={{fontSize:20,fontWeight:'bold',marginBottom:10}}>How do you think about this movie ? </Text>
                                                    <View style={{flexDirection:'row'}}>
                                                        <Image style={{height:35,width:35}} source={starfilledIMage} />
                                                        {[...Array(9)].map(
                                                         () =>  <Image style={{height:35,width:35}} source={staremptyImage} />
                                                         ) }  
                                                    </View>
                                                    <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}}>Your Rating : {rating}</Text>
                                    
                                                    <TextInput style={styles.headerCommentText} />
                                                    <TextInput style={styles.bodyCommentText} multiline ={true} />
                                                   <TouchableOpacityComponent
                                                            caption={'Submit'}
                                                            handleOnPress= {
                                                                () => setModalVisible(!modalVisbile)
                                                            }
                                                    >               
                                                    </TouchableOpacityComponent>
                                    
                                                </View>
                                            </View>
                                        </Modal> 
                                        
                                    </View>
                                    <Text style={{height:24,fontWeight:'bold',fontSize:16}}>Rate this</Text>
                                </View>
                            </View>   
                            <Text style={{width:250,height: 80,backgroundColor:'white'}}>
                            {props.movie.overview}</Text>       
                        </View>
                    </View>
                    <View style= {styles.line2}/>
                    <View style={styles.allignFooterImage}>
                        <TouchableOpacity>
                            <Image source={commentImage} style={styles.commentImage} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                             <Text style={styles.sumOfCommentsImage}>123</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = { () =>{
                                // Share.open(options)
                                // .then((res) => { console.log(res) })
                                // .catch((err) => { err && console.log(err); });
                                }}
                        >
                            <Image source={shareImage} style={styles.shareImage} />
                        </TouchableOpacity>
                       
                    </View>
    </View> 
    )
}


const styles = StyleSheet.create({
    allignFooterImage : {
        top:10,
        left:40,
        flexDirection :'row'
    },
    commentImage :{
        marginRight : 10,
        //top : 295,
        //left : 20,
        width:40,
        height : 40,
    },
    sumOfCommentsImage : {
        marginTop :5,
        marginRight : 200,
        height :40,
        fontSize : 20,
        fontWeight :'bold',
    },
    shareImage :{
        width:40,
        height : 40,
    },
    card : {
        backgroundColor:'white',
        height:560,
        width: 400,
        borderRadius : 15,
        marginBottom : 15,
    },
    itemImage1: {
        position :'absolute',
        top : 10,
        left :20,
        justifyContent :'center',
        height: 260,
        width: 360,
    },
    starfilledImage: {
        height: 35,
        width: 35,
    },
    staremptyImage: {
        height: 35,
        width: 35,
    },
      
    itemImage2: {
        left :20,
        justifyContent :'center',
        height: 160,
        width: 100,
    },
    itemTitle: {
        height : 24,
        fontWeight: 'bold',
        fontSize: 20,
    },
    itemYear: {
        height : 24,
        fontWeight: 'bold',
        fontSize: 20,
    },
    
    line1 : {
         top : 0,
         width:400,
         height:0 ,
         borderBottomWidth :1,
         marginTop:5,
         marginBottom:5,
    },
    line2 : {
         top : 7,
         width:400,
         height:0 ,
         borderBottomWidth :1,

    },
    ViewScreen :{
        alignItems :'center',
        //backgroundColor :'gray',
        justifyContent:'center',
        flex:1,
    },
    viewModal : {
        //flex :1,
        marginTop : 258,
        width :400,
        height :400,
        borderRadius :20,
        justifyContent:'center',
        alignItems:'center',
        //borderBottomWidth:2,
       // padding : 135,
        backgroundColor : '#CAD3C8'
    },
    headerCommentText : {
        backgroundColor:'white',
        color:'black',
        borderRadius : 10,
        marginTop :20,
        marginBottom:20,
        fontSize :20,
        height :40 ,
        width:320,
    },
    bodyCommentText : {
        backgroundColor:'white',
        color:'black',
        textAlignVertical :'top',
        borderRadius : 10,
        marginBottom :20,
        fontSize :14,
        height :100 ,
        width:320,
    },
})
export default ListDetailsMovieComponent
