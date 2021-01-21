import React,{useState} from 'react'
import { Text,Image,View, TextInput ,StyleSheet,TouchableOpacity} from 'react-native'
import TextInputComponent from '../components/TextInputComponent';
import TouchableOpacityComponent from '../components/TouchableOpacityComponent';
import ImagePicker from 'react-native-image-picker';
import userImage from './../sample/images/userImage.png'
import editImage from './../sample/images/editImage.png'


const RegisterScreen = (props) => {
   
    const [name, setName] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)
    const [image, setImage] = useState(null)
     


    return (
        <View >
           <View style= {styles.containerGambar}>
                  <View>
                     <Image source={userImage} style={styles.userImage}  />  
                  </View>
                  
                  <View>
                  <TouchableOpacity  onPress={()=>{ 
                      const options = {
                        title: 'Select Avatar',
                        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
                        storageOptions: {
                          skipBackup: true,
                          path: 'images',
                        },
                      };
                      ImagePicker.showImagePicker(options, (response) => {
                        console.log('Response = ', response);
                                
                                    if (response.didCancel) {
                                    console.log('User cancelled image picker');
                
                                } else if (response.error) {
                                    console.log('ImagePicker Error: ', response.error);
                                    } else if (response.customButton) {
                                    console.log('User tapped custom button: ', response.customButton);
                                    } else {
                                    const source = { uri: response.uri };
                            setImage(source)

                        }
                      })
                     }}
                     >
                        <Image source={editImage} style={styles.editImage}/>
                     {/* <Text>klik sini</Text> */}
                </TouchableOpacity>
                { image!==null && <Image source={image} style={{width:100 ,height:100}} /> }
                </View>
            </View>
           
            <View style = {styles.container}>
                <View style={styles.containerText}>
                    <TextInputComponent
                            ph='Name'
                            input = {name}
                            handleOnChangeText = {input=>setName(input)}
                    />
                    <TextInputComponent
                            ph='Username'
                            input = {username}
                            handleOnChangeText = {input=>setName(input)}
                    />    
                    <TextInputComponent
                            ph='Email'
                            input = {email}
                            handleOnChangeText = {input=>setName(input)}
                    />
                    <TextInputComponent
                            ph='Password'
                            input = {password}
                            handleOnChangeText = {input=>setName(input)}
                    />
                </View>
                <View>
                    <TouchableOpacityComponent 
                        caption = {'SIGN UP'} 
                        handleOnPress = {()=> props.navigation.navigate('Testing')}
                    />
                </View>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text >Already have an account  </Text>
                        <Text 
                            style={{color:'blue',marginLeft:3}} onPress={()=> props.navigation.navigate('Login')}>  
                            Sign In
                        </Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create ( 
    {
        userImage : {
            top:45,
            left :100,
            alignItems:'center',
            height:200,
            width:200,     
        },
        
        editImage : {
            left:220,
            height:50,
            width:50,     
        },
        
        container : {
            //flex : 1,
            justifyContent : 'center',
            alignItems : 'center',
        },
        containerText : {
            marginBottom : 20,
        },
        containerGambar : {
            //flexDirection : 'row',
            //justifyContent:'flex-start',
            //alignItems:'center',
            marginBottom : 20 ,
        },
    }
)

export default RegisterScreen
