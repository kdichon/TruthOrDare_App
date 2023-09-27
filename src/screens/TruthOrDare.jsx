import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const TruthOrDare = ({route, navigation}) => {
  const {id} = route.params;

  return (
    <View>
      <Text>TruthOrDare</Text>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate('showtruthordare', {id: id, type: 'dare'})
        }>
        Action
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate('showtruthordare', {id: id, type: 'truth'})
        }>
        Vérité
      </Button>
    </View>
  );
};

export default TruthOrDare;
