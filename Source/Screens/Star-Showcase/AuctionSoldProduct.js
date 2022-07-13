import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import imagePath from '../../Constants/imagePath';

export default function AuctionSoldProduct() {
//   const Navigation = useNavigation();
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
              <View style={{width: '80%'}}>
                <TextInput
                  style={styles.input}
                  textAlignVertical={'top'}
                  multiline={true}
                  autoCorrect
                  placeholderTextColor={'#fff9'}
                  placeholder="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
                />
              </View>

              <View style={{flexDirection: 'row', width: '100%'}}>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Box} />
                  <Text style={styles.Count}> 400</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Count} />
                  <Text style={styles.Count}> $150</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Sold} />
                  <Text style={styles.Count}> $420</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.UserP} />
                  <Text style={styles.Count}> 400</Text>
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
                <Image source={imagePath.SoldT} style={styles.postImage} />
                <Image source={imagePath.Footbal} style={styles.postImage} />
                <Image source={imagePath.Shoes} style={styles.postImage} />
              </SwiperFlatList>
            </View>
            <View style={styles.Left}>
              <Text style={styles.Text}>Cricket Jersey</Text>
              <Text style={styles.Date}> Released at 12-12-2021</Text>
              <View style={{width: '80%'}}>
                <TextInput
                  style={styles.input}
                  textAlignVertical={'top'}
                  multiline={true}
                  autoCorrect
                  placeholderTextColor={'#fff9'}
                  placeholder="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
                />
              </View>

              <View style={{flexDirection: 'row', width: '100%'}}>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Box} />
                  <Text style={styles.Count}> 400</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Count} />
                  <Text style={styles.Count}> $150</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.Sold} />
                  <Text style={styles.Count}> $420</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}>
                  <Image source={imagePath.UserP} />
                  <Text style={styles.Count}> 400</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

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
  Count: {
    color: 'white',
    fontWeight: 'bold',
  },

  input: {
    color: '#fff9',
    backgroundColor: '#272727',
    marginBottom: -10,
  },
});
