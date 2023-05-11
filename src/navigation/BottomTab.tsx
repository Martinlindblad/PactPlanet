import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import HomeStack from './HomeStack';
import SettingsStack from './SettingsStack';

const Tab = createBottomTabNavigator();

function BottomTab(): JSX.Element {
  const {bottom: bottomInset} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Overview"
      screenOptions={({}) => ({
        headerTransparent: true,
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
      {/* <Tab.Screen name="Content" component={CalendarStack} />
      <Tab.Screen
        name="Forum"
        component={ForumStack}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Courses" component={CoursesStack} /> */}
      {/* <Tab.Screen
        name="More"
        component={MoreStack}
        options={{headerShown: false, title: 'Mer'}}
      /> */}
    </Tab.Navigator>
  );
}

export default BottomTab;
