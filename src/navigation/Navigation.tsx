import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabs from './MainTabs';
import DetailsScreen from '../screens/Details';
import CustomHeader from '../components/Header';

export type RootStackParamList = {
  Main: undefined;
  Home: {id?: string};
  List: undefined;
  Details: {name: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({route}) => ({
            header: () => (
              <CustomHeader title={route.params?.name} withBackButton />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
