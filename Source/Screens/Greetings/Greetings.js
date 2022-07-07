/* eslint-disable prettier/prettier */
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
import React from 'react';
import imagePath from '../../Constants/imagePath';
import MainNavigationString from '../../Constants/MainNavigationString';

const Greetings = () => {
  const Navigation = useNavigation();

  return (
    <>
    <ScrollView style={{backgroundColor: '#000', padding: 8}}>
        <View style={styles.container}>
          <View style={styles.superStarHome}>
            <TouchableOpacity style={styles.singleContent} onPress={() => Navigation.navigate(MainNavigationString.GREETINGSALL)}>
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

            <TouchableOpacity style={styles.singleContent} onPress={() => Navigation.navigate(MainNavigationString.GREETINGSAPPROVED)}>
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
            <TouchableOpacity style={styles.singleContent} onPress={() => Navigation.navigate(MainNavigationString.GREETINGSPENDING)}>
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
                <Text style={styles.buttonText}>Pending</Text>
              </LinearGradient>
              <Image source={imagePath.Pending} style={styles.postImage} />
             <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.singleContent} onPress={() => Navigation.navigate(MainNavigationString.GREETINGSCOMPLETED)}>
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
                <Text style={styles.buttonText}>Completed</Text>
              </LinearGradient>
              <Image
                source={imagePath.Completed}
                style={styles.postImage}
              />
             <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>
          </View> 

          <View style={styles.superStarHome}>
            <TouchableOpacity style={styles.singleContent} onPress={() => Navigation.navigate(MainNavigationString.GREETINGSREGISTERED)}>
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
                <Text style={styles.buttonText}>Registered List</Text>
              </LinearGradient>
              <Image source={imagePath.Completed} style={styles.postImage} />
             <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.singleContent} onPress={() => Navigation.navigate(MainNavigationString.GREETINGSFORWARD)}>
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
                <Text style={styles.buttonText}>Froward To User</Text>
              </LinearGradient>
              <Image
                source={imagePath.Rejected}
                style={styles.postImage}
              />
             <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>
          </View> 

          <View style={styles.superStarHome}>
            <TouchableOpacity style={styles.singleContent} onPress={() => Navigation.navigate(MainNavigationString.GREETINGSEVALUATION)}>
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
                style={styles.linearGradient} >
                <Text style={styles.buttonText}>Evaluation</Text>
              </LinearGradient>
              <Image source={imagePath.Post} style={styles.postImage} />
             <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleContent} onPress={() => Navigation.navigate(MainNavigationString.GREETINGSCREATE)} >
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
                <Text style={styles.buttonText}>Create</Text>
              </LinearGradient>
              <Image source={imagePath.Post} style={styles.postImage} />
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


export default Greetings;
