import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CharacterList from '../../components/CharacterList';
import SearchBar from '../../components/SearchBar';
import StatisticsBlock from '../../components/StatisticsBlock';
import {debounce} from 'lodash';

function ListScreen() {
  const {characters} = useSelector((state: RootState) => state.character);
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState('');

  const debouncedSetSearchText = useCallback(
    debounce((text: string) => {
      setDebouncedSearchText(text);
    }, 300),
    [],
  );

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    debouncedSetSearchText(text);
  };

  const filteredCharacters = debouncedSearchText
    ? Object.entries(characters).filter(([name]) =>
        name.toLowerCase().includes(debouncedSearchText.toLowerCase()),
      )
    : Object.entries(characters);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={styles.mainContainer}>
      {Object.entries(characters).length !== 0 ? (
        <View style={styles.characterListContainer}>
          <StatisticsBlock />
          <SearchBar value={searchText} onChangeText={handleSearchChange} />
          <CharacterList characters={Object.fromEntries(filteredCharacters)} />
        </View>
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No character yet</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 16,
  },
  characterListContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 16,
    gap: 8,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    paddingHorizontal: 5,
    fontSize: 24,
    textAlign: 'center',
  },
});

export default ListScreen;
