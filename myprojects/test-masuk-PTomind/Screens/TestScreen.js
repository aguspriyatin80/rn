import React,{useState} from 'react'
import { View, Text,Picker } from 'react-native'

const TestScreen = () => {
    const [selectedValue, setSelectedValue] = useState('jenjang');
    return (
        <View>
            
            <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
        
        </View>
    )
}

export default TestScreen