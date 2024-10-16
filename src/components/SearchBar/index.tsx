import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({value, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Filter characters..."
        value={value}
        onChangeText={onChangeText}
      />
      <Icon name="search" size={20} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    paddingHorizontal: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
    flex: 1,
  },
});

export default SearchBar;
