import React, {useCallback, useMemo} from 'react';

import {Dimensions, ScrollView, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import PPText from 'src/components/PPText';
import Button from 'src/components/buttons/Button';
import {AuthStackParamList} from 'src/types/navigation/AuthStackParamList';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    marginHorizontal: 20,
    paddingTop: 16,
    paddingHorizontal: 2,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8F9BB3',
  },

  title: {
    textAlign: 'left',
  },
  shadow: {
    shadowRadius: 32,
    shadowColor: 'black',
    shadowOpacity: 0.16,
    shadowOffset: {width: 1, height: 9},
    borderRadius: 16,
    elevation: 15,
    marginBottom: 30,
  },
});

const Timeout = ({
  navigation,
}: {
  navigation: NavigationProp<AuthStackParamList, 'Timeout'>;
  route: RouteProp<AuthStackParamList, 'Timeout'>;
}): JSX.Element => {
  const {bottom: bottomInset, top} = useSafeAreaInsets();
  const {width: screenWidth} = Dimensions.get('screen');

  const handleRelogin = useCallback(async () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }, [navigation]);

  const contentContainerStyle = useMemo(() => {
    return {
      paddingTop: top,
      paddingBottom: bottomInset,
    };
  }, [bottomInset, top]);

  const cardStyle = useMemo(() => {
    return [
      styles.cardContainer,
      styles.shadow,
      {
        backgroundColor: '#000',
        width: screenWidth - 30,
      },
    ];
  }, [screenWidth]);

  return (
    <View style={{flex: 1, height: '100%'}}>
      <View>
        <PPText>Du har blivit utloggad</PPText>
      </View>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={contentContainerStyle}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={true}>
        <View
          style={[
            cardStyle,
            {
              alignSelf: 'center',
            },
          ]}>
          <PPText>Logga in igen!</PPText>
        </View>
        <Button onPress={handleRelogin} text="Logga in" variant={'primary'} />
      </ScrollView>
    </View>
  );
};

export default Timeout;
