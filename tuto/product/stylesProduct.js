import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const stylesProduct = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  cardContent: {
    backgroundColor: 'white',
    width: (windowWidth - 40) / 2,
  },
  cardProduct: {
    margin: 5,
  },
  cardTitle: {
    fontSize: 15,
    color: '#FF6D00',
    fontWeight: '600',
  },
  cardPrice: {
    fontSize: 14,
    color: '#FFEACB',
    fontWeight: '900',
  },
});
