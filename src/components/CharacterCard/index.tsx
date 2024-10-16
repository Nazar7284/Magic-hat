import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Character} from '../../store/characterSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/Navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'List'>;

interface CharacterCardProps {
  name: string;
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({name, character}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {name})}
      style={styles.characterContainer}>
      <View style={styles.characterInfoContainer}>
        {character.image ? (
          <Image
            style={styles.characterImage}
            source={{uri: character.image}}
          />
        ) : (
          <View style={styles.noImageContainer}>
            <Text style={styles.noImageText}>No Image</Text>
          </View>
        )}
        <View style={styles.characterTextContainer}>
          <Text style={styles.characterName}>{name}</Text>
          <Text style={styles.characterAttempts}>
            {character.attempts} attempts
          </Text>
        </View>
      </View>
      {character.guessed ? (
        <Icon name="check-circle" size={40} color="green" />
      ) : (
        <View style={styles.actionContainer}>
          <Pressable
            onPress={() => navigation.navigate('Home', {id: character.id})}>
            <Icon name="refresh" size={40} color="gray" />
          </Pressable>
          <Icon name="times-circle" size={40} color="red" />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  characterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  characterInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  characterImage: {
    width: 40,
    height: 60,
  },
  noImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 60,
  },
  noImageText: {
    textAlign: 'center',
    fontSize: 14,
  },
  characterTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  characterName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  characterAttempts: {
    fontSize: 14,
    color: 'black',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
});

export default CharacterCard;
