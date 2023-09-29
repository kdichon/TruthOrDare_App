import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import NextPlayer from '../common/components/button/NextPlayer';
import {loadDataTOD} from '../common/js/db';
import {getRandomIndex} from '../common/js/function';

const ShowTruthOrDare = ({route}) => {
  console.log('Show_idTOD', route.params.id);
  const [showTOD, setShowTOD] = useState();
  const {id} = route.params;
  const {players, position} = useSelector(state => state.player);
  const loadTOD = async () => {
    // console.log('load', id);
    const dataTruthOrDare = await loadDataTOD(id);
    console.log('dataTruthOrDare', dataTruthOrDare);
    const index = getRandomIndex(0, dataTruthOrDare.length);
    console.log(index);
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
