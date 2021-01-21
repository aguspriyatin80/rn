import React,{useState} from 'react'
import { Text,Image,View, TextInput ,StyleSheet} from 'react-native'
import TextInputComponent from '../components/TextInputComponent';
import TouchableOpacityComponent from '../components/TouchableOpacityComponent';
import userImage from './../sample/images/userImage.png'
import editImage from './../sample/images/editImage.png'


const EditProfileScreen = (props) => {
   
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    return (
        <View style={styles.container}>
           <View style= {styles.containerGambar}>
                <Image source={userImage} style={styles.userImage}  />  
                <Image source={editImage} style={styles.editImage } />
            </View>
            <View style={styles.containerText}>
                <TextInputComponent
                        ph='Name'
                        input = {name}
                        handleOnChangeText = {name=>setName(name)}
                />
                <TextInputComponent
                        ph='Username'
                        input = {username}
                        handleOnChangeText = {username=>setName(username)}
                />    
                <TextInputComponent
                        ph='Email'
                        input = {email}
                        handleOnChangeText = {email=>setName(email)}
                />
                <TextInputComponent
                        ph='Password'
                        input = {password}
                        handleOnChangeText = {password=>setName(password)}
                />
            </View>
            <View>
                <TouchableOpacityComponent 
                    caption = {'LOG OUT'} 
                    handleOnPress = {()=> props.navigation.navigate('Testing')}
                />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create ( 
    {
        userImage : {
            position :'relative',
            height:200,
            width:200,     
        },
        
        editImage : {
            position: 'absolute',
            top:150,
            left:120,
            height:50,
            width:50,     
        },
        
        container : {
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center',
        },
        containerText : {
            marginBottom : 20,
        },
        containerGambar : {
            marginBottom : 30 ,
        },
    }
)

export default EditProfileScreen
