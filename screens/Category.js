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
        <View style={{height: 1, width: '100%', backgroundColor: COLORS.primary}}>
        </View>
    )
}

const Category = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.chooseCate}>Category</Text>
            <LineDivider/>
                <TouchableOpacity style={styles.cateButton} onPress={() => navigation.navigate('ActionBook')}>
                    <ImageBackground
                        source={{uri: 'https://reactjs.org/logo-og.png'}}
                        resizeMode='cover'
                        style={{flex: 1, justifyContent: 'center'}}
                        backgroundColor='rgba(123, 166, 237, 0.8)'
                    >
                        <Text style={styles.cateButtonText}>Action</Text>
                    </ImageBackground>
                </TouchableOpacity>
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
        marginTop: 30,
        alignSelf: 'center'
    },
    cateButtonText: {
        fontSize: 28,
        fontWeight: '500',
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
})

export default Category;