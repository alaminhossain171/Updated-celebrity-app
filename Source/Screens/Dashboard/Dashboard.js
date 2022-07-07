/* eslint-disable prettier/prettier */

import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../Constants/imagePath';
import {useNavigation} from '@react-navigation/native';
import MainNavigationString from '../../Constants/MainNavigationString';

function Dashboard() {
  const Navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ContainerCard}>
        <View style={styles.Main}>
          <View>
            <TouchableOpacity
              style={styles.Card}
              onPress={() => Navigation.navigate(MainNavigationString.POST)}>
              <Image source={imagePath.Post} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text>2</Text>
              </Text>
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
                <Text style={styles.buttonText}>Post</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
            onPress={()=>Navigation.navigate(MainNavigationString.LIVECHAT)}
             style={styles.Card}>
              <Image source={imagePath.LiveChat} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text style={styles.badgeT}>20</Text>
              </Text>
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
                <Text style={styles.buttonText}>Live Chat</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Main}>
          <View>
            <TouchableOpacity style={styles.Card}
            onPress={()=>Navigation.navigate(MainNavigationString.AUDITION)}>
              <Image source={imagePath.Auditions} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text>2</Text>
              </Text>
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
                <Text style={styles.buttonText}>Auditions</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.Card}
            onPress={()=>Navigation.navigate(MainNavigationString.STARSHOWCASE)}
            >
              <Image source={imagePath.StarShowcase} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text>2</Text>
              </Text>
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
                <Text style={styles.buttonText}>Star Showcase</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Main}>
          <View>
            <TouchableOpacity onPress={()=>Navigation.navigate(MainNavigationString.LEARNING)} style={styles.Card}>
              <Image source={imagePath.Learning} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text>2</Text>
              </Text>
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
                <Text style={styles.buttonText}>Learning</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.Card}
            onPress={()=>Navigation.navigate(MainNavigationString.LIVE)}
            >
              <Image source={imagePath.Live} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text>2</Text>
              </Text>
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
                <Text style={styles.buttonText}>Live</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Main}>
          <View>
            <TouchableOpacity style={styles.Card}
            
            onPress={()=>Navigation.navigate(MainNavigationString.MEETUP)}
            >
              <Image source={imagePath.Meetup} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text>2</Text>
              </Text>
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
                <Text style={styles.buttonText}>Meetup</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.Card}
             onPress={()=>Navigation.navigate(MainNavigationString.GREETINGS)}
            >
              <Image source={imagePath.Greeting} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text>2</Text>
              </Text>
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
                <Text style={styles.buttonText}>Greeting</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Main}>
          <View>
            <TouchableOpacity style={styles.Card}
             onPress={()=>Navigation.navigate(MainNavigationString.QNA)}
            >
              <Image source={imagePath.QnA} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text>2</Text>
              </Text>
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
                <Text style={styles.buttonText}>Q&A</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.Card}
             onPress={()=>Navigation.navigate(MainNavigationString.FANGROUP)}
            >
              <Image source={imagePath.FanGroup} style={styles.postImage} />
              <Text style={styles.badge}>
                <Text>2</Text>
              </Text>
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
                <Text style={styles.buttonText}>Fan Group</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Dashboard;
