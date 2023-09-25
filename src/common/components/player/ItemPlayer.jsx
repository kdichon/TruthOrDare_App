import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {deletePlayer} from '../../../redux/player';

const ItemPlayer = ({player}) => {
  const dispatch = useDispatch();

  const supprimer = () => {
    console.log('Item_player', player);
    dispatch(deletePlayer(player));
  };

  return (
    <View>
      <Text>{player.name}</Text>
      <Button onPress={supprimer}>Suppr.</Button>
    </View>
  );
};

export default ItemPlayer;
