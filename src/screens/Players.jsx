import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styles from '../../styles';
import ItemPlayer from '../common/components/player/ItemPlayer';
import EmptyPlayer from '../common/components/player/EmptyPlayer';
import AddPlayer from '../common/components/player/AddPlayer';
import ResetPlayer from '../common/components/player/ResetPlayer';
import StartGame from '../common/components/button/StartGame';

const Players = () => {
  //Récupération de la liste des joueurs
  const {players} = useSelector(state => state.player);
  // console.log('Players', players);

  return (
    <View style={styles.container}>
      {/* Affichage de la pliste */}
      <FlatList
        data={players}
        renderItem={({item}) => <ItemPlayer player={item} />}
        keyExtractor={item => item.id}
        // Information: Liste vide
        ListEmptyComponent={EmptyPlayer}
        // Information: Ajout de joueur
        ListHeaderComponent={AddPlayer}
      />
      <StartGame />
      <ResetPlayer />
    </View>
  );
};

export default Players;
