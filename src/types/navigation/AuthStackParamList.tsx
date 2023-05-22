import {ParamListBase} from '@react-navigation/native';

export interface AuthStackParamList extends ParamListBase {
  LoginWithBankID?: never;
  LoginWithOtherMethod?: never;
  LoginEmailPassword?: never;
  Timeout?: never;
  Login?: never;
  CreateAccountEmailPassword?: never;
  Home?: never;
  Register?: never;
}
