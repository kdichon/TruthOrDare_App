import {View} from 'react-native';
import React, {useState} from 'react';
import {stylesTuto} from './styles';
import {Searchbar} from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={stylesTuto.contentSearch}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default Search;
