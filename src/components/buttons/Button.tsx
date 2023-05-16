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
  borderStyle,
  textStyle,
}) => {
  const backgroundColors = {
    primary: ['#00FFFF', '#17C8FF', '#329BFF'],
    secondary: ['#4CAF50', '#4CAF50'],
    ghost: ['transparent', 'transparent'],
    link: ['transparent', 'transparent'],
  };
  const borderColors = {
    primary: '#17C8FF',
    secondary: '#4CAF50',
    ghost: 'transparent',
    link: 'transparent',
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
        style={[
          borderStyle,
          styles.border,
          {borderColor: borderColors[variant]},
        ]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    minWidth: 100,
    maxHeight: 45,
  },

  primary: {
    backgroundColor: '#2196F3',
  },
  secondary: {
    backgroundColor: '#4CAF50',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#2196F3',
  },
  text: {
    color: '#2f2f2f',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Commissioner-Bold',
  },
  border: {
    borderRadius: 26,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: 'white',
    flexShrink: 1,
  },
});

export default Button;
