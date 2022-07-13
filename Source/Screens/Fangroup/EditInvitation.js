import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
const EditInvitation = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>EDIT INVITATION</Text>

      <View style={{backgroundColor: '#1A1A1A', margin: 10, borderRadius: 15}}>
        <TextInput
          placeholder="Group Name"
          placeholderTextColor={'gray'}
          style={styles.formStyle}
        />
        <TextInput
          placeholder="Club Points"
          placeholderTextColor={'gray'}
          style={styles.formStyle}
        />

        <TextInput
          style={styles.formStyle2}
          multiline={true}
          placeholder="Write Description!"
          placeholderTextColor={'gray'}
        />
      </View>

      <View style={{backgroundColor: '#1A1A1A', margin: 10, borderRadius: 15}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '48%'}}>
            <TextInput
              placeholder="Starting Date"
              placeholderTextColor={'gray'}
              style={styles.PickStyle}
            />
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={{position: 'absolute', right: '15%', top: '36%'}}>
              <MaterialIcons name="date-range" size={20} color="gray" />
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'gray'}}>To</Text>
          </View>

          <View style={{width: '48%'}}>
            <TextInput
              placeholder="Ending Date"
              placeholderTextColor={'gray'}
              style={styles.PickStyle}
            />
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={{position: 'absolute', right: '15%', top: '36%'}}>
              <MaterialIcons name="date-range" size={20} color="gray" />
            </TouchableOpacity>
          </View>
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

        <View style={{flexDirection: 'row'}}>
          <View style={{width: '48%'}}>
            <TextInput
              keyboardType="numeric"
              placeholder="Members Limit (Min)"
              placeholderTextColor={'gray'}
              style={styles.PickStyle}
            />
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'gray'}}>To</Text>
          </View>

          <View style={{width: '48%'}}>
            <TextInput
              keyboardType="numeric"
              placeholder="Members Limit (Max)"
              placeholderTextColor={'gray'}
              style={styles.PickStyle}
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderStyle: 'dotted',
              borderRadius: 10,
              borderColor: 'white',
              paddingHorizontal: 20,
              paddingVertical: 15,
              flexDirection: 'row',
            }}>
            <Text>
              <MaterialIcons name="file-upload" color={'gray'} size={20} />
            </Text>
            <Text style={{color: 'gray'}}>Upload Banner</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{backgroundColor: '#1A1A1A', margin: 10, borderRadius: 15}}>
   
      <LinearGradient colors={[  
                  '#FFD273',
                  '#FFAD00',
                  '#E7A725',
                  '#FFAD00',
                  '#FACF75',]}   style={{
       
            borderRadius: 10,
            paddingVertical: 10,
          }}>
      <TouchableOpacity
        >
          <Text
            style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
          Update
          </Text>
        </TouchableOpacity>
</LinearGradient>

      
      </View>
    </ScrollView>
  );
};

export default EditInvitation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  formStyle: {
    borderWidth: 0.5,
    borderColor: 'white',
    margin: 10,
    borderRadius: 25,
    paddingLeft: 15,
    marginVertical: 10,
    color: 'white',
  },
  formStyle2: {
    borderWidth: 0.5,
    borderColor: 'white',
    margin: 10,
    borderRadius: 25,
    paddingLeft: 15,
    marginVertical: 10,
    height: 100,
    color: 'white',
  },

  PickStyle: {
    borderWidth: 0.5,
    borderColor: 'white',
    margin: 10,
    borderRadius: 25,
    paddingLeft: 15,
    marginVertical: 10,
    color: 'white',
  },
});
