import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import imagePath from '../../Constants/imagePath';
import {Image} from 'react-native';
import MainNavigationString from '../../Constants/MainNavigationString';

const InvitationCard = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{margin: 10}}>
        <Text style={styles.headerTitle}>INVITATION</Text>
        <View style={styles.view1}>
          <View
            style={{
              width: '40%',
              borderRightColor: '#DAA520',
              borderRightWidth: 1,
            }}>
            <Image source={imagePath.Kat} style={styles.imgStyle} />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 15}}>Katrina Kaif</Text>

            <Text style={{color: 'white', fontSize: 15}}>
              Bollywood Actress
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#1A1A1A',
            paddingVertical: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: '#DAA520',
              fontWeight: 'bold',
              fontSize: 18,
              marginLeft: 10,
            }}>
            Katrina Vs Deepika
          </Text>

          <Text style={styles.fonts}>
            1. Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <Text style={styles.fonts}>
            2. Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <Text style={styles.fonts}>
            3. Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <Text style={styles.fonts}>
            4. Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <Text style={styles.fonts}>
            5. Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#1A1A1A',
            paddingVertical: 10,
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <View
            style={{
              borderWidth: 0,
              borderColor: 'white',
              padding: 10,
              borderRadius: 15,
              alignItems: 'center',
            }}>
            <Text style={{color: '#DAA520', fontSize: 17}}>
              Septembar 22 To Octobar 28
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.Buttons}>
              <Text style={{color: 'gold'}}>IGNORE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buttons} onPress={()=>navigation.navigate(MainNavigationString.EDITINVITATION)}>
              <Text style={{color: 'gold'}}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buttons2}>
              <Text style={{color: 'white'}}>ACCEPTED</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InvitationCard;

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    color: '#DAA520',
    fontSize: 25,
    fontWeight: 'bold',
  },
  view1: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-around',
    backgroundColor: '#1A1A1A',
    paddingVertical: 10,
    borderRadius: 10,
  },
  imgStyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#DAA520',
  },
  fonts: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 10,
    marginVertical: 10,
  },
  Buttons: {
    borderColor: '#DAA520',
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    width: '25%',
  },
  Buttons2: {
    backgroundColor: '#DAA520',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    width: '25%',
  },
});
