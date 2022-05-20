import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Linking,
    StyleSheet,
    Alert,
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import onShare from "../constants/shareApp";
import auth from '@react-native-firebase/auth';
import SignInWithGoogle from "../service/SignInWithGoogle";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const LineDivider = () => {
    return (
        <View style={{height: 1, width: '100%', backgroundColor: COLORS.primary}}>
        </View>
    )
}

const LineDivider2 = () => {
  return (
      <View style={{height: 1, width: '100%', backgroundColor: COLORS.white}}>
      </View>
  )
}

const Setting = ({navigation}) => {

    // firebase log out
    const LogOut = () => {
      auth()
      .signOut()
      GoogleSignin.signOut()
    }

    // const signOutGoogle = async () => {
    //   try {
    //     await GoogleSignin.signOut();
    //     this.setState({ user: null });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.headerSetting}>Setting</Text>
            <LineDivider/>

            <View style={{width: '90%', alignSelf: 'center'}}>
                <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('ChangePassword') } >
                  <View style={styles.chooseButton} >
                    <Text style={{...FONTS.body2, color: COLORS.white}}>Change password</Text>
                    <Image
                      source={icons.edit_icon}
                      resizeMode='contain'
                      style={styles.iconImg}
                    />
                  </View>
                  <LineDivider2/>
                </TouchableOpacity>
            
              
              <TouchableOpacity style={{marginTop: 20}} onPress={onShare}>
                <View style={styles.chooseButton} >
                  <Text style={{...FONTS.body2, color: COLORS.white}}>Share</Text>
                  <Image
                    source={icons.share_icon}
                    resizeMode='contain'
                    style={styles.iconImg}
                  />
                </View>
                <LineDivider2/>
              </TouchableOpacity>

              <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => 
                  Linking.openURL('mailto:tuando.contact@gmail.com?subject=Customer Feedback&body=Write down your feedback here!')} >

                <View style={styles.chooseButton} >
                  <Text style={{...FONTS.body2, color: COLORS.white}}>Feedback</Text>
                  <Image
                    source={icons.feedback_icon}
                    resizeMode='contain'
                    style={styles.iconImg}
                  />
                </View>
                <LineDivider2/>
              </TouchableOpacity>

              <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => Linking.openURL('tel:+84979046630')}
              >
                <View style={styles.chooseButton} >
                  <Text style={{...FONTS.body2, color: COLORS.white}}>Call us</Text>
                  <Image
                    source={icons.call_icon}
                    resizeMode='contain'
                    style={styles.iconImg}
                  />
                </View>
                <LineDivider2/>
              </TouchableOpacity>
              
                <TouchableOpacity
                  style={{marginTop: 20}}
                  onPress={LogOut}
                >
                  <View style={styles.chooseButton} >
                    <Text style={{...FONTS.body2, color: COLORS.white}}>Sign out</Text>
                    <Image
                      source={icons.exit_icon}
                      resizeMode='contain'
                      style={styles.iconImg}
                    />
                  </View>
                  <LineDivider2/>
                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/Book-Library-Application-113200274468283/?notif_id=1653006980874395&notif_t=page_name_change_admin&ref=notif') } >
              <Image style={styles.logo} source={require('../assets/icons/logoBookLibrary.png')} />
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: COLORS.black
    },
    headerSetting: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center'
    },
    chooseButton: {
      marginVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'

    },
    iconImg: {
      width: 25, 
      height: 25,
      tintColor: COLORS.white,
      alignSelf: 'center'
    },
    logo: {
      marginTop: 20,
      height: 150,
      width: 150,
      alignSelf: 'center',
      resizeMode: 'contain'
    },
})

export default Setting;