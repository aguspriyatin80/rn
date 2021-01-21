import Axios from 'axios'
import React,{ useEffect,useState } from 'react'
import { View, Text, ImageBackground, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useSelector,useDispatch} from 'react-redux'
import { getUserId } from '../Redux/actions/UserIdActions'
import {GET_USER_URL} from '../Redux/constants/general'
import ImagePicker from 'react-native-image-picker'

export default function EditProfileScreen(props) {
  const [data,setData]  = useState([])
  const [avatar,setAvatar] = useState(null)  
  
  
  const dispatch = useDispatch()
  const token = useSelector((state)=>state.UserAuthReducers.token) 
  console.log('token :',token)
  useEffect( ()=> { 
     getDataUser(token,GET_USER_URL)
        
  }, [])
  
  const getDataUser = (key,url) =>{
            Axios.get(url,{
              headers : { token : key}
            })
          .then(r=> setData(r.data) )
  }
  
  const handleUploadImage = () =>{
    let options = {
        title: 'Select Avatar', 
        cameraType: 'front',
        mediaType: 'photo' ,
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
          alert(response.customButton);
        } else {
          setAvatar(response.uri) }
        })
        console.log(avatar)
      };
  console.log('data :' ,data)
  
  
  
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "android" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
        <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: '#F7F6ED' }}>
          <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: '6%' }}>
            <Image source={require('../Sample/img/Vector.png')} style={{ marginLeft: 5, height: 27, width: 30, marginTop: '1%' }} />
            
            <Text style={{ marginLeft: 110, fontSize: 18, marginTop: '2%' }}>Edit Profile</Text>
           
            <TouchableOpacity>
                <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: '55%', height: 20, width: 20, marginTop: '3.5%' }} />
            </TouchableOpacity>
          </View>

          <View style={{height: '2%'}}>
            <Text></Text>
          </View>
          
          <View style={{ backgroundColor: '#FFFFFF', padding: 20, height: '92%' }}>
            <View style={{ alignItems: 'center' }}>
                <Image source= {  
                     (data.length!==0 && avatar === null) ? 
                     {uri:data.data.profile_image} :
                     {uri:avatar } }  
                     style={styles.userImage}  />  
                           
              <TouchableOpacity>
                <Text 
                      onPress ={handleUploadImage}
                      style={styles.toProfile}>UPLOAD IMAGE</Text>
              </TouchableOpacity>
            </View>

            <View >
              <Text>Full Name</Text>
              <TextInput 
                   value={data.length!==0 && data.data.full_name}
                  style={styles.txtInput} />
              <Text>Email</Text>
              <TextInput 
                  value ={ data.length!==0 && data.data.email }
                style={styles.txtInput} />
              <Text>Description</Text>
              <TextInput 
              multiline={true}
              style={styles.txtInput2} />
            </View>

            <View style={{ marginTop: '20%', padding: 10 }}>
              <TouchableOpacity
                style={styles.buttonSave}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  toProfile: {
    alignSelf: 'center',
    padding: 10,
    height: 40,
    width: 150,
    borderRadius: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#367874',
    color: '#367874'
  },

  userImage: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginBottom: 20
  },

  txtInput: {
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 5,
    color: 'black',
    borderColor: 'black',
    width: '98%',
    alignSelf: 'center',
    height: 40,
    backgroundColor: '#FCFCFC'
  },

  txtInput2: {
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 5,
    color: 'black',
    borderColor: 'black',
    width: '98%',
    alignSelf: 'center',
    height: 100,
    backgroundColor: '#FCFCFC'
  },

  buttonSave: {
    alignSelf: 'center',
    backgroundColor: '#367874',
    padding: 10,
    marginTop: '20%',
    height: 40,
    width: '100%',
    borderRadius: 5,
    textAlign: 'center'
  }
})