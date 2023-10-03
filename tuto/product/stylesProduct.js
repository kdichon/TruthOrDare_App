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
  contentButtonFilter: {
    // backgroundColor: 'red',

    margin: 5,
    backgroundColor: '#FFEACB',
    height: 45,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FF6D00',
    borderWidth: 1,
    borderRadius: 15,
  },
});
