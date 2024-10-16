import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

interface CharacterImageProps {
  image: string | undefined;
  name?: string;
}

const CharacterImage: React.FC<CharacterImageProps> = ({image, name}) => {
  return (
    <>
      {image ? (
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
      ) : (
        <View style={styles.imgContainer}>
          <Text>No Image</Text>
        </View>
      )}
      {name && <Text style={styles.text}>{name}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    marginVertical: 20,
    width: 120,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 150,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default CharacterImage;
