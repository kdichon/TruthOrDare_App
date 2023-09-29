import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const StartGame = () => {
  const navigation = useNavigation();

  // Récupération de la liste de joueurs
  const {players} = useSelector(state => state.player);
  console.log('Nb_Players', players.length);

  const start = () => {
    navigation.navigate('category');
  };

  return (
    <View>
      {/* Activation du lien "Start Game"
      {players.length >= 2 && <Text>StartGame</Text>}
      {/* Activation avec un bouton "Start Game" */}
      {/* {players.length >= 2 && <Button mode="outlined">StartGame</Button>} */}
      {/* Activation avec un bouton "Start Game" */}
      <Button mode="outlined" disabled={!(players.length >= 2)} onPress={start}>
        StartGame
      </Button>
    </View>
  );
};

export default StartGame;
