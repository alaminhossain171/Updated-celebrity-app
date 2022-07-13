import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react'
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import imagePath from '../../Constants/imagePath';
import MainNavigationString from '../../Constants/MainNavigationString';
import {useNavigation} from '@react-navigation/native';


const MarketPlaceUnsoldProduct = () => {
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

              <View style={{flexDirection: 'row', width: '100%'}}>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Box} />
                  <Text style={styles.Count}> 400</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Count} />
                  <Text style={styles.Count}> $40</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Sold} />
                  <Text style={styles.Count}> 00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Available} />
                  <Text style={styles.Count}> 400</Text>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.EditBtn}onPress={()=>
          Navigation.navigate(MainNavigationString.EDITPRODUCT)}
                >
                  <Image source={imagePath.Edit} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.DeleteBtn}>
                  <Image source={imagePath.Delete} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.Right}>
              <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                width={120}>
                <Image source={imagePath.Shoes} style={styles.postImage} />
                <Image source={imagePath.Footbal} style={styles.postImage} />
                <Image source={imagePath.SoldT} style={styles.postImage} />
              </SwiperFlatList>
            </View>
            <View style={styles.Left}>
              <Text style={styles.Text}>Practice boot</Text>
              <Text style={styles.Date}> Released at 12-12-2021</Text>

              <View style={{flexDirection: 'row', width: '100%'}}>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Box} />
                  <Text style={styles.Count}> 400</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Count} />
                  <Text style={styles.Count}> $40</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Sold} />
                  <Text style={styles.Count}> 00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Available} />
                  <Text style={styles.Count}> 400</Text>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.EditBtn}onPress={()=>
          Navigation.navigate(MainNavigationString.EDITPRODUCT)}
                >
                  <Image source={imagePath.Edit} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.DeleteBtn}>
                  <Image source={imagePath.Delete} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.Right}>
              <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                width={120}>
                <Image source={imagePath.Footbal} style={styles.postImage} />
                <Image source={imagePath.SoldT} style={styles.postImage} />
                <Image source={imagePath.Shoes} style={styles.postImage} />
              </SwiperFlatList>
            </View>
            <View style={styles.Left}>
              <Text style={styles.Text}>Signature Football</Text>
              <Text style={styles.Date}> Released at 12-12-2021</Text>

              <View style={{flexDirection: 'row', width: '100%'}}>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Football} />
                  <Text style={styles.Count}> 400</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Count} />
                  <Text style={styles.Count}> $40</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Sold} />
                  <Text style={styles.Count}> 00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Available} />
                  <Text style={styles.Count}> 400</Text>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.EditBtn}onPress={()=>
          Navigation.navigate(MainNavigationString.EDITPRODUCT)}
                >
                  <Image source={imagePath.Edit} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.DeleteBtn}>
                  <Image source={imagePath.Delete} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default MarketPlaceUnsoldProduct

const styles = StyleSheet.create({
   Container: {
    backgroundColor: '#272727',
    margin: 8,
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
  Count: {
    color: 'white',
    fontWeight: 'bold',
  },

  EditBtn: {
    backgroundColor: '#F6B718',
    borderRadius: 8,
    height: 40,
    width: '35%',
    marginTop: 8,
    marginBottom: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DeleteBtn: {
    backgroundColor: '#C0C0C0',
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '35%',
  },
})