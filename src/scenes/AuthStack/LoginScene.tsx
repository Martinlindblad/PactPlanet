import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View, StyleSheet, ScrollView, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
import RenderIllustration from 'src/components/RenderIllustration';
import Button from 'src/components/buttons/Button';
import {AuthStackParamList} from 'src/types/navigation/AuthStackParamList';
import AutmosphereSvg from 'assets/svg/atmosphere.svg';

const styles = StyleSheet.create({
  root: {flex: 1},
  content: {
    flex: 1,
    backgroundColor: '#1d1d1d',
  },

  sectionContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 26,
    width: '100%',
  },

  body: {justifyContent: 'center', alignItems: 'center'},

  scrollView: {flex: 1},

  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  loggInStatusText: {
    color: '#EAEAEA',
    fontFamily: 'Commissioner-regular',
    fontSize: 12,
    lineHeight: 18,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  button: {marginBottom: 10},

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeTitle: {
    color: '#EAEAEA',
    fontFamily: 'Commissioner-Bold',
    fontSize: 24,
    paddingBottom: 30,
    letterSpacing: 2,
  },
});

const LoginScene = (): JSX.Element => {
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, 'Login'>>();

  const handleSignInWithBankIDButtonPressed = useCallback(() => {
    navigation.navigate('LoginWithBankID');
  }, [navigation]);

  const handleSignInWithOtherMethodButtonPressed = useCallback(() => {
    navigation.navigate('LoginWithOtherMethod');
  }, [navigation]);

  const handleRegisterButtonPressed = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const welcomeText = `Skapa tydliga villkor.
Bygg tillit.
Uppnå framgång.`;
  const introText = `Kontrollera dina kontrakt enkelt genom våra tjänster! ${' '}Logga in och få din affärsjuridik under kontroll.`;

  const Header = (): JSX.Element => {
    return (
      <View
        style={{
          padding: 40,
          position: 'absolute',
          width: '100%',
          height: '50%',
          marginTop: 100,
        }}>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
          }}>
          <RenderIllustration Svg={AutmosphereSvg} height={100} width={100} />
          <View style={{position: 'absolute', alignSelf: 'center'}}>
            <LinearGradient
              colors={['transparent', '#0072BFFD']} // Adjust the color here
              style={{
                padding: 10,
                height: 25,
                width: 25,
                borderRadius: 50,
                marginTop: 20,
              }}
            />
          </View>
          <View style={{position: 'absolute', alignSelf: 'center'}}>
            <LinearGradient
              colors={['transparent', '#0064BFFD']} // Adjust the color here
              style={{
                padding: 10,
                height: 75,
                width: 75,
                borderRadius: 75,
                marginTop: 10,
              }}
            />
          </View>
          <View style={{position: 'absolute', alignSelf: 'center'}}>
            <LinearGradient
              colors={['transparent', '#0054BFFD']} // Adjust the color here
              style={{
                padding: 10,
                height: 100,
                width: 100,
                borderRadius: 100,
                shadowColor: '#fff',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 1.5,
                shadowRadius: 10,
                elevation: 45,
              }}
            />
          </View>
        </View>

        <Text
          style={{
            position: 'absolute',
            color: '#EAEAEA',
            fontSize: 36,
            left: 100,
            fontFamily: 'Condiment-Regular',
            width: '100%',
          }}>
          Pact
        </Text>
        <Text
          style={{
            position: 'absolute',
            color: '#EAEAEA',
            fontSize: 36,
            left: 245,
            fontFamily: 'Condiment-Regular',
            width: '100%',
            top: 65,
          }}>
          Planet
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.content}>
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.background}
        />
        <Header />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.titleContainer}>
            <Text style={styles.welcomeTitle}>{welcomeText}</Text>

            <Text style={styles.loggInStatusText}>{introText}</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Button
                style={styles.button}
                onPress={handleSignInWithBankIDButtonPressed}
                text="Öppna Bank-ID"
                variant={'primary'}
              />
              <Button
                style={styles.button}
                onPress={handleSignInWithOtherMethodButtonPressed}
                text="Annan inloggning"
                variant={'primary'}
              />
            </View>
          </View>
        </ScrollView>
        <Button
          style={[
            styles.button,
            {
              position: 'absolute',
              bottom: 10,
              right: 20,
            },
          ]}
          onPress={handleRegisterButtonPressed}
          text={`Registera dig >>>`}
          textStyle={{
            color: '#EAEAEA',
            fontFamily: 'Condiment-Regular',
            fontSize: 18,
            lineHeight: 24,
          }}
          variant={'ghost'}
        />
      </SafeAreaView>
    </View>
  );
};

export default LoginScene;
