import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import Text from '../components/CText';
import LoginButton from './components/LoginButton';
import styles from './styles';

export default function Login() {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/img/background.png')}
        style={styles.backgroundWrapper}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>Jump.</Text>
          <Image
            source={require('../../assets/img/kangaroo.png')}
            style={styles.kangaroo}
          />
          <Text style={styles.utp}>Become the best in jumping</Text>
        </View>
          <LoginButton />
      </ImageBackground>
    </View>
  );
}
