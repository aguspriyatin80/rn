import Axios from 'axios'
import React,{useState} from 'react'
import { View, Text,Picker ,Image} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZW50b3JAZ21haWwuY29tIn0.QQ7dWCqm2T2XhMXz4734GSjS3kMlnwpxVoadCqKP28A'


const GroupScreen = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [namaGrup, setNamaGrup] = useState('');
    
    const [uri, setUri] = useState('')
    const [type, setType] = useState('')
    const [fileName, setFileName] = useState('')
    
    const handleUploadImage = () => {
      let options = {
          title: 'Select Avatar',
          cameraType: 'front',
          mediaType: 'photo',
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
          }
          setUri(response.uri)
          setFileName(response.fileName)
          setType(response.type)
            console.log('URI :', uri + ' FILE_NAME : '
                + fileName + '  TYPE : ' + type)
          return response
      })


  };
  const handleBuatGrup = async () => {
    
    try {

        const form = new FormData()
        console.log('type Image : ', type)
        console.log('uri image : ', uri)
        console.log('FileName Image : ', uri)

        form.append('kelas_id', selectedValue)
        form.append('nama', namaGrup)
        
        form.append("product_image", {
            name: fileName, type: type, uri: uri
        })

        console.log('data form : ', form)
        console.log('token user id : ', token)
        const r = await Axios.post
            ('http://bta70.omindtech.id/api/grup',
                form,
                {
                    headers: {
                        Authorization: token,
                        "Content-Type": "multipart/form-data"
                    },

                })
            .then(r => { return console.log('response : ', r) })
            .catch(e => { return console.log('catch axios :', e) })

    } catch (error) {
        console.log('hasil : ', r)
        console.log('catch final : ', error)
    }


}
    
    return (
        <View>
            
            <View style={{alignItems :'center'}}>
                
    
                
                <TouchableOpacity onPress = {handleUploadImage}>
                              
                  <Image 
                      style={{height: 150, width:150,marginTop:30}}
                      source={ 
                        uri !== ''  ? { uri: uri } : require('../Sample/img/camera.png')}
                         />
                </TouchableOpacity>
                
                <Text>Tambahkan Foto Grup</Text>
                <TextInput 
                     onChangeText={namaGrup => setNamaGrup(namaGrup)}                
                    style={{width:300,backgroundColor:'grey',marginTop:20,marginBottom:30}} placeholder ='Nama Grup'  />
                                
                            <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedValue(itemValue)
                                
                            }}
                    >
                        <Picker.Item label="kelas 1" value="1" />
                        <Picker.Item label="kelas 2" value="2" />
                        <Picker.Item label="kelas 3" value="3" />
                                    
                    </Picker>
                        <TouchableOpacity 
                                onPress={handleBuatGrup}
                                style={{alignItems:'center',backgroundColor:'#3498db',width:150,height:32,marginTop:30}}>
                                    <Text style={{color:'white',fontSize: 20}}>Buat Grup</Text>
                        </TouchableOpacity>
                            
            
            </View>
           
        
        </View>
    )
}

export default GroupScreen


