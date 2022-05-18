import React from "react";
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
    StyleSheet
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images, bookData } from '../constants';

const LineDivider = () => {
    return (
        <View style={{height: 1, width: '90%', backgroundColor: COLORS.white, margin: 10, alignSelf: 'center'}}>
        </View>
    )
}

const Profile = ({navigation}) => {

    const [myBooks, setMyBooks] = React.useState(bookData.myBooksData);

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
                            width: 80,
                            height: 100,
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

                {/* Header Section */}
                <View style={{flex: 0.5, flexDirection: 'column-reverse'}}>
                    <ImageBackground
                        source={require('../assets/images/cateBG/profile.jpg')}
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
                            <Text style={{color: COLORS.white, ...FONTS.h1}}>Đỗ Công Tuấn</Text>
                            <Text style={{color: COLORS.white, ...FONTS.body2}}>UI/UX Designer</Text>
                            <Text style={{color: COLORS.white, ...FONTS.body2}}>Student</Text>
                        </View>
                    </View>
                    <View style={{ }}>
                        <TouchableOpacity style={{flexDirection: 'row-reverse'}} onPress={() => Alert.alert('You edit Profile')}>
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
                                source={icons.location_icon}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: COLORS.white
                                }}
                            />
                            <Text style={{...FONTS.body3, color: COLORS.white, marginLeft: 10}} >Hải Phòng</Text>
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
    }
})

export default Profile;