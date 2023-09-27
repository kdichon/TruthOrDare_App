import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const TruthOrDare = ({navigation}) => {
  return (
    <View>
      <Text>TruthOrDare</Text>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('showtruthordare')}>
        Action
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('showtruthordare')}>
        Vérité
      </Button>
    </View>
  );
};

export default TruthOrDare;
