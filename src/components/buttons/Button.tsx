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
import LinearGradient from 'react-native-linear-gradient';

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
    primary: ['#5368A2', '#5368A2'],
    secondary: ['#E18E6F', '#E18E6F'],
    ghost: ['transparent', 'transparent'],
    link: ['#49C789', '#49C789'],
  };

  const buttonStyles = [styles.button, styles[variant], style];

  return (
    <Pressable
      {...buttonProps}
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [
        {opacity: pressed || disabled ? 0.8 : 1},
        buttonStyles,
      ]}>
      <LinearGradient
        colors={backgroundColors[variant]}
        start={{x: 0.0, y: 0.5}}
        end={{x: 1.0, y: 0.5}}
        style={styles.gradient}>
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
    height: 45,
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
  gradient: {
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Commissioner-Bold',
    textAlign: 'center',
  },
});

export default Button;
