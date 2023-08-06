import {routes} from '../../constants';
import {Screen} from '../../types';
import CreateAccount from './create-account';
import SignIn from './sign-in';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: SignIn,
  },
  {
    name: routes.CREATE_ACCOUNT,
    component: CreateAccount,
  },
];
