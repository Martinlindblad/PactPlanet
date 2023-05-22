import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import PPText from 'src/components/PPText';
import {AuthStackParamList} from 'src/types/navigation/AuthStackParamList';
import {useFirebaseUserAuth} from 'src/contexts/Auth';
import Button from 'src/components/buttons/Button';
import {AxiosError} from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';

type LoginForm = {
  email: string;
  password: string;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontWeight: '400',
    paddingBottom: 21,
    borderWidth: 0,
    borderRadius: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 3,
  },
});

const LoginEmailPassword = (): JSX.Element => {
  const {top: topInset, bottom: bottomInset} = useSafeAreaInsets();
  const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

  const navigation =
    useNavigation<
      StackNavigationProp<AuthStackParamList, 'LoginEmailPassword'>
    >();

  const passwordRef = useRef<TextInput>(null);

  const {signInWithEmailAndPassword, initializing, currentUser} =
    useFirebaseUserAuth();

  useEffect(() => {
    if (currentUser) {
      navigation.navigate('Home');
    }
  }, [currentUser, navigation]);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [_error, setError] = useState<AxiosError<{
    error: string;
    error_description: string;
  }> | null>(null);

  const {watch, control, handleSubmit} = useForm<LoginForm>({
    defaultValues: {
      email: 'martin.l@test.com',
      password: 'DevTest',
    },
  });

  const [email, password] = watch(['email', 'password']);

  const handleLogin = useCallback(
    (data: LoginForm) => {
      if (data.email && data.password) {
        setIsLoggingIn(true);

        const params = {email: data.email, password: data.password};

        signInWithEmailAndPassword(params);
      }
    },
    [signInWithEmailAndPassword],
  );

  useEffect(() => {
    setError(null);
  }, [email, password]);

  const topSectionStyle = useMemo(() => {
    return {
      paddingLeft: 28,
      paddingRight: 24,
      minHeight: screenHeight * 0.2,
      paddingBottom: 50,
      paddingTop: topInset,
      width: screenWidth - 30,
    };
  }, [screenHeight, screenWidth, topInset]);

  const loginButtonContainerStyle = useMemo(() => {
    return {
      paddingHorizontal: 20,
      paddingBottom: bottomInset,
      paddingTop: 19,
    };
  }, [bottomInset]);

  const scrollViewContainerStyle = useMemo(() => {
    return {
      paddingTop: 20,
      paddingBottom: bottomInset,
      paddingHorizontal: 20,
    };
  }, [bottomInset]);

  return (
    <View style={{flex: 1, height: '100%'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={scrollViewContainerStyle}
          keyboardShouldPersistTaps="handled">
          <View style={{marginTop: 26}}>
            <PPText
              style={[
                styles.inputLabel,
                {
                  color: '#2b2b2b',
                },
              ]}>
              E-post
            </PPText>
            <Controller
              control={control}
              render={({field: {value, onChange}}) => (
                <TextInput
                  maxFontSizeMultiplier={1.5}
                  onChangeText={onChange}
                  value={value}
                  autoComplete="email"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="mail@mail.com"
                  keyboardType="email-address"
                  returnKeyType="next"
                  placeholderTextColor={'#BBB'}
                  style={[styles.input, {color: '#2b2b2b'}]}
                  onSubmitEditing={() => {
                    if (passwordRef?.current) {
                      passwordRef.current.focus();
                    }
                  }}
                />
              )}
              name="email"
            />
            <PPText
              style={[
                styles.inputLabel,
                {
                  color: '#2b2b2b',
                },
              ]}>
              Lösenord
            </PPText>
            <Controller
              control={control}
              render={({field: {value, onChange}}) => (
                <TextInput
                  maxFontSizeMultiplier={1.5}
                  ref={passwordRef}
                  value={value}
                  onChangeText={onChange}
                  autoCorrect={false}
                  autoComplete="password" // android
                  textContentType="password" // iOS
                  autoCapitalize="none"
                  placeholder="••••••••"
                  keyboardType="default"
                  returnKeyType="send"
                  secureTextEntry
                  placeholderTextColor={'#BBB'}
                  style={[styles.input]}
                  onSubmitEditing={handleSubmit(handleLogin)}
                />
              )}
              name="password"
            />
          </View>
          <View style={loginButtonContainerStyle}>
            <Button
              disabled={isLoggingIn}
              text="Skapa konto"
              style={{marginBottom: 10, paddingVertical: 16, borderWidth: 0}}
              onPress={handleSubmit(handleLogin)}
              variant={'primary'}
            />
            {initializing && (
              <View>
                <ActivityIndicator size="large" color="#00ff00" />
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View>
        <View style={[topSectionStyle, {alignSelf: 'center'}]}>
          <PPText
            style={{
              color: '#2b2b2b',
            }}>
            Information
          </PPText>
          <PPText
            style={[
              {
                paddingTop: 10,
                fontSize: 16,
                fontWeight: '500',
              },
            ]}>
            Om du inte har Bank-ID kan du skapa ett konto med e-post och
            lösenord.
          </PPText>
        </View>
      </View>
    </View>
  );
};

export default LoginEmailPassword;
