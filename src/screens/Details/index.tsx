import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CharacterImage from '../../components/CharacterImage';
import {RootStackParamList} from '../../navigation/Navigation';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const {name} = route.params;

  const character = useSelector(
    (state: RootState) => state.character.characters[name],
  );

  return (
    <View style={styles.container}>
      <CharacterImage image={character?.image} />
      {character.guessed ? (
        <View style={styles.gap4}>
          <Text style={styles.textInfo}>House: {character.house}</Text>
          <Text style={styles.textInfo}>
            Date of birth: {character.dateOfBirth}
          </Text>
          <Text style={styles.textInfo}>Actor: {character.actor}</Text>
          <Text style={styles.textInfo}>Species: {character.species}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.noInfo}>ACCESS DENIED</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 36,
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  imageContainer: {
    width: 120,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gap4: {gap: 4},
  textInfo: {color: 'black'},
  noInfo: {
    borderWidth: 3,
    borderColor: 'red',
    padding: 5,
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetailsScreen;
