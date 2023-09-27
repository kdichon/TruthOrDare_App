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
    <View
    // style={{
    //   position: 'absolute',
    //   bottom: 10,
    //   margin: 10,
    //   marginHorizontal: 25,
    //   borderRadius: 20,
    //   padding: 10,
    //   //       // width: '100%',
    //   backgroundColor: '#EDEDED',
    //   flexDirection: 'row',
    //   alignItems: 'center',
    // }}
    >
      <Text>{player.name}</Text>
      <Button onPress={supprimer}>Suppr.</Button>
    </View>
  );
};

export default ItemPlayer;
