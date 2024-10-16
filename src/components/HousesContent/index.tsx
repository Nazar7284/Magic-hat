import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonHouse from '../ButtonHouse/index';
import {Character} from '../../store/characterSlice';

interface HousesContentProps {
  character: Character & {name: string};
  loadCharacter: () => void;
}

const HousesContent: React.FC<HousesContentProps> = ({
  character,
  loadCharacter,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ButtonHouse
          title="Gryffindor"
          character={character}
          loadCharacter={loadCharacter}
        />
        <ButtonHouse
          title="Slytherin"
          character={character}
          loadCharacter={loadCharacter}
        />
      </View>
      <View style={styles.row}>
        <ButtonHouse
          title="Ravenclaw"
          character={character}
          loadCharacter={loadCharacter}
        />
        <ButtonHouse
          title="Hufflepuff"
          character={character}
          loadCharacter={loadCharacter}
        />
      </View>
      <ButtonHouse character={character} loadCharacter={loadCharacter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
});

export default HousesContent;
