import {StyleSheet, View} from 'react-native';
import React from 'react';
import {stylesTuto} from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native-paper';

const Flex = ({nom, prenom}) => {
  return (
    <View style={stylesTuto.contentFlex}>
      <View style={stylesTuto.box1}>
        <IconFontAwesome name="bars" size={30} color="#900" />
      </View>
      <View style={stylesTuto.box2}>
        <Text style={stylesTuto.textBox2}>
          {prenom}
          {nom}
          {''}
        </Text>
      </View>
      <View style={stylesTuto.box3}>
        <IconFontAwesome name="gear" size={30} color="#900" />
        <Text>Setting</Text>
      </View>
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({});
