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

const ActionBook = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.chooseCate}>Action</Text>
            <LineDivider/>
            <TouchableOpacity style={styles.cateButton} onPress={() => navigation.goBack()}>
                <Text style={styles.cateButtonText}>Back</Text>
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
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 20,
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

export default ActionBook;