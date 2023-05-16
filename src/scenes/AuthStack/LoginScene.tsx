import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
import React, {useCallback} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
} from 'react-native';
import Button from 'src/components/buttons/Button';
import {AuthStackParamList} from 'src/types/navigation/AuthStackParamList';

const styles = StyleSheet.create({
  root: {flex: 1},
  content: {
    flex: 1,
    backgroundColor: '#1d1d1d',
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
    paddingVertical: 10,
  },
  body: {justifyContent: 'center', alignItems: 'center'},
  scrollView: {flex: 1},
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  loggInStatusText: {
    color: '#EAEAEA',
    fontFamily: 'Commissioner-Bold',
    paddingHorizontal: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  button: {marginBottom: 10, marginHorizontal: 20},

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
    paddingHorizontal: 20,
    fontSize: 18,
    paddingBottom: 20,
    textAlign: 'center',
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

  const welcomeText = 'Välkommen till Pact Planet!';
  const introText = `Kontrollera dina kontrakt enkelt med vår app! ${' '}Logga in för att få åtkomst till våra professionella tjänster och få din affärsjuridik under kontroll.`;

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.content}>
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.background}
        />

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}>
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
              <LinearGradient
                // Background Linear Gradient
                colors={['transparent', '#00EAEAEAF']}
                style={{
                  padding: 10,
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  marginTop: 20,
                }}
              />
            </View>
            <View style={{position: 'absolute', alignSelf: 'center'}}>
              <LinearGradient
                // Background Linear Gradient
                colors={['transparent', '#329BFF']}
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
                // Background Linear Gradient
                colors={['transparent', '#8000FF']}
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
