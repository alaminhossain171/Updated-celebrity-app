/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../../Constants/imagePath';
import navigationStrings from '../../../Constants/navigationStrings';

const MeetupOnline = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#000'}}>
        <View style={styles.superStarHome}>
          <TouchableOpacity
            style={styles.singleContent}
            onPress={() =>
              navigation.navigate(navigationStrings.MEETUPUPCOMING)
            }>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#e7a825', '#e7c233', '#ffad00']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Upcoming Session</Text>
            </LinearGradient>
            <Image
              source={imagePath.UpcomingSession}
              style={styles.postImage}
            />
            <Text style={styles.TextColor}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(navigationStrings.MEETUPPENDINGSESSION)
            }
            style={styles.singleContent}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#e7a825', '#e7c233', '#ffad00']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Pending Session</Text>
            </LinearGradient>
            <Image source={imagePath.PendingMeetup} style={styles.postImage} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#000',
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#232323',
    borderRadius: 10,
    paddingBottom: 8,
  },
  superStarHome: {
    flexDirection: 'row',
    padding: 5,
  },
  postImage: {
    width: 85,
    height: 85,
    margin: '15%',
  },
  postImageX: {
    width: 100,
    height: 85,
    margin: '15%',
  },

  linearGradient: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  },
  singleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#ff0',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',

    paddingVertical: 8,
  },
  TextColor: {
    color: 'white',
    position: 'absolute',
    top: 55,
    right: 35,
    backgroundColor: 'red',
    textAlign: 'center',
    paddingTop: 8,
    width: 35,
    borderRadius: 100,
    height: 35,
    fontWeight: 'bold',
  },
});

export default MeetupOnline;
