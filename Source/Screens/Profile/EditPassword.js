import { SafeAreaView, TextInput, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'
const EditPassword = () => {

     return (
          <>
               <SafeAreaView style={styles.container}>
                    <View style={styles.ContainerCard}>
                         <Text style={styles.TextHeder}>Edit Password</Text>
                    </View>

                    <View style={styles.ContainerCard2}>

                         <Text style={styles.PassText}>Old Password</Text>
                         <TextInput style={styles.input} placeholderTextColor='white' placeholder='**********' />

                         <Text style={styles.PassText}>New Password</Text>
                         <TextInput style={styles.input} placeholderTextColor='white' placeholder='**********' />
                         <Text style={styles.PassText}>Confirm Password</Text>
                         <TextInput style={styles.input} placeholderTextColor='white' placeholder='**********' />

                         <TouchableOpacity>
                              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                   colors={['#FFAD00', '#FFD273', '#FACF75', '#E7A725', '#FFAD00']} style={styles.LinearGradient}>

                                   <Text style={styles.TextA}>Update</Text>

                              </LinearGradient>
                         </TouchableOpacity>

                    </View>

               </SafeAreaView>
          </>
     );
};

export default EditPassword;
