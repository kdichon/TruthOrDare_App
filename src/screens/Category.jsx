import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {updateLoading} from '../redux/loading';
import {loadData} from '../common/js/db';
import ItemCategory from '../common/components/ItemCategory';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
];

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
    console.log('CatDatas', dataCategories);
    // Arrêt du "Loading"
    dispatch(updateLoading());
  };

  useEffect(() => {
    loadCategory();
  }, []);
  return (
    <AppIntroSlider
      data={categories}
      renderItem={({item}) => <ItemCategory category={item} />}
      keyExtractor={item => item.id}
      showDoneButton={false}
    />
  );
};

export default Category;
