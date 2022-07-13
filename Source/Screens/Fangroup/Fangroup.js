/* eslint-disable prettier/prettier */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../Dashboard/StylesHome'
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../Constants/imagePath';
import MainNavigationString from '../../Constants/MainNavigationString';


const Fangroup = () => {
  const Navigation = useNavigation();

  return (
   <>
    <ScrollView style={{backgroundColor: '#000', padding: 8}}>
        <View style={styles.container}>
          <View style={styles.superStarHome}>
            <TouchableOpacity style={styles.singleContent} onPress={()=>Navigation.navigate(MainNavigationString.ALLDATAFANGROUP)} >
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[
                  '#FFAD00',
                  '#FFD273',
                  '#E19A04',
                  '#FACF75',
                  '#E7A725',
                  '#FFAD00',
                ]}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>All</Text>
              </LinearGradient>
              <Image source={imagePath.All} style={styles.postImage} />
             <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.singleContent} onPress={()=>Navigation.navigate(MainNavigationString.ACCEPTED)} >
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}} 
                colors={[
                  '#FFAD00',
                  '#FFD273',
                  '#E19A04',
                  '#FACF75',
                  '#E7A725',
                  '#FFAD00',
                ]}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Approved</Text>
              </LinearGradient>
              <Image
                source={imagePath.Approved}
                style={styles.postImage}
              />
             <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.superStarHome}>
            <TouchableOpacity style={styles.singleContent} onPress={()=>Navigation.navigate(MainNavigationString.INVITATION)} >
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[
                  '#FFAD00',
                  '#FFD273',
                  '#E19A04',
                  '#FACF75',
                  '#E7A725',
                  '#FFAD00',
                ]}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Invitation</Text>
              </LinearGradient>
              <Image source={imagePath.Pending} style={styles.postImage} />
             <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleContent} onPress={()=>Navigation.navigate(MainNavigationString.REJECTED)}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[
                  '#FFAD00',
                  '#FFD273',
                  '#E19A04',
                  '#FACF75',
                  '#E7A725',
                  '#FFAD00',
                ]}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Rejected</Text>
              </LinearGradient>
              <Image source={imagePath.Rejected} style={styles.postImage} />
             <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>
         
          </View> 

      

        </View>
    </ScrollView>
   </>
  );
};


export default Fangroup;
