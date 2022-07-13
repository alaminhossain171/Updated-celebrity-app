import { ScrollView, Switch, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'
const Country = () => {

     const [isEnabled, setIsEnabled] = useState(false);
     const [isEnabled1, setIsEnabled1] = useState(false);
     const [isEnabled2, setIsEnabled2] = useState(false);
     const [isEnabled3, setIsEnabled3] = useState(false);
      
     const toggleSwitch = () => setIsEnabled(previousState => !previousState);
     const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
     const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
     const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

     return (
          <>
               <ScrollView style={styles.container}>
                    <View style={styles.ContainerCard}>
                         <Text style={styles.TextHeder}>Country</Text>
                    </View>

                    <View style={styles.ContainerCard2}>

                         <View style={styles.ContentX}>
                              <View>
                                   <Text style={styles.Edit}>Bangladesh</Text>
                              </View>
                              <View>
                                   <Switch trackColor={{ false: "#767577", true: "#f5dd4b" }} thumbColor={isEnabled ? "#f5dd4b"
                                        : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch}
                                        value={isEnabled} />
                              </View>
                         </View>
                         <View style={styles.ContentX}>
                              <View>
                                   <Text style={styles.Edit}>Bahrain</Text>
                              </View>
                              <View>
                                   <Switch trackColor={{ false: "#767577", true: "#f5dd4b" }} thumbColor={isEnabled1 ? "#f5dd4b"
                                        : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch1}
                                        value={isEnabled1} />
                              </View>
                         </View>

                         <View style={styles.ContentX}>
                              <View>
                                   <Text style={styles.Edit}>India</Text>
                              </View>
                              <View>
                                   <Switch trackColor={{ false: "#767577", true: "#f5dd4b" }} thumbColor={isEnabled2 ? "#f5dd4b"
                                        : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch2}
                                        value={isEnabled2} />
                              </View>
                         </View>

                         <View style={styles.ContentX}>
                              <View>
                                   <Text style={styles.Edit}>UAE</Text>
                              </View>
                              <View>
                                   <Switch trackColor={{ false: "#767577", true: "#f5dd4b" }} thumbColor={isEnabled3 ? "#f5dd4b"
                                        : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch3}
                                        value={isEnabled3} />
                              </View>
                         </View>

                         <TouchableOpacity>
                              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                   colors={['#FFAD00', '#FFD273', '#FACF75', '#E7A725', '#FFAD00']} style={styles.LinearGradient}>

                                   <Text style={styles.TextA}>Update</Text>

                              </LinearGradient>
                         </TouchableOpacity>

                    </View>

               </ScrollView>
          </>
     );
};

export default Country;
