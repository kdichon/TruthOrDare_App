import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import NextPlayer from '../common/components/button/NextPlayer';

const ShowTruthOrDare = () => {
  const {navigation} = useNavigation();
  const {players, position} = useSelector(state => state.player);
  return (
    <View>
      <Text>{players[position].name}</Text>
      <NextPlayer />
    </View>
  );
};

export default ShowTruthOrDare;
