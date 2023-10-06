import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, List} from 'react-native-paper';
import styles from '../../../styles';

const ItemCategory = ({category}) => {
  const navigation = useNavigation();
  // return (
  //   <List.Item
  //     title={category.name}
  //     onPress={() => navigation.navigate('truthordare', {id: category.id})}
  //     // description="Item description"
  //     left={props => <List.Icon {...props} icon="folder" />}
  //   />
  // );
  console.log(category);
  return (
    <View style={[styles.slide, {backgroundColor: category.color}]}>
      <Text style={styles.slideTitle}>{category.name}</Text>
      {/* <Image style={styles.slideImage} source={category?.image} /> */}
      <Text style={styles.slideText}>{category.description}</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('truthordare', {id: category.id})}>
        Commencez la partie !
      </Button>
    </View>
  );
};

export default ItemCategory;
