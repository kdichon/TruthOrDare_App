import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import CategoryItem from './components/CategoryItem';

const categories = [
  {id: 1, name: 'All'},
  {id: 2, name: 'PHP'},
  {id: 3, name: 'JS'},
  {id: 4, name: 'SQL'},
  {id: 5, name: 'HTML'},
];

const CategoryData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigTitle}>Category Data</Text>
      <FlatList
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        pagingEnabled={false}
      />
    </View>
  );
};

export default CategoryData;
