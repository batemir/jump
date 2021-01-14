import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import Text from './components/CText';

const styles = StyleSheet.create({
  backgroundWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    fontFamily: 'Montserrat-ExtraBoldItalic',
    color: '#fff',
    fontSize: 48,
  },
  kangaroo: {
    position: 'absolute',
    top: -54,
    right: -24,
  },
  utp: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default function Login() {
  return (
    <View>
      <ImageBackground
        source={require('../assets/img/background.png')}
        style={styles.backgroundWrapper}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>Jump.</Text>
          <Image
            source={require('../assets/img/kangaroo.png')}
            style={styles.kangaroo}
          />
          <Text style={styles.utp}>Become the best in jumping</Text>
        </View>
        {/* <Button title="pepe" onPress={() => navigation.navigate('main')} /> */}
      </ImageBackground>
    </View>
  );
}
