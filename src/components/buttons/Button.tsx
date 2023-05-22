import {LinearGradient} from 'expo-linear-gradient';
import React, {FC} from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  PressableProps,
  TextStyle,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'link' | 'ghost';

interface ButtonProps {
  variant: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  borderStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  onPress: () => void;
  buttonProps?: PressableProps;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant,
  style,
  text,
  onPress,
  buttonProps,
  disabled,

  textStyle,
}) => {
  const backgroundColors = {
    primary: ['#C3CBDC', '#FFF', '#C3CBDC'],
    secondary: ['#F9D29D', '#FFF', '#F9D29D'],
    ghost: ['transparent', 'transparent'],
    link: ['#cff27e', '#FFF', '#cff27e'],
  };

  const buttonStyles = [styles.button, styles[variant], style];

  return (
    <Pressable
      {...buttonProps}
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, buttonStyles]}>
      <LinearGradient
        colors={backgroundColors[variant]}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.5}}
        style={{borderRadius: 20, paddingHorizontal: 20, paddingVertical: 8}}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    minWidth: 100,
    maxHeight: 45,
    paddingHorizontal: 20,
  },

  primary: {},
  secondary: {},
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
  },
  text: {
    color: '#2f2f2f',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Commissioner-Bold',
    textAlign: 'center',
  },
});

export default Button;
