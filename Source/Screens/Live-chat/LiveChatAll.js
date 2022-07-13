/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
//import liraries
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import imagePath from '../../Constants/imagePath';
import React, {useEffect, useRef, useState} from 'react';
import MainNavigationString from '../../Constants/MainNavigationString';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const LiveChatAll = ({route}) => {
  const {width} = useWindowDimensions();
  const animation = useRef(null);
  const windowWidth = Dimensions.get('window').width;
  const Navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={{backgroundColor: '#000', flex: 1}}>
            <Animatable.View
              style={
                windowWidth > 700 ? styles.CardRowWidscreen : styles.CardRow
              }
              animation="slideInDown">
              <View style={styles.CardContent}>
                <View style={{position: 'relative'}}>
                  <Image
                    style={
                      windowWidth > 700
                        ? styles.cardCoverImgWithScreen
                        : styles.cardCoverImg
                    }
                    source={imagePath.profilePost}
                  />
                </View>

                {/* <View style={{position: 'relative'}}>
                  <ImageBackground
                    style={styles.background}
                    source={imagePath.profilePost}>
                    <View></View>
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
                      <View style={styles.learningRow}>
                        <View style={styles.singleLearningStyle}>
                          <Image source={imagePath.clock} />
                        </View>
                        <View style={styles.singleLearningStyle}>
                          <Text style={styles.text}>Day</Text>
                          <Text style={styles.text}>{leading0(days)}</Text>
                        </View>
                        <View style={styles.singleLearningStyle}>
                          <Text style={styles.text}>Hrs</Text>
                          <Text style={styles.text}>{leading0(hours)}</Text>
                        </View>
                        <View style={styles.singleLearningStyle}>
                          <Text style={styles.text}>Min</Text>
                          <Text style={styles.text}>{leading0(minutes)}</Text>
                        </View>
                        <View style={styles.singleLearningStyle}>
                          <Text style={styles.text}>Sec</Text>
                          <Text style={styles.text}>{leading0(seconds)}</Text>
                        </View>
                      </View>
                    </LinearGradient>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        backgroundColor: '#00000099',
                      }}></View>
                  </ImageBackground>
                </View> */}

                <View style={{marginVertical: 10}}>
                  <Text
                    style={{
                      color: '#ddd',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Shakib
                  </Text>
                  <Text style={styles.time1}>5:32 July 2022</Text>
                </View>

                <View>
                  <Text style={{color: '#ddd'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    repudiandae cum atque quam, cumque sequi aut perferendis
                    facilis hic at, est, ut voluptatum tenetur! Modi, quis!
                    Soluta, voluptatum,
                  </Text>
                </View>

                <View style={styles.btnView}>
                  <TouchableOpacity
                    style={styles.touchableOpacityBtn}
                    // onPress={
                    //   typeName === 'Rejected'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           ,
                    //         )
                    //     : typeName === 'Approved QA'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.VOICECALLLIST,
                    //           ,
                    //         )
                    //     : typeName === 'Live Chat List'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.VOICECALLLIST,
                    //           ,
                    //         )
                    //     : typeName === 'Completed Greeting'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           ,
                    //         )
                    //     : typeName === 'Pending Greeting'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.PENDINGSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : typeName === 'Completed Live'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : typeName === 'Pending Live'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.PENDINGSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : typeName === 'Pending QA'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.PENDINGSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : typeName === 'COMPLETESCHEDULE'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : null
                    // }
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                      }}>
                      {/* <FontAwesome name="eye" size={16} color="#000" /> */}
                      <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                          width: 20,
                          // height: 40,
                          // backgroundColor: '#ff0',
                        }}
                        source={imagePath.view}
                      />
                      <Text
                        style={{
                          marginHorizontal: 3,
                          fontWeight: 'bold',
                          color: '#000',
                        }}>
                        View
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View />
              </View>
            </Animatable.View>
          </View>
          <View style={{backgroundColor: '#000', flex: 1}}>
            <Animatable.View
              style={
                windowWidth > 700 ? styles.CardRowWidscreen : styles.CardRow
              }
              animation="slideInDown">
              <View style={styles.CardContent}>
                <View style={{position: 'relative'}}>
                  <Image
                    style={
                      windowWidth > 700
                        ? styles.cardCoverImgWithScreen
                        : styles.cardCoverImg
                    }
                    source={imagePath.profilePost}
                  />
                </View>

                <View style={{marginVertical: 10}}>
                  <Text
                    style={{
                      color: '#ddd',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Shakib
                    {/*  */}
                  </Text>
                  <Text style={styles.time1}>5:32 July 2022</Text>
                </View>

                <View>
                  <Text style={{color: '#ddd'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    repudiandae cum atque quam, cumque sequi aut perferendis
                    facilis hic at, est, ut voluptatum tenetur! Modi, quis!
                    Soluta, voluptatum,
                  </Text>
                </View>

                <View style={styles.btnView}>
                  <TouchableOpacity
                    style={styles.touchableOpacityBtn}
                    // onPress={
                    //   typeName === 'Rejected'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           ,
                    //         )
                    //     : typeName === 'Approved QA'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.VOICECALLLIST,
                    //           ,
                    //         )
                    //     : typeName === 'Live Chat List'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.VOICECALLLIST,
                    //           ,
                    //         )
                    //     : typeName === 'Completed Greeting'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           ,
                    //         )
                    //     : typeName === 'Completed Live'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : typeName === 'Pending QA'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.PENDINGSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : typeName === 'COMPLETESCHEDULE'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : null
                    // }
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                          width: 20,
                          // height: 40,
                          // backgroundColor: '#ff0',
                        }}
                        source={imagePath.view}
                      />
                      <Text
                        style={{
                          marginHorizontal: 3,
                          fontWeight: 'bold',
                          color: '#000',
                        }}>
                        View
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View />
              </View>
            </Animatable.View>
          </View>
          <View style={{backgroundColor: '#000', flex: 1}}>
            <Animatable.View
              style={
                windowWidth > 700 ? styles.CardRowWidscreen : styles.CardRow
              }
              animation="slideInDown">
              <View style={styles.CardContent}>
                <View style={{position: 'relative'}}>
                  <Image
                    style={
                      windowWidth > 700
                        ? styles.cardCoverImgWithScreen
                        : styles.cardCoverImg
                    }
                    source={imagePath.profilePost}
                  />
                </View>

                <View style={{marginVertical: 10}}>
                  <Text
                    style={{
                      color: '#ddd',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Shakib
                    {/*  */}
                  </Text>
                  <Text style={styles.time1}>5:32 July 2022</Text>
                </View>

                <View>
                  <Text style={{color: '#ddd'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    repudiandae cum atque quam, cumque sequi aut perferendis
                    facilis hic at, est, ut voluptatum tenetur! Modi, quis!
                    Soluta, voluptatum,
                  </Text>
                </View>

                <View style={styles.btnView}>
                  <TouchableOpacity
                    style={styles.touchableOpacityBtn}
                    // onPress={
                    //   typeName === 'Approved QA'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.VOICECALLLIST,
                    //           ,
                    //         )
                    //     : typeName === 'Live Chat List'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.VOICECALLLIST,
                    //           ,
                    //         )
                    //     : typeName === 'Completed Greeting'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           ,
                    //         )
                    //     : typeName === 'Completed Live'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : typeName === 'Pending QA'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.PENDINGSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : typeName === 'COMPLETESCHEDULE'
                    //     ? () =>
                    //         Navigation.navigate(
                    //           MainNavigationString.COMPLETEDSCHEDULE,
                    //           {
                    //             typeName,
                    //           },
                    //         )
                    //     : null
                    // }
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                          width: 20,
                          // height: 40,
                          // backgroundColor: '#ff0',
                        }}
                        source={imagePath.view}
                      />
                      <Text
                        style={{
                          marginHorizontal: 3,
                          fontWeight: 'bold',
                          color: '#000',
                        }}>
                        View
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View />
              </View>
            </Animatable.View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topContainer: {
    flex: 1.5,
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    minHeight: 300,
  },
  postContainer: {
    flex: 2,
    backgroundColor: 'rgb(37, 37, 37)',
  },
  banner: {
    flex: 2,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFAD00',
    minHeight: 70,
  },
  bannerImage: {
    height: '100%',
  },
  profileImageContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    height: 5,
  },
  postNavigator: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70,
  },
  ProfileOption: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProfileItem: {
    width: '23%',
    backgroundColor: '#282828',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileItemActive: {
    width: '23%',
    backgroundColor: '#FFAD00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileItemText: {
    fontSize: 11,
    paddingTop: 5,
    color: 'white',
  },
  ProfileItemTextActive: {
    fontSize: 11,
    paddingTop: 5,
    color: '#171717',
  },
  proImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FFAD00',
  },

  roundImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    // borderWidth: 1,
    // borderColor: '#FFAD00'
  },
  title: {
    fontSize: 19,
    color: 'white',
    // color: '#00000'
  },
  active: {
    color: '#FFAD00',
  },
  CardRow: {
    margin: 10,
    //marginHorizontal: 80,
  },
  CardRowWidscreen: {
    margin: 10,
    marginHorizontal: 90,
  },
  MainCard: {
    padding: 5,
    backgroundColor: '#343434',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  CardContent: {
    padding: 5,
    backgroundColor: '#343434',
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  cardText: {
    color: 'white',
    paddingLeft: 5,
    fontSize: 15,
    marginTop: 3,
  },
  cardImg: {
    justifyContent: 'center',
  },
  starCardImg: {
    height: 34,
    width: 34,
    borderRadius: 50,
  },
  cardContentText: {
    color: 'white',
    paddingLeft: 5,
    fontSize: 13,
  },
  time: {
    fontSize: 12,
    margin: 0,
    paddingLeft: 5,
    color: '#AEAEAE',
  },
  cardCoverImg: {
    height: 180,
    width: '100%',
    borderRadius: 10,
    marginVertical: 4,
  },
  cardCoverImgWithScreen: {
    height: 400,
    width: '100%',
    borderRadius: 10,
    marginVertical: 4,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 4,
    backgroundColor: '#474747',
    marginTop: 9,
    borderRadius: 3,
  },
  likeBtn: {
    //backgroundColor: '#FFAD00',
    borderRadius: 50,
    marginVertical: 3,
  },
  btnText: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: 'black',
    fontSize: 13,
  },
  cardInfo: {
    marginHorizontal: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    color: 'white',
    fontSize: 13,
    margin: 3,
    marginTop: 4,
  },
  icon: {
    marginHorizontal: 10,
  },

  lessText: {
    height: 90,
    overflow: 'hidden',
    color: '#ddd',
  },

  // Meet up cards
  mainMeetUpView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.9,
  },
  meetupBtn: {
    backgroundColor: '#FFAD00',
    justifyContent: 'center',
    margin: 3,
    paddingHorizontal: 5,
    borderRadius: 3,
    paddingVertical: 5,
  },
  meetupTxt: {
    color: 'brown',
    fontWeight: 'bold',
  },

  // Learn Card
  LearnCardRow: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#FFAD00',
  },
  LearnCoverImg: {
    height: 180,
    width: '100%',
    borderRadius: 5,
  },
  mainLearnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingVertical: 12,
    backgroundColor: 'black',
    opacity: 1,
  },

  LearnBtn: {
    backgroundColor: 'green',
    justifyContent: 'center',
    margin: 3,
    paddingHorizontal: 10,
    borderRadius: 3,
    paddingVertical: 5,
  },
  LearnTxt: {
    color: 'white',
    fontWeight: 'bold',
  },

  LearnFooter: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  TimeHead: {
    backgroundColor: '#FDFFCF',
    position: 'absolute',
    margin: 5,
    flexDirection: 'row',
    borderRadius: 5,
  },
  TimeText: {
    color: '#ED9B52',
    margin: 5,
    paddingEnd: 5,
  },

  LearnTimeImg: {
    height: 20,
    width: 20,
    borderRadius: 5,
    margin: 5,
  },

  // Upcoming Audition

  BannerCardImg: {
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // cardCoverImg:{
  //     position: 'relative',
  // },
  TextBanner: {
    fontSize: 20,
    color: '#F6EA45',
    fontWeight: 'bold',
    paddingVertical: 3,
  },

  BannerCs: {
    position: 'absolute',
    backgroundColor: '#00000099',
    borderRadius: 10,
    paddingHorizontal: 5,
    // opacity: 0.80,
    borderWidth: 1,
    borderColor: '#024E8C',
    top: '50%',
    left: '25%',
    flexDirection: 'row',
  },

  BannerCsText: {
    color: '#FDDC00',
    paddingTop: 12,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },

  SText: {
    paddingHorizontal: 2,
    paddingVertical: 5,
  },

  starCardImgA: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },

  mainMeetUpViewA: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.9,
  },

  BannerCse: {
    backgroundColor: '#00000099',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#024E8C',
    flexDirection: 'row',
  },
  BannerCseText: {
    color: '#FDDC00',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touchableOpacityBtn: {
    backgroundColor: '#00ffff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: 90,
    textAlign: 'center',
  },
  bannerTitle: {
    margin: 8,
    backgroundColor: '#343434',
    padding: 8,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  singleLearningStyle: {
    backgroundColor: '#000',
    borderRadius: 100,
    paddingHorizontal: 11,
    paddingVertical: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,

    // padding: 10,
  },
  linearGradient: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  learningRow: {
    flexDirection: 'row',
    padding: 4,
  },
  roundOneText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  roundText: {
    backgroundRadius: 50,
  },
  resizeImage: {
    // width: 50h
    height: 40,
  },
  listParent: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#343434',
    padding: 5,
    borderRadius: 20,
  },
  listParentCopy: {
    // flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: '#343434',
    padding: '8%',
    borderRadius: 20,
  },
  onLeft: {
    flex: 1,
  },
  participationText: {
    color: '#ffad00',
    fontSize: 17,
  },
  middleOne: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  onRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textColor: {
    color: '#ddd',
    textAlign: 'center',
  },
  textColorCenter: {
    textAlign: 'center',
    color: '#ddd',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    backgroundColor: '#000000',
  },
  imageBg: {
    flexDirection: 'row',
  },
  imageBgStyle: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    height: 100,
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: 'gold',
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeBgColor: {
    borderRadius: 50,
    padding: 10,
    margin: 5,
    position: 'absolute',
    left: '70%',
  },
  background: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
    borderWidth: 0,
    borderRadius: 15,
    overflow: 'hidden',
  },
  textCenter: {
    backgroundColor: 'rgba(196, 196, 196, 0.78)',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  textTitle: {
    flexDirection: 'row',
    fontSize: 15,
    alignItems: 'center',
    height: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
  },
  time1: {
    color: '#ffad00',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default LiveChatAll;
