import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {reset} from '../../store/counterSlice';
import {resetCharacters} from '../../store/characterSlice';
import {useNavigation} from '@react-navigation/native';

interface CustomHeaderProps {
  title: string;
  withBackButton?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({title, withBackButton}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleReset = () => {
    dispatch(reset());
    dispatch(resetCharacters());
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      {withBackButton ? (
        <Pressable style={styles.leftButton} onPress={handleBack}>
          <Icon name="chevron-back" size={24} color="black" />
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      ) : (
        <View style={styles.sidePlaceholder} />
      )}
      <Text style={styles.headerText} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      <Pressable style={styles.rightButton} onPress={handleReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  leftButton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: 80,
  },
  buttonText: {
    fontSize: 16,
  },
  sidePlaceholder: {
    width: 80,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightButton: {
    width: 80,
    alignItems: 'center',
  },
});

export default CustomHeader;
