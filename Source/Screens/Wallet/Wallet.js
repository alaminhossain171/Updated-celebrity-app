/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import imagePath from '../../Constants/imagePath';

const Wallet = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{backgroundColor: '#343434'}}>
          <Text style={{color: '#fff', fontSize: 18, margin: 8}}>Balance</Text>
          <View style={styles.underLineBlack} />
          <View style={styles.flexAmount}>
            <Text style={styles.amount}>$14,125</Text>
            <Octicons name={'graph'} color={'#ffad00'} size={28} />
          </View>
          <View style={styles.underLineWhite} />
          <View style={{flexDirection: 'row', margin: 8}}>
            <View style={styles.flexOne}>
              <View style={styles.amountView}>
                <AntDesign name={'caretup'} color={'#ff0'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={styles.amountView}>
                <AntDesign name={'caretup'} color={'#ff0'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
            </View>
            <View style={styles.flexOne}>
              <View style={styles.amountView}>
                <AntDesign name={'caretup'} color={'#ff0'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={styles.amountView}>
                <AntDesign name={'caretup'} color={'#ff0'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
            </View>
            <View style={styles.flexOne}>
              <Text style={{color: '#fff'}}>This Month</Text>
              <Text style={{color: '#fff'}}>Pre Month</Text>
            </View>
            <View style={styles.flexOne}>
              <View
                style={{
                  backgroundColor: '#1c1d1d',
                  borderRadius: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{color: '#ffad00', fontSize: 18, fontWeight: 'bold'}}>
                  WithDraw
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#343434', marginVertical: 10}}>
          <View
            style={{
              margin: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>Monthly Earning</Text>

            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.createMeetupRow}>
              <View>
                <MaterialIcons name="date-range" color={'#fff'} size={16} />
              </View>
              <Text style={{color: '#fff', fontSize: 12, marginHorizontal: 5}}>
                26-05-2022
              </Text>
            </TouchableOpacity>
          </View>

          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <View style={styles.underLineBlack} />
          <Image source={imagePath.graph} resizeMode="cover" />
        </View>
        <View style={{backgroundColor: '#343434', marginVertical: 10}}>
          <View
            style={{
              margin: 8,
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>Sector Earning</Text>
          </View>

          <View style={styles.underLineBlack} />
          <View style={{margin: 10}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#000',
                padding: 8,
                borderRadius: 10,
                marginVertical: 8,
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={imagePath.Post}
                  style={{width: 20, height: 20}}
                />
              </View>
              <View style={{flex: 2}}>
                <Text style={{color: '#fff'}}>Post</Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={{flex: 2}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                  <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: '#ffad00', fontWeight: 'bold'}}>$ 75</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#000',
                padding: 8,
                borderRadius: 10,
                marginVertical: 8,
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={imagePath.Auditions}
                  style={{width: 20, height: 20}}
                />
              </View>
              <View style={{flex: 2}}>
                <Text style={{color: '#fff'}}>Auditions</Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={{flex: 2}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                  <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: '#ffad00', fontWeight: 'bold'}}>$ 75</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#000',
                padding: 8,
                borderRadius: 10,
                marginVertical: 8,
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={imagePath.Learning}
                  style={{width: 20, height: 20}}
                />
              </View>
              <View style={{flex: 2}}>
                <Text style={{color: '#fff'}}>Learning</Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={{flex: 2}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                  <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: '#ffad00', fontWeight: 'bold'}}>$ 75</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#000',
                padding: 8,
                borderRadius: 10,
                marginVertical: 8,
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={imagePath.Meetup}
                  style={{width: 20, height: 20}}
                />
              </View>
              <View style={{flex: 2}}>
                <Text style={{color: '#fff'}}>Meetup</Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={{flex: 2}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                  <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: '#ffad00', fontWeight: 'bold'}}>$ 75</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#000',
                padding: 8,
                borderRadius: 10,
                marginVertical: 8,
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={imagePath.Post}
                  style={{width: 20, height: 20}}
                />
              </View>
              <View style={{flex: 2}}>
                <Text style={{color: '#fff'}}>Live Chat</Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={{flex: 2}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                  <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: '#ffad00', fontWeight: 'bold'}}>$ 75</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#000',
                padding: 8,
                borderRadius: 10,
                marginVertical: 8,
              }}>
              <View style={{flex: 1}}>
                <Image source={imagePath.QA} style={{width: 20, height: 20}} />
              </View>
              <View style={{flex: 2}}>
                <Text style={{color: '#fff'}}>Q&A</Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={{flex: 2}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                  <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: '#ffad00', fontWeight: 'bold'}}>$ 75</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#000',
                padding: 8,
                borderRadius: 10,
                marginVertical: 8,
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={imagePath.Live}
                  style={{width: 20, height: 20}}
                />
              </View>
              <View style={{flex: 2}}>
                <Text style={{color: '#fff'}}>Live</Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={{flex: 2}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                  <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: '#ffad00', fontWeight: 'bold'}}>$ 75</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#000',
                padding: 8,
                borderRadius: 10,
                marginVertical: 8,
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={imagePath.Greeting}
                  style={{width: 20, height: 20}}
                />
              </View>
              <View style={{flex: 2}}>
                <Text style={{color: '#fff'}}>Greeting</Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={{flex: 2}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                  <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: '#ffad00', fontWeight: 'bold'}}>$ 75</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#000',
                padding: 8,
                borderRadius: 10,
                marginVertical: 8,
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={imagePath.Greeting}
                  style={{width: 20, height: 20}}
                />
              </View>
              <View style={{flex: 2}}>
                <Text style={{color: '#fff'}}>Fan Group</Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
              </View>
              <View style={{flex: 2}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'caretup'} color={'#ffad00'} size={20} />
                  <Text style={{color: '#fff', marginHorizontal: 5}}>$523</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: '#ffad00', fontWeight: 'bold'}}>$ 75</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  underLineBlack: {
    borderBottomColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
  },
  amount: {
    color: '#ffad00',
    fontWeight: 'bold',
    fontSize: 35,
  },
  flexAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
  },
  underLineWhite: {
    borderBottomColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 8,
  },
  amountView: {
    flexDirection: 'row',
  },
  flexOne: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  createMeetupRow: {
    flexDirection: 'row',
    backgroundColor: '#1c1d1d',
    borderRadius: 15,
    padding: 8,
  },
});
