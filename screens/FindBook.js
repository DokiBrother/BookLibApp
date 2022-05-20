import React, {useState, useEffect} from "react";
import {
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    Alert,
    StatusBar
} from 'react-native';
import { create } from "react-test-renderer";

import { COLORS, FONTS, SIZES, icons, images, bookData } from '../constants';

const FindBook = ({navigation}) => {
    
    const [filterData, setfilterData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [find, setFind] = useState('');

    useEffect(() => {
        fetchBook();
        return () => {

        }
    }, [])

    const fetchBook = () => {
        const apiURL = 'http://192.168.1.9:3000/post'
        fetch(apiURL)
        .then((respone) => respone.json())
        .then((responeJson) => {
            setfilterData(responeJson);
            setMasterData(responeJson);
        }).catch((error) => {
            console.error(error);
        })
    }

    const findFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.title ? item.title : '';
                const textData = text;
                return itemData.indexOf(textData) > -1;
            });
            setfilterData(newData);
            setFind(text);
        } else {
            setfilterData(masterData);
            setFind(text);
        }
    }

    const ItemView = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('ReadBook')}
            >
                <Text style={{ ...FONTS.h2, color: COLORS.white, padding: 15}}>
                    {item.id}{'. '}{item.title}
                </Text>
            </TouchableOpacity>
        )
    }
    
    const ItemSeparatorView = () => {
        return (
            <View style={{height: 1, width: '100%', backgroundColor: COLORS.gray2}}>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
            <StatusBar
                    animated={true}
                    backgroundColor= {COLORS.black}
                    hidden={false}
            />
            <View style={{flex: 1, margin: 15}}>
                <TextInput
                    value={find}
                    onChangeText={(text) => findFilter(text)}
                    placeholder='Searching book by name, author, genre'
                    placeholderTextColor='#808e9b'
                    style={styles.input}
                />
                <FlatList
                    data={filterData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
})

export default FindBook;