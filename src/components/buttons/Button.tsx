import React, {FC} from 'react';
import {Pressable, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'link';

interface ButtonProps {
  variant: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  text: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({variant, style, text, onPress}) => {
  const buttonStyles = [styles.button, styles[variant], style];

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, buttonStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  primary: {
    backgroundColor: '#2196F3',
  },
  secondary: {
    backgroundColor: '#4CAF50',
  },
  link: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
