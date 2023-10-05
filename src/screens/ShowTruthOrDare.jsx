import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NextPlayer from '../common/components/button/NextPlayer';
import {loadDataTOD} from '../common/js/db';
import {getRandomIndex} from '../common/js/function';
import {updTod} from '../redux/player';

const ShowTruthOrDare = ({route}) => {
  const dispatch = useDispatch();
  // console.log('Show_idTOD', route.params.id);
  const [showTOD, setShowTOD] = useState();
  const {id, type} = route.params;
  const {players, position} = useSelector(state => state.player);
  const loadTOD = async () => {
    // console.log('load', id);
    const dataTruthOrDare = await loadDataTOD(id, type);
    // console.log('dataTruthOrDare', dataTruthOrDare);
    const index = getRandomIndex(0, dataTruthOrDare.length);
    // console.log('index', id, index);
    // Enregistrement d'index de la tod du player dans le store
    dispatch(updTod(dataTruthOrDare[index].id));
    setShowTOD(dataTruthOrDare[index]);
  };

  useEffect(() => {
    loadTOD();
  }, []);

  return (
    <View>
      <Text>{players[position]?.name}</Text>
      <Text>{showTOD?.title} </Text>
      <NextPlayer id={id} />
    </View>
  );
};

export default ShowTruthOrDare;
