import React, {FunctionComponent} from 'react';

import {Text} from '@rneui/base';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CheckBox} from '@rneui/themed';
import {GoogleIcon} from '../../../assets/icons';
import {
  AuthHeader,
  BigButton,
  InputCustom,
  SmallButton,
} from '../../../components';
import Header from '../../../components/customs/Headers';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions} from '../../../redux/reducer';
import useStyles from './styles';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import { AlertActions } from '../../../redux/reducer/alert.reducer';

const SignIn: FunctionComponent = () => {
  const styles = useStyles();

  // const showToast = () => {
  //   Toast.show({
  //     type: 'tomatoToast',
  //     props: {uuid: 'bba1a7d0-6ab2-4a0a-a76e-ebbe05ae6d70'},
  //   });
  // };

  const toggleCheckbox = () => setChecked(!checked);

  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
  }>({
    email: 'p3nhox99@gmail.com',
    password: '123456',
  });

  const [checked, setChecked] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleSignIn = async () => {
    dispatch(
      AuthActions.handleLogin({
        email: credentials.email,
        password: credentials.password,
        device_token: '1234567890',
      }),
    );
  };



  const onPress = () => {
    dispatch(
        AlertActions.setDataAlert({
            title: 'Logout',
            description: 'Are you sure you want to logout?',
            onAccept: () => {
                console.log('hio')
            },
        })
    );

    // dispatch(LoadingActions.showLoading());
};

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
            <Header
              leftIcon={true}
              onPressLeftIcon={() => {
                Keyboard.dismiss();
                if (NavigationService.canGoBack()) {
                  NavigationService.goBack();
                  return;
                }
                NavigationService.navigate(routes.LOBBY);
              }}
            />
            <AuthHeader
              title="Login 🔐"
              subTitle="Please enter your email and password to sign in."
            />

            <View style={styles.formContainer}>
              <Text style={styles.titleInput}>email</Text>
              <InputCustom
                placeholder="Enter your email"
                value={credentials.email}
                onChangeText={text =>
                  setCredentials({...credentials, email: text})
                }
              />
              <Text style={styles.titleInput}>Password</Text>
              <InputCustom
                placeholder="Enter your password"
                secure={true}
                value={credentials.password}
                onChangeText={text =>
                  setCredentials({...credentials, password: text})
                }
              />
              <View style={styles.checkbox}>
                <CheckBox
                  checked={checked}
                  textStyle={styles.textCheckbox}
                  onPress={toggleCheckbox}
                  title={'Remember me'}
                />
              </View>
              <View style={styles.textView}>
                <Text style={[styles.titleInput, styles.color]}>
                  Forgot Password
                </Text>
                <Text style={styles.textNor}>or continue with</Text>
              </View>
              <View style={styles.optionView}>
                <SmallButton svgIcon={<GoogleIcon />} nameIcon="" />
                <SmallButton
                  nameIcon="logo-facebook"
                  typeIcon="ionicon"
                  isIonicons
                  onPressButton={() => {
                    onPress();
                  }
                  }
                />
              </View>
              <View style={styles.bottom}>
                <BigButton
                  textButton="Sign In"
                  onPressButton={() => {
                    handleSignIn();
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;
