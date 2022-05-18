import { BackgroundImage } from "@rneui/base";
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
    StyleSheet,
    Alert
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const LineDivider = () => {
    return (
        <View style={{height: 1, width: '100%', backgroundColor: COLORS.primary, marginBottom: 20}}>
        </View>
    )
}

const Category = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <Text style={styles.chooseCate}>Category</Text>
                <LineDivider/>

                    {/* Action */}
                    <TouchableOpacity style={styles.cateButton} onPress={() => navigation.navigate('ActionBook')}>
                        <ImageBackground
                            source={require('../assets/images/cateBG/action.png')}
                            resizeMode='cover'
                            style={styles.cateBG}
                        >   
                            <View style={[styles.cateOverlay, {backgroundColor: 'rgba(201, 81, 44, 0.7)'}]} >
                                <Text style={styles.cateButtonText}>Action</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    {/* Adventure */}
                    <TouchableOpacity style={styles.cateButton} onPress={() => navigation.navigate('ActionBook')}>
                        <ImageBackground
                            source={require('../assets/images/cateBG/adventure.jpg')}
                            resizeMode='cover'
                            style={styles.cateBG}
                        >   
                            <View style={[styles.cateOverlay, {backgroundColor: 'rgba(64, 172, 239, 0.7)'}]} >
                                <Text style={styles.cateButtonText}>Adventure</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    {/* Comedy */}
                    <TouchableOpacity style={styles.cateButton} onPress={() => navigation.navigate('ActionBook')}>
                        <ImageBackground
                            source={require('../assets/images/cateBG/comedy.jpg')}
                            resizeMode='cover'
                            style={styles.cateBG}
                        >   
                            <View style={[styles.cateOverlay, {backgroundColor: 'rgba(165, 170, 0, 0.7)'}]} >
                                <Text style={styles.cateButtonText}>Comedy</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    
                    {/* Drama */}
                    <TouchableOpacity style={styles.cateButton} onPress={() => navigation.navigate('ActionBook')}>
                        <ImageBackground
                            source={require('../assets/images/cateBG/drama.png')}
                            resizeMode='cover'
                            style={styles.cateBG}
                        >   
                            <View style={[styles.cateOverlay, {backgroundColor: 'rgba(72, 47, 36, 0.7)'}]} >
                                <Text style={styles.cateButtonText}>Drama</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    {/* Horror */}
                    <TouchableOpacity style={styles.cateButton} onPress={() => navigation.navigate('ActionBook')}>
                        <ImageBackground
                            source={require('../assets/images/cateBG/horror.jpg')}
                            resizeMode='cover'
                            style={styles.cateBG}
                        >   
                            <View style={[styles.cateOverlay, {backgroundColor: 'rgba(34, 50, 52, 0.7)'}]} >
                                <Text style={styles.cateButtonText}>Horror</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    {/* Slide of Life */}
                    <TouchableOpacity style={styles.cateButton} onPress={() => navigation.navigate('ActionBook')}>
                        <ImageBackground
                            source={require('../assets/images/cateBG/slideoflife.jpg')}
                            resizeMode='cover'
                            style={styles.cateBG}
                        >   
                            <View style={[styles.cateOverlay, {backgroundColor: 'rgba(90, 127, 5, 0.7)'}]} >
                                <Text style={styles.cateButtonText}>Slide of Life</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    {/* Document */}
                    <TouchableOpacity style={styles.cateButton} onPress={() => navigation.navigate('ActionBook')}>
                        <ImageBackground
                            source={require('../assets/images/cateBG/document.jpg')}
                            resizeMode='cover'
                            style={styles.cateBG}
                        >   
                            <View style={[styles.cateOverlay, {backgroundColor: 'rgba(140, 46, 0, 0.7))'}]} >
                                <Text style={styles.cateButtonText}>Document</Text>
                            </View>
                        </ImageBackground>
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
    cateButton: {
        height: 150,
        width: '100%',
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 5,
        alignSelf: 'center'
    },
    cateButtonText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fafafa',
        alignSelf: 'center',
    },
    chooseCate: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center'
    },
    cateBG: {
        flex: 1,
        justifyContent: "center",
        position: 'relative'
    },
    cateOverlay: {
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,

    }
})

export default Category;