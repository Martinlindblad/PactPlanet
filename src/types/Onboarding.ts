import {SvgProps} from 'react-native-svg';

export interface OnboardingSlide {
  slide: number;
  title: string;
  description: string;
  visual: React.FC<SvgProps>;
}
