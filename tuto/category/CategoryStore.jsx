import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import CategoryItem from './components/CategoryItem';

const CategoryStore = () => {
  const categories = useSelector(state => state.category);
  console.log('Store_categories', categories);
  return (
    <View style={styles.container}>
      <Text style={styles.titleCategoryStore}>Category Store</Text>
      <FlatList
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default CategoryStore;
