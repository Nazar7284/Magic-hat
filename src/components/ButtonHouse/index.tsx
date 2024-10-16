import React from 'react';
import {Image, Pressable, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {success, failed} from '../../store/counterSlice';
import {trackAttempt, setGuessed, Character} from '../../store/characterSlice';

const images = {
  Gryffindor: require('../../assets/image/Gryffindor.webp'),
  Hufflepuff: require('../../assets/image/Hufflepuff.webp'),
  Ravenclaw: require('../../assets/image/Ravenclaw.webp'),
  Slytherin: require('../../assets/image/Slytherin.webp'),
} as const;

type HouseNames = keyof typeof images;

interface ButtonHouseProps {
  title?: HouseNames;
  character: Character & {name: string};
  loadCharacter: () => void;
}

const ButtonHouse: React.FC<ButtonHouseProps> = ({
  title,
  character,
  loadCharacter,
}) => {
  const dispatch = useDispatch();

  const handleClickHouse = () => {
    const {house, name} = character;

    const normalizedTitle = title ?? '';
    const normalizedHouse = house || '';

    if (normalizedTitle === normalizedHouse) {
      dispatch(success());
      dispatch(
        setGuessed({
          name: name,
          character,
        }),
      );
      loadCharacter();
    } else {
      dispatch(failed());
      dispatch(
        trackAttempt({
          name: name,
          character,
        }),
      );
    }
  };

  return (
    <Pressable style={styles.button} onPress={handleClickHouse}>
      {title && <Image style={styles.image} source={images[title]} />}
      <Text style={styles.text}>{title ?? 'Not in the house'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minHeight: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonHouse;
