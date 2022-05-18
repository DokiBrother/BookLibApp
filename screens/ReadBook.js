import React, {Component} from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images, bookData } from '../constants';
import {Platform} from 'react-native';
import PSPDFKitView from 'react-native-pspdfkit';

const DOCUMENT =
  Platform.OS === "ios"
    ? "book1.pdf"
    : "file:///android_asset/bookContent/book1.pdf";


const ReadBook = ({route, navigation}) => {

  const [book, setBook] = React.useState(null);

  // React.useEffect(() => {
  //   let { book } = route.params;
  //   setBook(book)
  // }, [book])

  const pdfView = React.createRef(null);

  return (
    <PSPDFKitView
      document={DOCUMENT}
      configuration={{
        showThumbnailBar: "scrollable",
        pageTransition: "scrollContinuous",
        scrollDirection: "vertical",
      }}
      ref = {pdfView}
      fragmentTag="PDF1"
      style={{ flex: 1 }}
		/>
  );
}

export default ReadBook;