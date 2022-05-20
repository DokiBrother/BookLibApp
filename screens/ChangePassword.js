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
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import auth from '@react-native-firebase/auth';

  const ChangePassword = ({navigation}) => {

  const [pass, setPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const user = auth().currentUser;

  const updatePassword = () => {
    if(pass!=null && confirmPass!=null){
      user.updatePassword(pass)
    }
    Alert.alert('Your password has been reset')
    navigation.goBack()
  }



    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../assets/icons/logoBookLibrary.png')} />
            <Text style={styles.loginText}>Change Password</Text>
            <TextInput
                placeholder='Your new password'
                placeholderTextColor='#808e9b'
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
                value={pass}
                onChangeText={setPass}
            />
            <TextInput
                placeholder='Confirm new password'
                placeholderTextColor='#808e9b'
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
                value={confirmPass}
                onChangeText={setConfirmPass}
            />
            <TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={updatePassword} >
          <Text style={styles.loginButtonText}>Reset now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.goBack()} >
          <Text style={styles.loginButtonText}>Back</Text>
        </TouchableOpacity>

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
      alignSelf: 'flex-start',
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

export default ChangePassword;