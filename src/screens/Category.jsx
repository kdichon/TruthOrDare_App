import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {updateLoading} from '../redux/loading';
import {loadData} from '../common/js/db';
import ItemCategory from '../common/components/ItemCategory';

const Category = ({navigation}) => {
  //
  const [categories, setCategories] = useState([]);
  // Changement de l'état de "loading"
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const loadCategory = async () => {
    // Démarrage du "Loading"
    dispatch(updateLoading());
    // Chargement de la base de Données [Firestore]
    const dataCategories = await loadData('CategoryDOT');
    // Application des Datas à Catégories
    setCategories(dataCategories);
    console.log('CatDatas', setCategories);
    // Arrêt du "Loading"
    dispatch(updateLoading());
  };

  useEffect(() => {
    loadCategory();
  }, []);
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({item}) => <ItemCategory category={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Category;
