import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Button from 'src/components/buttons/Button';

import RenderIllustration from 'src/components/RenderIllustration';
import {AuthStackParamList} from 'src/types/navigation/AuthStackParamList';

import SignUp from '../../../assets/svg/illustrations/sign_up.svg';
import PPText from 'src/components/PPText';

const styles = StyleSheet.create({
  root: {flex: 1},
  content: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
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
  scrollView: {flex: 1, backgroundColor: '#1d1d1d'},
  contentContainerStyle: {
    flexGrow: 1,
  },
  loggInStatusText: {
    color: '#EAEAEA',
    fontFamily: 'Commissioner-Bold',
    paddingHorizontal: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    marginBottom: 20,
    marginHorizontal: 20,
    minWidth: 300,
  },

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

    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeTitle: {
    fontFamily: 'Commissioner-regular',
    paddingHorizontal: 40,
    fontSize: 16,
    paddingBottom: 20,
    textAlign: 'center',
  },
  welcomeText: {
    color: '#EAEAEA',
    fontFamily: 'Commissioner-Bold',
    paddingHorizontal: 20,
    fontSize: 12,
    textAlign: 'center',
  },

  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  terms: {
    color: '#EAEAEA',
    fontFamily: 'Commissioner-regular',
    fontWeight: '300',
    paddingHorizontal: 30,
    fontSize: 10,
    lineHeight: 16,
    textAlign: 'center',
    paddingTop: 30,
  },
});

const LoginWithOtherMethod = (): JSX.Element => {
  const navigation =
    useNavigation<
      StackNavigationProp<AuthStackParamList, 'LoginWithOtherMethod'>
    >();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.root}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <PPText style={styles.welcomeTitle}>
              Bara ett steg från att bli medlem i Sveriges största nätverk för
              liksinnade entreprenörer
            </PPText>
          </View>
          <RenderIllustration Svg={SignUp} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <PPText style={styles.terms}>
              Genom att acceptera våra tydliga och rättvisa villkor etablerar vi
              förtroende och förståelse. Låt oss samarbeta för ömsesidig
              framgång.
            </PPText>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => {
                  navigation.navigate('LoginEmailPassword');
                }}
                text="Facebook"
                variant="primary"
              />
              <Button
                variant="secondary"
                style={styles.button}
                onPress={() => {
                  navigation.navigate('LoginEmailPassword');
                }}
                text="Google"
              />
              <Button
                style={[styles.button]}
                onPress={() => {
                  navigation.navigate('LoginEmailPassword');
                }}
                text="E-post och lösenord"
                variant={'link'}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LoginWithOtherMethod;
