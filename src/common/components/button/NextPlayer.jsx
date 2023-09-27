import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {nextPlayer} from '../../../redux/player';
import {useNavigation} from '@react-navigation/native';

const NextPlayer = ({id}) => {
  // const {id, type} = route.params;
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const {players, position} = useSelector(state => state.player);

  const suivant = () => {
    players.length > position
      ? dispatch(nextPlayer(0))
      : dispatch(nextPlayer(position + 1));
    navigation.navigate('truthordare', {id: id});
  };

  return (
    <Button icon="skip-next-circle" mode="outlined" onPress={suivant}>
      Next
    </Button>
  );
};
// navigation.navigate('truthordare');

export default NextPlayer;
