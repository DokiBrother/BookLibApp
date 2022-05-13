import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const FindBook = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
            <Text style={{color: COLORS.white}}>Search Book</Text>
        </SafeAreaView>
    );
}

export default FindBook;