import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
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
