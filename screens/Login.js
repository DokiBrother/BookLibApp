import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import auth from '@react-native-firebase/auth';
import SignInWithGoogle from '../service/SignInWithGoogle';

const Login = ({navigation}) => {

  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const SignInWithMail = () => {
    auth()
    .signInWithEmailAndPassword(email, pass)
    .catch(error => {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            setErrorMsg('Incorrect username or password.');
        }
        console.log(error);
    })
  }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor= {COLORS.black}
                hidden={false}
            />
            <Image style={styles.logo} source={require('../assets/icons/logoBookLibrary.png')} />
            <Text style={styles.loginText}>Login</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder='Email Address'
                placeholderTextColor='#808e9b'
                style={styles.input}
                autoCorrect={true}
                autoCapitalize={false}
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress'
            />
            <TextInput
                value={pass}
                onChangeText={setPass}
                placeholder='Password'
                placeholderTextColor='#808e9b'
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
            />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.fpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={SignInWithMail}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginButtonText}>Login as Guest</Text>
        </TouchableOpacity>
            <View style={styles.loginWithBar}>
            <TouchableOpacity style={styles.iconButton} onPress={SignInWithGoogle} >
              <Image style={styles.icons} source={require('../assets/icons/google-plus.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image style={styles.icons} source={require('../assets/icons/facebook.png')} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image style={styles.icons} source={require('../assets/icons/twitter.png')} />  
            </TouchableOpacity>
            </View>
            <View style={styles.signUpTextView}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={[styles.signUpText, { color: COLORS.primary }]}>
                {' Sign Up'}
                </Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,
      paddingHorizontal: 20,
      backgroundColor: COLORS.black
    },
    welcomeText: {
      fontSize: 30,
      fontWeight: '900',
      color: '#fff',
      alignSelf: 'center',
    },
    loginText: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#333',
      borderRadius: 6,
      marginTop: 10,
      paddingHorizontal: 10,
      fontSize: 16,
      color: 'white',
    },
    fpText: {
      alignSelf: 'flex-end',
      color: COLORS.primary,
      fontSize: 18,
      fontWeight: '600',
      marginTop: 10,
    },
    loginButton: {
      backgroundColor: COLORS.primary,
      paddingVertical: 12,
      borderRadius: 6,
      marginTop: 20,
    },
    loginButtonText: {
      fontSize: 20,
      fontWeight: '500',
      color: '#fafafa',
      alignSelf: 'center',
    },
    loginWithBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 50,
    },
    iconButton: {
      backgroundColor: '#333',
      padding: 14,
      marginHorizontal: 10,
      borderRadius: 100,
    },
    signUpTextView: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    signUpText: {
      color: '#808e9b',
      fontSize: 20,
      fontWeight: '500',
    },
    logo: {
      marginTop: 20,
      height: 100,
      width: 100,
      position: 'absolute',
      alignSelf: 'center',
      resizeMode: 'contain'
    },
    icons: {
      color: COLORS.white,
      width: 30,
      height: 30,
      alignSelf: 'center',
    },
  });

export default Login;