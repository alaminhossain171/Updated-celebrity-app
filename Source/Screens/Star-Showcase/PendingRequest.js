import { useNavigation } from '@react-navigation/native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import imagePath from '../../Constants/imagePath';

const PendingRequest = () => {
  return (
    <>
        <ScrollView style={{ backgroundColor: '#000' }}>
        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.Right}>

            <View style={styles.Marketplace}>
                <Text style={styles.TextTi}>MarketPlace</Text>
              </View>

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
              <View style={{ width: '80%',marginTop:5, }}>
                <Text style={{ color:'white' }}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </Text>
                
              </View>

              <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={styles.Box}>
                  <Image source={imagePath.Box} />
                  <Text style={styles.Count}> 400</Text>
                </View>
                <View style={styles.Box}>
                  <Image source={imagePath.Count} />
                  <Text style={styles.Count}> $150</Text>
                </View>
                <View style={styles.Box}>
                  <Image source={imagePath.Sold} />
                  <Text style={styles.Count}> $420</Text>
                </View>
                <TouchableOpacity style={styles.Delete}>
                  <Image source={imagePath.Delete} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#e7a825', '#e7c233', '#ffad00']}
                    style={styles.Confirm}>
                    <Text style={styles.TextBold}>Confirm</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.Right}>

              <View style={styles.Auction}>
                <Text style={styles.TextTi}>Auction</Text>
              </View>
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
              <View style={{ width: '80%',marginTop:5, }}>
              <Text style={{ color:'white' }}>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </Text>
                
              </View>

              <View style={{ flexDirection: 'row', width: '100%',marginBottom:10, }}>
                <View style={styles.Box}>
                  <Image source={imagePath.Box} />
                  <Text style={styles.Count}> 400</Text>
                </View>
                <View style={styles.Box}>
                  <Image source={imagePath.Count} />
                  <Text style={styles.Count}> $150</Text>
                </View>
                <View style={styles.Box}>
                  <Image source={imagePath.Sold} />
                  <Text style={styles.Count}> $420</Text>
                </View>
                <TouchableOpacity style={styles.Delete}>
                  <Image source={imagePath.Delete} />
                </TouchableOpacity>
              </View>
            </View>

          </View>

          <View style={styles.Bottom}>

            <View >
                <View
                  style={styles.CardView}>
                  <View>
                    <Image source={imagePath.Calender} style={{ margin: 8, }} />
                  </View>
                  <View>
                    <Text style={styles.DateTime}>Last Date</Text>
                    <Text style={styles.DateT}>21st November </Text>
                  </View>
                </View>
            </View>

            <View>
                <View
                  style={styles.CardView}>
                  <View>
                    <Image source={imagePath.Clock} style={{ margin: 8, }} />
                  </View>
                  <View>
                    <Text style={styles.DateTime}>Time</Text>
                    <Text style={styles.DateT}>11:00 PM</Text>
                  </View>
                </View>
            </View>

            <View>
              <TouchableOpacity>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#e7a825', '#e7c233', '#ffad00']}
                  style={styles.Button3}>
                  <Text style={styles.TextBold1}>Confirm</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default PendingRequest

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#272727',
    margin: 8,
    marginTop:10,
    marginBottom:0,
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
    flexDirection: 'row',
    backgroundColor: '#111111',
    borderRadius: 8,
    height: 30,
    marginHorizontal: 2.5,
    marginTop: 10,
    width: '38%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
  DateTime: {
    color: 'white',
  },
  DateT: {
    color: 'white',
    fontSize: 10,
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
            marginTop:-10,
  }

});