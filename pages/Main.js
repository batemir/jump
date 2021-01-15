import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Text from './components/CText';
import { Accelerometer } from 'expo-sensors';
import { round } from '../utils';

export default function Main() {
  const [count, setCount] = useState(0);
  const [isStarted, setStarted] = useState(false);

  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    let prev = { x: 0, y: 0, z: 0 };
    let c = count;
    Accelerometer.setUpdateInterval(400);
    setSubscription(
      Accelerometer.addListener(({ x, y, z }) => {
        const r = { x: round(x), y: round(y), z: round(z) };
        const res = [prev.x - r.x, prev.y - r.y, prev.z - r.z].map(Math.abs);
        prev = { x: r.x, y: r.y, z: r.z };
        if (res.every((val) => val > 0.1)) {
          c += 1;
          setCount(c + 1);
        }
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
    Accelerometer.removeAllListeners();
  };

  const toggleStarting = () => {
    setStarted(!isStarted);
  };

  const handlePress = (e) => {
    if (!isStarted) {
      _subscribe();
    } else {
      _unsubscribe();
    }
    toggleStarting();
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Количество прыжков: {Math.round(count / 2)}{' '}
      </Text>
      <View style={styles.wrapper}>
        <Button title={isStarted ? 'Стоп' : 'Старт'} onPress={handlePress} />
        {count !== 0 && <Button title="Сброс" onPress={handleReset} />}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    marginBottom: 40,
  },
});
