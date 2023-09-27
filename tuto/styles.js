import {StyleSheet} from 'react-native';

export const stylesTuto = StyleSheet.create({
  contentFlex: {
    // flex: 1,
    paddingVertical: 10, // Équivalent de paddingTop & paddingBottom
    paddingTop: 10,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  box1: {
    backgroundColor: 'cyan',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    fontSize: 5,
    fontWeight: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 25,
    // borderBottomStartRadius: 25,
  },
  box2: {
    backgroundColor: 'yellow',
    height: 50,
    width: 200,
    borderTopStartRadius: 25,
  },
  textBox2: {
    fontSize: 32,
    color: 'gray',
    flexWrap: 'wrap',
  },
  contentSearch: {
    paddingHorizontal: 20,
  },
});
