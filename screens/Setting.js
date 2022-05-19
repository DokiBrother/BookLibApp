import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    Alert
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

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
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerSetting}>Setting</Text>
            <LineDivider/>

            <View style={{width: '90%', alignSelf: 'center'}}>

              <TouchableOpacity style={{marginTop: 20}}>
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

              
              <TouchableOpacity style={{marginTop: 20}}>
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

              <TouchableOpacity style={{marginTop: 20}}>
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

              <TouchableOpacity style={{marginTop: 20}}>
                <View style={styles.chooseButton} >
                  <Text style={{...FONTS.body2, color: COLORS.white}}>About us</Text>
                  <Image
                    source={icons.about_icon}
                    resizeMode='contain'
                    style={styles.iconImg}
                  />
                </View>
                <LineDivider2/>
              </TouchableOpacity>

            </View>
            <Image style={styles.logo} source={require('../assets/icons/logoBookLibrary.png')} />

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
      height: 200,
      width: 200,
      alignSelf: 'center',
      resizeMode: 'contain'
    },
})

export default Setting;