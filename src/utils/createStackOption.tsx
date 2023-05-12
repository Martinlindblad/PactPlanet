import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {EdgeInsets} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
import PPText from 'src/components/PPText';

const screenHeight = Dimensions.get('screen').height;
const createDefaultStackOptions = ({
  theme,
}: {
  theme: Record<string, string>;
  safeAreaInsets: EdgeInsets;
}): StackNavigationOptions => ({
  headerTitleAlign: 'center',
  headerTitleAllowFontScaling: false,
  headerStyle: {
    height: screenHeight * 0.15,
  },
  headerShown: true,
  //   headerBackImage: () => (
  //     <Icon
  //       name="arrow-ios-back-outline"
  //       fill={theme['text-alternate-color']}
  //       style={{width: 24, height: 24}}
  //     />
  //   ),
  headerTitle: ({children}) => (
    <PPText
      style={{color: theme['text-alternate-color']}}
      allowFontScaling={false}>
      {children}
    </PPText>
  ),
  headerTransparent: true,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
});

export default createDefaultStackOptions;
