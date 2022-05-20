import React, {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    FlatList,
    Alert,
    StyleSheet,
    Modal,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images, bookData } from '../constants';
import auth from '@react-native-firebase/auth';

const LineDivider = () => {
    return (
        <View style={{height: 1, width: '90%', backgroundColor: COLORS.white, margin: 10, alignSelf: 'center'}}>
        </View>
    )
}

const Profile = ({navigation}) => {

    const [myBooks, setMyBooks] = React.useState(bookData.myBooksData);
    const [modalVisible, setModalVisible] = useState(false);

    const user = auth().currentUser;
    const [displayName, setDisplayName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const updateProfile = () => {
        if(displayName!=null){
          user.updateProfile({
            displayName: displayName
          })
        }
        if(email!=null){
          user.updateEmail(email)
        }
        // if(pass!=null && confirmPass!=null){
        //   user.updatePassword(pass)
        // }
        setModalVisible(!modalVisible)
        Alert.alert('Profile updated!')
    }

    function renderMyBookSection(myBooks) {
        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("BookDetail", {
                        book: item
                    })}
                >
                    {/* Book Cover */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 120,
                            height: 170,
                            borderRadius: 15
                        }}
                    />
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {/* Books */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <FlatList
                        data={myBooks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
            <View style={{flex: 1}}>

                {/* Show Profile Editor */}

                <View style={styles.modalCenteredView}>
                    <KeyboardAvoidingView style={{flex: 1}}>
                    <Modal
                        animationType="slide"
                        visible={modalVisible}
                        transparent={true}
                        onRequestClose={() => {
                        setModalVisible(!modalVisible);
                        }}
                    >
                            <View style={styles.modalView}>
                                <Text style={styles.editText}>Edit Profile</Text>
                                    <TextInput
                                        value={displayName}
                                        onChangeText={setDisplayName}
                                        placeholder='Your new name (optional)'
                                        placeholderTextColor='#808e9b'
                                        style={styles.input}
                                    />
                                    <TextInput
                                        value={email}
                                        onChangeText={setEmail}
                                        placeholder='New Email Address (optional)'
                                        placeholderTextColor='#808e9b'
                                        style={styles.input}
                                        autoCorrect={true}
                                        autoCapitalize={false}
                                        autoCompleteType='email'
                                        keyboardType='email-address'
                                        textContentType='emailAddress'
                                    />
                                    {/* <TextInput
                                        value={pass}
                                        onChangeText={setPass}
                                        placeholder='New Password (optional)'
                                        placeholderTextColor='#808e9b'
                                        style={styles.input}
                                        secureTextEntry={true}
                                        textContentType='password'
                                    />
                                    <TextInput
                                        placeholder='Confirm New Password (optional)'
                                        placeholderTextColor='#808e9b'
                                        style={styles.input}
                                        secureTextEntry={true}
                                        textContentType='password'
                                    /> */}
                                <View style={{marginVertical: 10}}></View>
                                <TouchableOpacity
                                    style={styles.updateButton}
                                    onPress={updateProfile}
                                >
                                    <Text style={styles.updateButtonText}>Update</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.updateButton}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.updateButtonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                    </Modal>
                    </KeyboardAvoidingView>
                </View>

                {/* Header Section */}

                <View style={{flex: 0.5, flexDirection: 'column-reverse'}}>
                    <ImageBackground
                        source={{ uri: user.photoURL }}
                        resizeMode='cover'
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        }}
                    />
                    {/* Color Overlay */}
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            backgroundColor: 'rgba(140, 47, 19, 0.2)'
                        }}
                    >
                      
                        <View style={{flex:1, marginLeft: 20, marginVertical: 20, flexDirection: 'column-reverse'}}>
                            <Text style={{color: COLORS.white, ...FONTS.h1}}>{user.displayName}</Text>
                            <Text style={{color: COLORS.white, ...FONTS.body2}}>UI/UX Designer</Text>
                            <Text style={{color: COLORS.white, ...FONTS.body2}}>Student</Text>
                        </View>
                    </View>

                    <View style={{ }}>
                        <TouchableOpacity style={{flexDirection: 'row-reverse'}} onPress={() => setModalVisible(true)}>
                            <Image
                                source={icons.edit_icon}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    margin: 20,
                                    tintColor: COLORS.white
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 5, width: '100%', backgroundColor: COLORS.primary, marginBottom: 10}}></View>

                <View style={{flex: 0.5}}>

                        {/* Home */}
                        <View style={styles.info}>
                            <Image
                                source={icons.school_icon}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: COLORS.white
                                }}
                            />
                            <Text style={{...FONTS.body3, color: COLORS.white, marginLeft: 10}} >VNU-IS</Text>
                        </View>
                        <LineDivider/>

                        {/* Contact */}
                        <View style={styles.info}>
                            <Image
                                source={icons.facebook_icon}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: COLORS.white
                                }}
                            />
                            <Text style={{...FONTS.body3, color: COLORS.white, marginLeft: 10}} >tuando.contact</Text>
                        </View>
                        <LineDivider/>
                        
                    <Text style={{...FONTS.h3, color: COLORS.white, alignSelf: 'center', marginTop: 5}}>BOOK OWNED</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        {renderMyBookSection(myBooks)}
                    </ScrollView>

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    info: {
        flexDirection: 'row',
        marginLeft: 20,
        marginVertical: 10,
    },
    modalView: {
        flex: 1,
        backgroundColor: COLORS.black,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginVertical: '40%',
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        position: 'absolute',
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 6,
        marginTop: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'white',
      },
      updateButton: {
        width: '80%',
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 15,
      },
      updateButtonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fafafa',
        alignSelf: 'center',
      },
      editText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
      },
})

export default Profile;