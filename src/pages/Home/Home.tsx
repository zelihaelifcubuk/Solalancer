import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './Home.style';

import ButtonSignUp from '../../components/Button-SignUp';
import ButtonLogIn from '../../components/Button-LogIn';

function Home({navigation}: {navigation: any}){

  function goToSignUp(){
    navigation.navigate('SignUp');
  }

  function goToLogIn(){
    navigation.navigate('LogIn');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/solalancer-logo-bg.png')}
        resizeMode="cover"
        style={styles.image}>
          <ButtonSignUp title="Kayıt Ol" onPress={goToSignUp}/>
          <Text style={styles.text}>Hoşgeldin</Text>
          <ButtonLogIn title="Giriş Yap" onPress={goToLogIn} />
      </ImageBackground>
    </View>
  );
};

export default Home;
