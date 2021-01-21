import React, { useEffect, useState }  from 'react'
import { Text,View,StyleSheet,TouchableOpacity, FlatList} from 'react-native'
import ListDetailsMovieComponent from '../components/ListDetailsMovieComponent'
import TextInputComponent from '../components/TextInputComponent'
import TouchableOpacityComponent from '../components/TouchableOpacityComponent'

// saya coba ssh
const DetailsScreen = (props) => {
    // console.log(props) 
    return (
        
        <View style ={styles.container}>
            <View>
                 
                 <TextInputComponent 
                    borderRadius = {true}
                    borderBottomWidth = {false}
                    width={true}
                    ph='judul film'
                    //input ={value}
                    handleOnChangeText = { (input) => setText(input)  }
                />
            </View>
            <View>
                <ListDetailsMovieComponent movie={props.route.params.movie}/>
            </View>
                         
        </View>
        
    ) 
    }

const styles = StyleSheet.create (
    {
        container : {
            flex :1,
            backgroundColor :'#DDDDDD'
            
            
        } 
    }
)
export default DetailsScreen
