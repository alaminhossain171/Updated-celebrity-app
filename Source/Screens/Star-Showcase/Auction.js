//import liraries
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../Dashboard/StylesHome'
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../Constants/imagePath';
import MainNavigationString from '../../Constants/MainNavigationString';

// create a component
const Auction = () => {
  const Navigation = useNavigation();
  return (
     <>
      <ScrollView style={{backgroundColor: '#000', padding: 8}}>
    <View style={styles.container}>
      <View style={styles.superStarHome}>
        <TouchableOpacity style={styles.singleContent} onPress={()=> Navigation.navigate(MainNavigationString.AUCTIONSOLDPRODUCT)}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[ '#FFAD00' , '#FFD273' , '#E19A04'
            , '#FACF75' , '#E7A725' , '#FFAD00' , ]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Sold Product</Text>
          </LinearGradient>
          <Image source={imagePath.Sold} style={styles.postImage} />
          <Text style={styles.badge}>
            <Text style={styles.badgeT}>20</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.singleContent} onPress={()=>
          Navigation.navigate(MainNavigationString.AUCTIONLIVEBIDDING)}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[ '#FFAD00' , '#FFD273' , '#E19A04'
            , '#FACF75' , '#E7A725' , '#FFAD00' , ]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Live Bidding</Text>
          </LinearGradient>
          <Image source={imagePath.LiveBidding} style={styles.postImage} />
          <Text style={styles.badge}>
            <Text style={styles.badgeT}>20</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.superStarHome}>
        <TouchableOpacity style={styles.singleContent} onPress={()=>
          Navigation.navigate(MainNavigationString.AUCTIONADDPRODUCT)}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[ '#FFAD00' , '#FFD273' , '#E19A04'
            , '#FACF75' , '#E7A725' , '#FFAD00' , ]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Add Product</Text>
          </LinearGradient>
          <Image source={imagePath.Create} style={styles.postImage} />
          {/* <Text style={styles.badge}>
            <Text style={styles.badgeT}>20</Text>
          </Text> */}
        </TouchableOpacity>

      </View>

      

    </View>
  </ScrollView>


         </>
  );
};

export default Auction;
