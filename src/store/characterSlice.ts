import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Character {
  id: string;
  image: string;
  attempts: number;
  guessed: boolean;
  house: string;
  dateOfBirth: string;
  actor: string;
  species: string;
}

export interface CharactersState {
  characters: {
    [name: string]: Character;
  };
}

const initialState: CharactersState = {
  characters: {},
};

export const charactersSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    trackAttempt(
      state,
      action: PayloadAction<{name: string; character: Character}>,
    ) {
      const {name, character} = action.payload;

      if (state.characters[name]) {
        state.characters[name].attempts += 1;
      } else {
        state.characters[name] = {
          ...character,
          attempts: 1,
          guessed: false,
        };
      }
    },
    setGuessed(
      state,
      action: PayloadAction<{name: string; character: Character}>,
    ) {
      const {name, character} = action.payload;

      if (state.characters[name]) {
        state.characters[name].guessed = true;
        state.characters[name].attempts += 1;
      } else {
        state.characters[name] = {
          ...character,
          attempts: 1,
          guessed: true,
        };
      }
    },
    resetCharacters(state) {
      state.characters = {};
    },
  },
});

export const {trackAttempt, setGuessed, resetCharacters} =
  charactersSlice.actions;

export default charactersSlice.reducer;
