import React from 'react';

import {
    CardStyleInterpolators,
    StackNavigationOptions,
    createStackNavigator,
} from '@react-navigation/stack';
import { routes } from '../../constants';
import { authScreen } from '../../screens/auth';
import { Screen } from '../../types';
import { onBroardScreens } from '../../screens/auth/onboard';



const AuthStack = createStackNavigator();

const authScreenapp: Screen[]=[
    ...authScreen,
    ...onBroardScreens
]

const screenOptions: StackNavigationOptions = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={screenOptions}
            initialRouteName={routes.ONBOARD1}
        >
            {authScreenapp.map((screen) => {
                return (
                    <AuthStack.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                    />
                );
            })}
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
