import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const SignUp = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../assets/icons/logoBookLibrary.png')} />
            <Text style={styles.loginText}>Register</Text>
            <TextInput
                placeholder='Email Address'
                placeholderTextColor='#808e9b'
                style={styles.input}
                autoCorrect={true}
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress'
            />
            <TextInput
                placeholder='Password'
                placeholderTextColor='#808e9b'
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
            />
            <TextInput
                placeholder='Confirm Password'
                placeholderTextColor='#808e9b'
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
            />
            <TouchableOpacity>
          <Text style={styles.fpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
            <View style={styles.loginWithBar}>
            <TouchableOpacity style={styles.iconButton}>
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
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login') }>
                <Text style={[styles.signUpText, { color: COLORS.primary }]}>
                {' Login '}
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
      color: '#808e9b',
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
    icons: {
      color: COLORS.white,
      width: 30,
      height: 30,
      alignSelf: 'center',
    },
    logo: {
      marginTop: 20,
      height: 100,
      width: 100,
      position: 'absolute',
      alignSelf: 'center',
      resizeMode: 'contain'
    }
  });

export default SignUp;