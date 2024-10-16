import React from 'react';
import {StyleSheet, View} from 'react-native';
import CharacterCard from '../CharacterCard/index';
import {Character} from '../../store/characterSlice';

interface CharacterListProps {
  characters: Record<string, Character>;
}

const CharacterList: React.FC<CharacterListProps> = ({characters}) => {
  return (
    <View style={styles.characterListContainer}>
      {Object.entries(characters).map(([name, character]) => (
        <CharacterCard key={name} name={name} character={character} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  characterListContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 16,
    gap: 8,
  },
});

export default CharacterList;
