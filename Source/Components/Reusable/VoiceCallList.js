/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import imagePath from '../../Constants/imagePath';
import MainNavigationString from '../../Constants/MainNavigationString';
const VoiceCallList = ({navigation, route}) => {
  let {typeName} = route.params;
  console.log('=======>', typeName);

  return (
    <View style={styles.container}>
      {/*............. top view started..........  */}
      <View style={styles.topView}>
        <TouchableOpacity
          style={{marginHorizontal: 5}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.scheduleView}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            {typeName}
          </Text>
        </View>
      </View>
      {/*............. top view started..........  */}

      {/* .........main Card started ...... */}

      <View style={styles.mainCard}>
        <View style={styles.mainView}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.mainView2}>
              <Image
                source={imagePath.FatemaProfile}
                style={{height: '90%', width: '90%', resizeMode: 'contain'}}
              />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 15}}>Fatema Akter</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.mainView3}>
              <Text style={{marginHorizontal: 4, color: '#E5A419'}}>
                <Icon2 name="clock" size={18} />
              </Text>
              <Text style={{marginHorizontal: 4, color: '#E5A419'}}>
                22-05-22
              </Text>
              <Text style={{marginHorizontal: 4, color: '#E5A419'}}>
                9:05 PM
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.recBtn}
              onPress={() =>
                navigation.navigate(MainNavigationString.VOICEMSG)
              }>
              <View style={styles.recBtn2}>
                <Icon name="mic" size={15} color="white" />
                <Text style={{color: 'white'}}>Rec</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainView}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.mainView2}>
              <Image
                source={imagePath.FatemaProfile}
                style={{height: '90%', width: '90%', resizeMode: 'contain'}}
              />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 15}}>Fatema Akter</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.mainView3}>
              <Text style={{marginHorizontal: 4, color: '#E5A419'}}>
                <Icon2 name="clock" size={18} />
              </Text>
              <Text style={{marginHorizontal: 4, color: '#E5A419'}}>
                22-05-22
              </Text>
              <Text style={{marginHorizontal: 4, color: '#E5A419'}}>
                9:05 PM
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.recBtnRed}>
              <View style={styles.recBtn2}>
                <Icon name="mic" size={15} color="white" />
                <Text style={{color: 'white'}}>Rec</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.mainView2}>
              <Image
                source={imagePath.FatemaProfile}
                style={{height: '90%', width: '90%', resizeMode: 'contain'}}
              />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 15}}>Fatema Akter</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.mainView3}>
              <Text style={{marginHorizontal: 4, color: '#E5A419'}}>
                <Icon2 name="clock" size={18} />
              </Text>
              <Text style={{marginHorizontal: 4, color: '#E5A419'}}>
                22-05-22
              </Text>
              <Text style={{marginHorizontal: 4, color: '#E5A419'}}>
                9:05 PM
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.recBtnRed}>
              <View style={styles.recBtn2}>
                <Icon name="mic" size={15} color="white" />
                <Text style={{color: 'white'}}>Rec</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* .......main Card ended........  */}
    </View>
  );
};

export default VoiceCallList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topView: {
    backgroundColor: '#272727',
    paddingVertical: 10,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  mainCard: {
    backgroundColor: '#252525',
    borderRadius: 10,
  },
  scheduleView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  mainView: {
    backgroundColor: '#3A3A3A',
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mainView2: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: 'gold',
    borderRadius: 100,
    marginVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView3: {
    flexDirection: 'row',
    backgroundColor: '#151515',
    padding: 7,
    borderRadius: 5,
  },
  recBtn: {
    backgroundColor: '#E6A419',
    paddingHorizontal: 8,
    padding: 7,
    borderRadius: 5,
  },
  recBtnRed: {
    backgroundColor: 'gray',
    paddingHorizontal: 8,
    padding: 7,
    borderRadius: 5,
  },
  recBtn2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
