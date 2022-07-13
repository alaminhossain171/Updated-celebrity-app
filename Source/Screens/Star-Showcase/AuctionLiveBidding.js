import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import imagePath from '../../Constants/imagePath';

// import imagePath from '../Constants/imagePath';

export default function AuctionLiveBidding() {
  const Navigation = useNavigation();
  return (
    <>
      <ScrollView style={{backgroundColor: '#000'}}>
        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.Right}>
              <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                width={120}>
                <Image source={imagePath.SoldT} style={styles.postImage} />
                <Image source={imagePath.Footbal} style={styles.postImage} />
                <Image source={imagePath.Shoes} style={styles.postImage} />
              </SwiperFlatList>
            </View>
            <View style={styles.Left}>
              <Text style={styles.Text}>Cricket Jersey</Text>
              <Text style={styles.Date}> Released at 12-12-2021</Text>
              <View style={{width: '80%', marginTop: 5}}>
                <Text style={{color: 'white'}}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <View style={styles.CardView}>
                    <View>
                      <Image source={imagePath.Calender} style={styles.ImGC} />
                    </View>
                    <View>
                      <Text style={styles.DateTime}>Last Date</Text>
                      <Text style={styles.DateT}>21st November </Text>
                    </View>
                  </View>
                  <View style={styles.CardView}>
                    <View>
                      <Image source={imagePath.Calender} style={styles.ImGC} />
                    </View>
                    <View>
                      <Text style={styles.DateTime}>Last Date</Text>
                      <Text style={styles.DateT}>21st November </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.CardBlack}>
              <View style={styles.flexUnit}>
                <Image style={styles.boxStyle} source={imagePath.Box} />
              </View>
              <View style={styles.flexUnitBold}>
                <Text style={{color: '#ddd'}}>Units</Text>
              </View>
              <View style={styles.flexUnitTwo}>
                <Text style={{color: '#ddd', fontWeight: 'bold', fontSize: 16}}>
                  02
                </Text>
              </View>
            </View>
            <View style={styles.CardBlack}>
              <View style={styles.flexUnit}>
                <Image style={styles.boxStyle} source={imagePath.Count} />
              </View>
              <View style={styles.flexUnitBold}>
                <Text style={{color: '#ddd'}}>Units</Text>
              </View>
              <View style={styles.flexUnitTwo}>
                <Text style={{color: '#ddd', fontWeight: 'bold', fontSize: 16}}>
                  $120
                </Text>
              </View>
            </View>
            <View style={styles.CardBlack}>
              <View style={styles.flexUnit}>
                <Image style={styles.boxStyle} source={imagePath.Count} />
              </View>
              <View style={styles.flexUnitBold}>
                <Text style={{color: '#ddd'}}>Maximum Bit Price</Text>
              </View>
              <View style={styles.flexUnitTwo}>
                <Text style={{color: '#ddd', fontWeight: 'bold', fontSize: 16}}>
                  $310
                </Text>
              </View>
            </View>
            <View style={styles.CardBlack}>
              <View style={styles.flexUnit}>
                <Image style={styles.boxStyle} source={imagePath.UserP} />
              </View>
              <View style={styles.flexUnitBold}>
                <Text style={{color: '#ddd'}}>Total Bit</Text>
              </View>
              <View style={styles.flexUnitTwo}>
                <Text style={{color: '#ddd', fontWeight: 'bold', fontSize: 16}}>
                  117
                </Text>
              </View>
            </View>
          </View>

          {/* <View>
            <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop width={120}>
              <Image source={imagePath.SoldT}  />
              <Image source={imagePath.Footbal} />
              <Image source={imagePath.Shoes} />
            </SwiperFlatList>
          
          </View> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#111111',
              margin: 8,
            }}>
            <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop width={210}>
              <View style={styles.CardViewA}>
                <View>
                  <Image source={imagePath.FirstAvatar} style={styles.ImGCar} />
                </View>
                <View>
                  <Text style={styles.Dollar}>$160</Text>
                  <Text style={styles.DateTime}>Alam Uddin</Text>
                  <Text style={styles.DateTZ}>18-12-2021 5:40PM </Text>
                </View>
              </View>
              <View style={styles.CardViewA}>
                <View>
                  <Image source={imagePath.FirstAvatar} style={styles.ImGCar} />
                </View>
                <View>
                  <Text style={styles.Dollar}>$160</Text>
                  <Text style={styles.DateTime}>Alam Uddin</Text>
                  <Text style={styles.DateTZ}>18-12-2021 5:40PM </Text>
                </View>
              </View>
              <View style={styles.CardViewA}>
                <View>
                  <Image source={imagePath.FirstAvatar} style={styles.ImGCar} />
                </View>
                <View>
                  <Text style={styles.Dollar}>$160</Text>
                  <Text style={styles.DateTime}>Alam Uddin</Text>
                  <Text style={styles.DateTZ}>18-12-2021 5:40PM </Text>
                </View>
              </View>
              <View style={styles.CardViewA}>
                <View>
                  <Image source={imagePath.FirstAvatar} style={styles.ImGCar} />
                </View>
                <View>
                  <Text style={styles.Dollar}>$160</Text>
                  <Text style={styles.DateTime}>Alam Uddin</Text>
                  <Text style={styles.DateTZ}>18-12-2021 5:40PM </Text>
                </View>
              </View>
              <View style={styles.CardViewA}>
                <View>
                  <Image source={imagePath.FirstAvatar} style={styles.ImGCar} />
                </View>
                <View>
                  <Text style={styles.Dollar}>$160</Text>
                  <Text style={styles.DateTime}>Alam Uddin</Text>
                  <Text style={styles.DateTZ}>18-12-2021 5:40PM </Text>
                </View>
              </View>
            </SwiperFlatList>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  boxStyle: {
    // width: 30,
  },
  avatarImageStyle: {
    borderRadius: 100,
    width: 50,
    height: 50,
    marginRight: 5,
  },
  ImGC: {
    margin: 8,
  },
  avatarStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarParentView: {
    flexDirection: 'row',
    backgroundColor: '#212121',
    margin: 10,
    padding: 5,
    width: 175,
  },
  flexUnitBold: {
    flex: 10,
    padding: 5,
  },
  flexUnitTwo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 2,
    padding: 5,
  },
  flexUnit: {
    flex: 1,
    padding: 5,
  },
  CardBlack: {
    backgroundColor: '#121212',
    padding: 5,
    flexDirection: 'row',
    margin: 10,
    marginBottom: 1,
    borderRadius: 5,
  },
  Container: {
    backgroundColor: '#272727',
    margin: 8,
    marginTop: 10,
    marginBottom: 0,
    borderRadius: 10,
  },
  Row: {
    flexDirection: 'row',
  },
  postImage: {
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  Right: {
    margin: 8,
  },

  Left: {
    margin: 8,
    marginLeft: 0,
  },

  Text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  Date: {
    // fontSize:30,
    color: '#999999',
  },
  Edit: {
    backgroundColor: 'gold',
    width: '100%',
  },
  postImage: {
    borderRadius: 5,
    marginTop: 20,
    flex: 1,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  Box: {
    flexDirection: 'row',
    backgroundColor: '#111111',
    borderRadius: 8,
    height: 30,
    marginHorizontal: 2.5,
    marginTop: 10,
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Delete: {
    flexDirection: 'row',
    backgroundColor: '#fff9',
    borderRadius: 8,
    height: 29,
    marginHorizontal: 2.5,
    marginTop: 10,
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Confirm: {
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  TextBold: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  Count: {
    color: 'white',
    fontWeight: 'bold',
  },

  input: {
    color: '#fff9',
    backgroundColor: '#272727',
    marginBottom: -10,
  },
  Button3: {
    width: 110,
    marginHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
    paddingTop: 8,
    height: 40,
    marginBottom: 20,
  },
  TextBold1: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  CardView: {
    flexDirection: 'row',
    width: 110,
    marginHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
    paddingTop: 4,
    height: 40,
    backgroundColor: '#111111',
    marginBottom: 20,
  },
  CardViewA: {
    flexDirection: 'row',
    width: 140,
    marginHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
    paddingTop: 4,
    marginVertical: 8,
    height: 64,
    paddingBottom:5,
    backgroundColor: '#212121',
  },
  ImGCar: {
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  DateTime: {
    color: 'white',
  },
  Dollar: {
    color: '#ff0',
    fontSize: 20,
    fontWeight: 'bold',
  },
  DateT: {
    color: 'white',
    fontSize: 10,
    color: '#FFEB7F',
  },
  DateTZ: {
    color: 'white',
    fontSize: 8,
    color: '#FFEB7F',
  },
  Marketplace: {
    width: 110,
    marginHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
    paddingTop: 12,
    height: 40,
    textAlign: 'center',
    backgroundColor: '#7A673F',
  },
  Auction: {
    width: 110,
    marginHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
    paddingTop: 12,
    height: 40,
    textAlign: 'center',
    backgroundColor: '#317066',
  },
  TextTi: {
    color: 'white',
    textAlign: 'center',
  },
  Bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    alignItems: 'center',
    marginTop: -10,
  },
});
