import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './Home.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/solalancer-intro-bg-empty.png')}
        resizeMode="cover"
        style={styles.image}>
        <ImageBackground
          source={require('../../assets/solalancer-intro-bg.png')}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.text}>Hoşgeldin</Text>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default Home;
