import { ScrollView,Switch, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.ContainerCard}>
          <Text style={styles.TextHeder}>
          <Icon name="user" size={20} color="white" />  Settings</Text>
        </View>

        <View style={styles.ContainerCard2}>
          <View style={styles.Content}>
            <Text style={styles.Text}>Account</Text>
          </View>

         <TouchableOpacity>
             <View style={styles.ContentX}>
            <View>
              <Text style={styles.Edit}>Edit Profile</Text>
            </View>
            <View>
              <Text><Icon name="angle-right" size={20} color="white" /></Text>
            </View>
          </View>
          </TouchableOpacity>

         <TouchableOpacity>
             <View style={styles.ContentX}>
            <View>
              <Text style={styles.Edit}>Edit Password</Text>
            </View>
            <View>
              <Text><Icon name="angle-right" size={20} color="white" /></Text>
            </View>
          </View>
          </TouchableOpacity>

         {/* <TouchableOpacity> */}
             <View style={styles.ContentX}>
            <View>
              <Text style={styles.Edit}>Notification</Text>
            </View>
            <View>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            </View>
          </View>
          {/* </TouchableOpacity> */}
         
        </View>

        <View style={styles.ContainerCard3}>
          <View style={styles.Content}>
            <Text style={styles.Text}>
              
            <Icon name="plus" size={20} color="white" />  More</Text>

            {/* <i class="fa-solid fa-square-plus"></i> */}
          </View>

         <TouchableOpacity>
             <View style={styles.ContentX}>
            <View>
              <Text style={styles.Edit}>Language</Text>
            </View>
            <View>
              <Text><Icon name="angle-right" size={20} color="white" /></Text>
            </View>
          </View>
          </TouchableOpacity>

         <TouchableOpacity>
             <View style={styles.ContentX}>
            <View>
              <Text style={styles.Edit}>Country</Text>
            </View>
            <View>
              <Text><Icon name="angle-right" size={20} color="white" /></Text>
            </View>
          </View>
          </TouchableOpacity>

        </View>


      </ScrollView>
    </>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#000',
  },

  ContainerCard: {
    backgroundColor: '#232323',
    marginBottom: 3,
    justifyContent: 'center',
    alignContent: 'center',
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    padding: 8,
    paddingLeft: 10,
  },

  TextHeder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
  },

  ContainerCard2: {
    backgroundColor: '#232323',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 8,
    paddingLeft: 10,
  },

  ContainerCard3: {
    backgroundColor: '#232323',
    marginBottom: 20,
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10,
    padding: 8,
    paddingLeft: 10,
  },

  Content: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,

  },
  Text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom:8,
  },

  ContentX:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:12,
  },
  Edit:{
    color:'white',
    fontSize:15,
    fontWeight:'bold'

  }
});