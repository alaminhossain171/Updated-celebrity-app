/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';

import styles from '../Dashboard/StylesHome';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../Constants/imagePath';

import {useNavigation} from '@react-navigation/native';
import MainNavigationString from '../../Constants/MainNavigationString';
const Learning = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={{backgroundColor: '#000', padding: 8}}>
        <View style={styles.container}>
          <View style={styles.superStarHome}>
            <TouchableOpacity
              style={styles.singleContent}
              onPress={() =>
                navigation.navigate(MainNavigationString.VIEWCARD, {
                  typeName: 'LearningDashboard',
                })
              }>
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

            <TouchableOpacity
              style={styles.singleContent}
              onPress={() =>
                navigation.navigate(MainNavigationString.REUSEAPPROVED, {
                  typeName: 'LearningApproved',
                })
              }>
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
              <Image source={imagePath.Approved} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.superStarHome}>
            <TouchableOpacity
              style={styles.singleContent}
              onPress={() =>
                navigation.navigate(MainNavigationString.VIEWCARD, {
                  typeName: 'LearningPending',
                })
              }>
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

            <TouchableOpacity style={styles.singleContent}
               onPress={() => navigation.navigate(MainNavigationString.VIEWCARD, {typeName: 'LearningRejected'})}
            >
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

          <View style={styles.superStarHome}>
            <TouchableOpacity style={styles.singleContent}
               onPress={() => navigation.navigate(MainNavigationString.VIEWCARD, {typeName: 'LearningCompleted'})}
            >
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
              <Image source={imagePath.Completed} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.singleContent}
               onPress={() => navigation.navigate(MainNavigationString.VIEWCARD, {typeName: 'LearningResult'})}
            >
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
                <Text style={styles.buttonText}>Result</Text>
              </LinearGradient>
              <Image source={imagePath.Rejected} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.superStarHome}>
            <TouchableOpacity style={styles.singleContent}
               onPress={() => navigation.navigate(MainNavigationString.VIEWCARD, {typeName: 'LearningEvaluation'})}
            >
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
                <Text style={styles.buttonText}>Evaluation</Text>
              </LinearGradient>
              <Image source={imagePath.Post} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleContent}
               onPress={() => navigation.navigate(MainNavigationString.CREATEFORM, {typeName: 'CreateLearning'})}
            >
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

export default Learning;
