import React, { useState, useEffect, useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { BookDetail, ReadBook } from "./screens/";
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Tabs from "./navigation/tabs";
import TabGuest from './navigation/tabGuest';
import ForgotPassword from './screens/ForgotPassword';

import auth from '@react-native-firebase/auth';
import FindBook from './screens/FindBook';
import ActionBook from './constants/ActionBook';
import ChangePassword from './screens/ChangePassword';
import Setting from './screens/Setting';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {

    // const {user, setUser} = useContext(AuthContext);
    // const [initializing, setInitializing] = React.useState(true);

    // const onAuthStateChanged = (user) => {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, []);

    // if (initializing) return null;



    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

        return (
            <NavigationContainer theme={theme}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Login'}
                >
                    {user == null ? (
                        <>
                            {/* Tabs */}
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="SignUp" component={SignUp} />
                            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                        </>
                    ):(
                        <>
                            {/* Screens */}
                            <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
                            <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
                            <Stack.Screen name="ReadBook" component={ReadBook} options={{ headerShown: false }} />
                            <Stack.Screen name="ActionBook" component={ActionBook} options={{ headerShown: false }} />
                            <Stack.Screen name="FindBook" component={FindBook} options={{ headerShown: false }} />
                            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
                            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
                            
                        </>
                    )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        )

}

export default App;