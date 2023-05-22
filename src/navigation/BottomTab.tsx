import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeStack from './HomeStack';
import SettingsStack from './SettingsStack';
const Tab = createBottomTabNavigator();

function BottomTab() {
  const {bottom: bottomInset} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'pink',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '400',
          fontFamily: 'Outfit-Regular',
          paddingBottom: 12,
          marginTop: -10,
        },
        tabBarStyle: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: bottomInset + 66,
          position: 'absolute',
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
