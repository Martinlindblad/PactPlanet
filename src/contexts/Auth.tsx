import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  useCallback,
} from 'react';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const Context = React.createContext<{
  initializing: boolean;
  signInWithEmailAndPassword: (params: {
    email: string;
    password: string;
  }) => void;
  createUserWithEmailAndPassword: (params: {
    email: string;
    password: string;
  }) => void;
  currentUser: FirebaseAuthTypes.User | null;
  signOut: () => void;
}>({
  signOut: () => Promise.reject(),
  initializing: true,
  signInWithEmailAndPassword: () => Promise.resolve(),
  createUserWithEmailAndPassword: () => Promise.resolve(),
  currentUser: firebase.auth().currentUser,
});

export type Auth = typeof Context extends React.Context<infer P> ? P : never;

export const useFirebaseUserAuth = (): Auth => useContext(Context);

export function Provider({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element {
  const [currentUser, setCurrentUser] = useState(firebase.auth().currentUser);
  const [initializing, setInitializing] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onAuthStateChanged(
    user: React.SetStateAction<FirebaseAuthTypes.User | null>,
  ) {
    setCurrentUser(user);
    if (initializing) setInitializing(false);
  }

  const signInWithEmailAndPassword = useCallback(
    ({email, password}: {email: string; password: string}) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    },
    [],
  );
  const createUserWithEmailAndPassword = useCallback(
    ({email, password}: {email: string; password: string}) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    },
    [],
  );

  const signOut = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }, []);

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  const authState = useMemo(
    () => ({
      currentUser,
      initializing,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      signOut,
    }),
    [
      createUserWithEmailAndPassword,
      currentUser,
      initializing,
      signInWithEmailAndPassword,
      signOut,
    ],
  );
  return <Context.Provider value={authState}>{children}</Context.Provider>;
}
