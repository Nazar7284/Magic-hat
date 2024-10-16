import axios from 'axios';

export const getRandomCharacter = async () => {
  try {
    const response = await axios.get(
      'https://hp-api.onrender.com/api/characters',
    );
    const characters = response.data;
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  } catch (error) {
    console.error(error);
  }
};

export const getCharacterByID = async (id: string) => {
  try {
    const response = await axios.get(
      `https://hp-api.onrender.com/api/character/${id}`,
    );
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};
