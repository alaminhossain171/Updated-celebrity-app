import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import imagePath from '../Constants/imagePath';

import { AuthContext } from '../Constants/context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderComp = ({ action, text, status, FanGroup }) => {
  const [showBar, setSHowBar] = React.useState(false);

  const navigation = useNavigation();

  const { authContext } = useContext(AuthContext);
  return (
    <View style={styles.container}>

      {!!status ? (
        // !!action ? action : () => navigation.goBack()
        <TouchableOpacity style={{ flexDirection: 'row' }} >
          <MaterialCommunityIcons
            name="logout"
            color={'#F7F7F7'}
            size={20}
          />
          <Text style={{ color: 'white' }}>LOGOUT</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity >
          <Image
            source={imagePath.logo}
            style={{ height: 30, width: 30, borderRadius: 50 }}
          />
        </TouchableOpacity>
      )}


      <View style={styles.row}>
        <View style={styles.Search}>
          {showBar ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ marginRight: 3 }}
              >
                <MaterialCommunityIcons
                  name="arrow-right"
                  color={'#F7F7F7'}
                  size={20}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.SearchBar}
                placeholder="Search Superstar"></TextInput>
            </View>
          ) : null}
          {showBar ? null : (
            <TouchableOpacity

              style={styles.text}>
              <Icon name="search" size={20} color="#494949" />
            </TouchableOpacity>
          )}
        </View>
        {FanGroup === 'fangroup' ? <TouchableOpacity style={styles.Message} >
          <Text style={styles.text}>
            <MaterialCommunityIcons
              name="android-messages"
              color={'#494949'}
              size={20}
            />
          </Text>
        </TouchableOpacity> : <TouchableOpacity style={styles.Message} >
          <Text style={styles.text}>
            <MaterialCommunityIcons
              name="android-messages"
              color={'#494949'}
              size={20}
            />
          </Text>
        </TouchableOpacity>}

      </View>

      {/* {!!status ? (
        // !!action ? action : () => navigation.goBack()
        <TouchableOpacity onPress={() => signOut()}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )} */}

      {/* <Text style={{color: 'white', fontSize: 20}}>{text}</Text> */}
      {/* <TouchableOpacity>
        <Image
          source={imagePath.defultImage}
          style={{height: 30, width: 30, borderRadius: 50}}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343434',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1.5,
    borderColor: '#000000',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 4,
    backgroundColor: '#F7F7F7',
    padding: 3,
    borderRadius: 50,
  },
  SearchBar: {
    borderColor: '#FFAD00',
    borderWidth: 1,
    width: 280,
    height: 28,
    padding: 3,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  row: {
    justifyContent: 'center',

    flexDirection: 'row',
  },
  row2: {
    justifyContent: 'center',
  },
});
