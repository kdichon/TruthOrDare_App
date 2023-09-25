import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {addPlayer} from '../../../redux/player';

const AddPlayer = () => {
  const [name, setName] = useState();

  const dispatch = useDispatch();
  //Enregistrement du joueur
  const send = value => {
    console.log('send', value);
    // Formatage de la donnée à envoyer dans le store
    const newPlayer = {id: Date.now(), name: value};
    // Envoi dans le store via le Reducer addPlayer
    dispatch(addPlayer(newPlayer));
    //Vide le champ du TextInput nom du joueur
    setName('');
  };
  return (
    <>
      <TextInput
        label="Nom du joueur"
        value={name}
        onChangeText={text => setName(text)}
        onSubmitEditing={value => send(value.nativeEvent.text)}
      />
    </>
  );
};

export default AddPlayer;
