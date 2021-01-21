import React, {useState, useEffect} from 'react'
import { FlatList, View, Text, Dimensions } from 'react-native'
import Axios from 'axios';
import Penerima from '../components/Penerima';
// import ListItemComponent from './ListItemComponent';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const numColumns = 2;
// const WIDTH = Dimensions.get('window').width;

const Home = () => {
    const [data, setData] = useState([]);
    // const [filteredData, setFilteredData] = useState(data["data"]);
  
    // const getCartData = () => {
    //     Axios.get('https://quiet-lowlands-79961.herokuapp.com/penerima')
    // .then(r => setData(r.data))            
    // .then(console.log(data));
    // }
    useEffect(() => {
        getCartData();    
    }, [])
    const getCartData = async () => {
        let r = await Axios.get('https://quiet-lowlands-79961.herokuapp.com/penerima');
        setData(r.data.data);
        console.log("ini data", data);
    }

    // const formatData = (filteredData, numColumns) => {
    //   const totalRows = Math.floor(filteredData.length / numColumns);
    //   let totalLastRow = filteredData.length - (totalRows * numColumns);
    //   while(totalLastRow !== 0 && totalLastRow !== numColumns) {
    //     filteredData.push({id: 'id', empty: true});
    //     totalLastRow++;
    //   }
    //   return data;
    // }  

    // const handleOnChangeText= (s) => {
    //   if(s == ''){
    //       setFilteredData(data);
    //   }else{
    //       const filtered = data.filter( penerima => penerima.nama.toLowerCase().includes(s.toLowerCase()));
    //       setFilteredData(filtered);
    //   }
    // }
      const renderItem = ({ item }) => (
        <Penerima penerima={item} />
      )
      // const renderItem = ({item}) => {
      //   if(item.empty) {
      //     return <View style={[styles.itemStyle, styles.itemInvisible]}>
      //       </View>
      //   }
      //   return <View style={[styles.itemStyle]}>
      //   <Penerima item={item}/>
      //   </View>
      // }
    
      return (
        <View>
          {/* <FlatList
                numColumns={numColumns}
                keyExtractor={ key => key.id }
                data={formatData(filteredProducts, numColumns)}
                renderItem={ ({item}) => {
                  if(item.empty) {
                    return <View style={[styles.itemStyle, styles.itemInvisible]}>
                      </View>
                  }
                  return <View style={[styles.itemStyle]}>
                  <ListItemComponent onPressBeli={handleOnPressBeli} item={item}/>
                  </View>
                }
                  
              }
        /> */}
          <FlatList
            
            keyExtractor={item => item._id}
            data={data}
            renderItem={renderItem}
            
          />

        </View>
        
      );

}

export default Home
