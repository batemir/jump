import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
  },
});

export default function CText({ children, ...props }) {
  return (
    <Text className={styles.text} {...props}>
      {children}
    </Text>
  );
}
