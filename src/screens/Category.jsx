import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const Category = ({navigation}) => {
  return (
    <View>
      <Text>Category</Text>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('truthordare')}>
        Action ou Vérité
      </Button>
    </View>
  );
};

export default Category;
