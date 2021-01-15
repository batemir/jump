import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingBottom: 12,
  },
  text: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    textTransform: 'uppercase',
  },
});

export default function LoginButton() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('main');
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Sign in:</Text>
        <Image source={require('../../../assets/img/google.png')} />
      </View>
    </TouchableOpacity>
  );
}
