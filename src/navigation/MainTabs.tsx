import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home';
import ListScreen from '../screens/List';
import CustomHeader from '../components/Header';

export type HomeStackParamList = {
  Home: undefined;
  List: undefined;
};

const Tab = createBottomTabNavigator<HomeStackParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'List') {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          borderTopWidth: 2,
          borderTopColor: 'black',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader title="Home Screen" />,
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          header: () => <CustomHeader title="List Screen" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
