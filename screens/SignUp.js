import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import auth from '@react-native-firebase/auth';
import SignInWithGoogle from '../service/SignInWithGoogle';

const SignUp = ({navigation}) => {

  const [namecalled, onChangeNameCalled] = React.useState();
  const [email, onChangeEmail] = React.useState(null);
  const [pass, onChangePass] = React.useState(null);
  const [confirmPass, onChangeConfirmPass] = React.useState(null);


  const SignUpMethod = () => {
    auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(() => {
        auth().currentUser.updateProfile({
            displayName: namecalled,
            photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        });
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        }
        console.error(error);
    });
    // auth().currentUser.sendEmailVerification
}

    return (
        <SafeAreaView style={styles.container}>
          
            <Image style={styles.logo} source={require('../assets/icons/logoBookLibrary.png')} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.loginText}>Register</Text>
              <TextInput
                  placeholder='Your name'
                  placeholderTextColor='#808e9b'
                  style={styles.input}
                  autoCorrect={true}
                  value={namecalled}
                  onChangeText={onChangeNameCalled}
              />
              <TextInput
                  placeholder='Your student ID'
                  placeholderTextColor='#808e9b'
                  style={styles.input}
                  autoCorrect={true}
              />
              <TextInput
                  placeholder='Email Address'
                  placeholderTextColor='#808e9b'
                  style={styles.input}
                  autoCorrect={true}
                  autoCompleteType='email'
                  keyboardType='email-address'
                  textContentType='emailAddress'
                  value={email}
                  onChangeText={onChangeEmail}
              />
              <TextInput
                  placeholder='Password'
                  placeholderTextColor='#808e9b'
                  style={styles.input}
                  secureTextEntry={true}
                  textContentType='password'
                  value={pass}
                  onChangeText={onChangePass}
              />
              <TextInput
                  placeholder='Confirm Password'
                  placeholderTextColor='#808e9b'
                  style={styles.input}
                  secureTextEntry={true}
                  textContentType='password'
                  value={confirmPass}
                  onChangeText={onChangeConfirmPass}
              />
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.fpText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={SignUpMethod}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
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
              <Text style={styles.signUpText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login') }>
                  <Text style={[styles.signUpText, { color: COLORS.primary }]}>
                  {' Login '}
                  </Text>
              </TouchableOpacity>
              </View>
            </ScrollView>
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