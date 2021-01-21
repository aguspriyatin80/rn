import { View, Picker, StyleSheet } from "react-native";
const linkGenresMovie = 'https://api.themoviedb.org/3/genre/movie/list?api_key=da06bc5bd57ed7dfd2653656d7890fbc&language=en-US'
import Axios from 'axios'
import React, { useEffect, useState ,Component}  from 'react'


const App = () => {
  
        
  const [genresMovie,setGenresMovie] = useState([]) 
    
  const [selectedValue, setSelectedValue] = useState("java");
  
  const getGenresMovie  =  (url) => {
    Axios.get(url)
    .then(r=> setGenresMovie(r.data.genres))
 } 
  
 
 useEffect(() => {
    getGenresMovie(linkGenresMovie)
   
 },[])

 //alert(genresMovie.length)   
  
  
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
       
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default App;



// import React,{useState} from 'react'
// import { Image,View, Text, TextInput, StyleSheet, Button,TouchableOpacity } from 'react-native';
// import {useSelector} from 'react-redux'

// export default function TestComponents() {
//        const [text,setText]= useState(null) 
//        //const record4 = useSelector((state)  =>state.movieReducers.nowPlaying[3])  
//        //const depan = useSelector((state) =>state.testReducer.firstName)
//        //const test = useSelector((state) =>state)
//        //alert(test)     

            
//          // console.log(depan + ' '+belakang )
//             let value = text
//             return (
//                 <View>
//                     <TextInput
//                         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//                         onChangeText={text => setText(text)}
                        
//                     />
                    
//                     <TouchableOpacity>
//                         <Text onPress ={ () => {
//                                // alert(text)
//                         }
                            
//                         }
//                         style={{marginTop:20,backgroundColor:'yellow'}}>
//                             Tekan untuk isi Text</Text>
//                     </TouchableOpacity>
                    
//                 </View>
//             )
//         }





//  import React, { useEffect, useState ,Component}  from 'react'
//  import { View, Text, Image } from 'react-native'
//  import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
//  import starfilledIMage from './../sample/images/starfilledImage.png'
//  import staremptyImage from './../sample/images/staremptyImage.png'
// import { TouchableOpacity } from 'react-native-gesture-handler';
 
// export default function TestComponents() {
//   const [rating,setRating] =useState(null)

//   return(
//     <View style={{flexDirection:'row'}}>
//           {[...Array(5)].map((star,i)=> {
//                 return(
//                   <TouchableOpacity onPress={ () => {
//                     setRating(i+1)
//                   }} >
//                     <Image  style={{width:50,height:50}} 
//                     source={ i+1 <= rating ? starfilledIMage : staremptyImage}
//                   />
//                    </TouchableOpacity>

//                  )      
             
//               }
            
//             ) 
//           }
     
//     </View>
//     )
 
//  }

//0
// import React, { useState } from 'react'
// import { View, Text,Image,TouchableOpacity } from 'react-native'
// import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'
// import starfilledImage from './../sample/images/starfilledImage.png'
// import staremptyImage from './../sample/images/staremptyImage.png'

// const TestComponents = () => {
//     const [image1,setImage1] = useState(staremptyImage)
//     const [image2,setImage2] = useState(staremptyImage)
//     const [image3,setImage3] = useState(staremptyImage)
    
//     return (
//             <View style={{flexDirection:'row'}}>
//                 <Text
//                      style={{fontSize:70,top:20,left:10} }
//                         onPress = {  () => {
//                         if ( image1 == starfilledImage ) 
//                         { setImage1(staremptyImage) 
//                         } else  { setImage1(starfilledImage) }
//                         }} >
//                    <Image style={{width:50,height:50}} source={image1} />
//                 </Text>
//                 <Text
//                      style={{fontSize:70,top:20,left:10}}
//                         onPress = {  () => {
//                          if ( image2 == starfilledImage ) 
//                         {   setImage1(staremptyImage)
//                             setImage2(staremptyImage) 
//                         } else  {  setImage1(starfilledImage)
//                                    setImage2(starfilledImage) }
//                         }} >
//                    <Image style={{width:50,height:50}} source={image2} /> 
//                 </Text>
//                 <Text
//                      style={{fontSize:70,top:20,left:10}}
//                         onPress = {  () => {
//                         if ( image2 == starfilledImage ) 
//                         {   setImage1(staremptyImage)
//                             setImage2(staremptyImage) 
//                             setImage3(staremptyImage) 
//                         } else  {  setImage1(starfilledImage)
//                                    setImage2(starfilledImage) 
//                                   setImage3(starfilledImage)  
//                         } } } >  
//                    <Image style={{width:50,height:50}} source={image3} /> 
//                 </Text>           
//             </View>
                
//    )
// }
  
// export default TestComponents