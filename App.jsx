import {FlatList, View} from 'react-native';
import React from 'react';
import Flex from './tuto/Flex';
import Search from './tuto/Search';
import CardTuto from './tuto/CardTuto';

const Stagiaires = [
  {id: 1, prenom: 'Hervé'},
  {id: 1, prenom: 'Toto'},
  {id: 1, prenom: 'Anne'},
  {id: 1, prenom: 'Yohan'},
];

const App = () => {
  return (
    <View>
      <Flex nom="Marliacy" prenom="Hervé" />;
      <Search />
      <FlatList
        data={Stagiaires}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => <CardTuto title={item.prenom} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;
