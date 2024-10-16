import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import StatisticsBlock from '../../components/StatisticsBlock';
import {RouteProp, useRoute} from '@react-navigation/native';
import CharacterImage from '../../components/CharacterImage';
import {getCharacterByID, getRandomCharacter} from '../../api/characterAPI';
import HousesContent from '../../components/HousesContent';
import {RootStackParamList} from '../../navigation/Navigation';

type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const [character, setCharacter] = useState<any>('');
  const [refreshing, setRefreshing] = useState(false);

  const {id: characterID} = useRoute<HomeRouteProp>().params || {};

  const loadCharacter = async (id?: string) => {
    setRefreshing(true);
    const newCharacter = id
      ? await getCharacterByID(id)
      : await getRandomCharacter();
    console.log(newCharacter);
    setCharacter(newCharacter);
    setRefreshing(false);
  };

  useEffect(() => {
    loadCharacter();
  }, []);

  useEffect(() => {
    if (characterID) {
      loadCharacter(characterID);
    }
  }, [characterID]);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={loadCharacter} />
      }>
      <View style={styles.mainContainer}>
        <StatisticsBlock />
        <CharacterImage image={character.image} name={character.name} />
      </View>
      <HousesContent character={character} loadCharacter={loadCharacter} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 16,
    flex: 1,
    alignItems: 'center',
    display: 'flex',
  },
});

export default HomeScreen;
