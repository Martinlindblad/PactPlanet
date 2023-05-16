import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
import React, {useCallback} from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView, Text} from 'react-native';
import Button from 'src/components/buttons/Button';
import {AuthStackParamList} from 'src/types/navigation/AuthStackParamList';

const style = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#F9FEFF'},
  content: {
    flex: 1,
    backgroundColor: '#F9FEFF',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 26,
    width: '100%',
  },
  body: {justifyContent: 'center', alignItems: 'center'},
  scrollView: {flex: 1},
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  loggInStatusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {marginBottom: 10, marginHorizontal: 20, borderRadius: 18},
  loginUserTitle: {fontSize: 20, fontWeight: 'bold', color: '#000'},
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

const LoginScene = (): JSX.Element => {
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, 'Login'>>();

  const handleSignInWithBankIDButtonPressed = useCallback(() => {
    navigation.navigate('LoginWithBankID');
  }, [navigation]);

  const handleSignInWithOtherMethodButtonPressed = useCallback(() => {
    navigation.navigate('LoginWithBankID');
  }, [navigation]);

  return (
    <View style={style.root}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={style.gradientBackground}>
        <SafeAreaView style={style.content}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={style.scrollView}>
            <View style={style.body}>
              <View style={style.sectionContainer}>
                <Button
                  style={style.button}
                  onPress={handleSignInWithBankIDButtonPressed}
                  text="Logga in med BankID"
                  variant={'primary'}
                />
                <Button
                  style={style.button}
                  onPress={handleSignInWithOtherMethodButtonPressed}
                  text="Annan inloggning"
                  variant={'primary'}
                />
              </View>
              <View style={style.buttonContainer}>
                <Text style={style.loggInStatusText}>
                  Du är förnuvarande utloggad
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default LoginScene;
