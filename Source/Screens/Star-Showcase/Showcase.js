/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styles from '../Dashboard/StylesHome'
import {
Image,
ScrollView,
Text,
TouchableOpacity,
View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../Constants/imagePath';
import MainNavigationString from '../../Constants/MainNavigationString';

const StarShowcase = () => {
  const Navigation = useNavigation();
return (
<>
  <ScrollView style={{backgroundColor: '#000', padding: 8}}>
    <View style={styles.container}>
      <View style={styles.superStarHome}>
        <TouchableOpacity style={styles.singleContent} onPress={()=> Navigation.navigate(MainNavigationString.AUCTION)}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[ '#FFAD00' , '#FFD273' , '#E19A04'
            , '#FACF75' , '#E7A725' , '#FFAD00' , ]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Auction</Text>
          </LinearGradient>
          <Image source={imagePath.Auction} style={styles.postImage} />
          <Text style={styles.badge}>
            <Text style={styles.badgeT}>20</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.singleContent} onPress={()=>
          Navigation.navigate(MainNavigationString.MARKETPLACE)}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[ '#FFAD00' , '#FFD273' , '#E19A04'
            , '#FACF75' , '#E7A725' , '#FFAD00' , ]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>MarketPlace</Text>
          </LinearGradient>
          <Image source={imagePath.MarketPlace} style={styles.postImage} />
          <Text style={styles.badge}>
            <Text style={styles.badgeT}>20</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.superStarHome}>
        <TouchableOpacity style={styles.singleContent} onPress={()=>
          Navigation.navigate(MainNavigationString.PENDINGREQUEST)}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[ '#FFAD00' , '#FFD273' , '#E19A04'
            , '#FACF75' , '#E7A725' , '#FFAD00' , ]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Pending Request</Text>
          </LinearGradient>
          <Image source={imagePath.Pending} style={styles.postImage} />
          <Text style={styles.badge}>
            <Text style={styles.badgeT}>20</Text>
          </Text>
        </TouchableOpacity>

      </View>

      

    </View>
  </ScrollView>
</>
)
}

export default StarShowcase