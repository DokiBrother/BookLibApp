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

const Category = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
            <Text style={{color: COLORS.white}}>Category</Text>
            <Text style={{color: COLORS.white}}>http://americastarbooks.com/2020/07/co-bao-nhieu-the-loai-sach/</Text>
        </SafeAreaView>
    );
}

export default Category;