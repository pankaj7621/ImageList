import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {getImages} from '../services/getImageApi';

const window = Dimensions.get('window');
// console.log(window);

const Home = ({navigation}) => {
  const [images, setImages] = useState('');

  const getApiData = async () => {
    const response = await getImages();
    setImages(response.images);
  };

  useEffect(() => {
    getApiData();
  }, []);
  // console.log('====================================');
  // console.log(images);
  // console.log('====================================');

  const renderItem = ({item}) => {
    // <Text>{item.xt_image}</Text>
    return (
      <TouchableHighlight
        onPress={() =>
          navigation.navigate('ImageDetail', {imagePath: item.xt_image})
        }>
        <View style={{flex: 1}}>
          <Image
            source={{uri: item.xt_image}}
            style={{
              width: window.width,
              height: window.width,
              resizeMode: 'contain',
            }}
          />
        </View>
      </TouchableHighlight>
    );
  };

  return (
    // <Text>HIIII</Text>
    <SafeAreaView style={{flex: 1}}>
      {/* <Text>Hiii</Text> */}
      <FlatList
        data={images}
        // keyExtractor={images => images.id}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
