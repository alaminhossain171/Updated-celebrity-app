//import liraries
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Dimensions, ScrollView, Image, ToastAndroid } from 'react-native';
import imagePath from '../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
// import axios from 'axios';
// import { AuthContext } from '../../Constants/context';
import LoaderComp from '../../Components/LoaderComp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import moment from "moment";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
// import AppUrl from '../../RestApi/AppUrl';



// create a component
const UserInformation = () => {
    const Navigation = useNavigation();
    // const { axiosConfig, authContext } = useContext(AuthContext);
    const [buffer, setBuffer] = useState(false)

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [formImage, setFormImage] = useState({});
    const [document, setDocument] = useState(null);
    const [updateData, setUpdateData] = useState({
        occupation: "",
        edu: '',
        birthday: '',
        country: '',
        img: {}
    })

    // console.log(updateData)


    const handelSkip = () => {
        Navigation.navigate('category')
    }
    //
    // const hendalSubmitInformation = () => {


    //     setBuffer(true)
    //     axios.post(AppUrl.SignUpInforUpdate, updateData, axiosConfig).then(res => {
    //         console.log(res.data.userInfo)
    //         if (res.data.status == 200) {
    //             authContext.userInfoUpate(res.data.userInfo)
    //             setBuffer(false)
    //             Navigation.navigate('category')
    //         }
    //         else {
    //             ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
    //             setBuffer(false)

    //         }
    //     })
    //         .catch((err) => {
    //             console.log(err)

    //         });


    // }


    //chose photo 
    const chosePhoto = () => {
        let options = {
            storageOptions: {
                path: 'images',
                mediaType: "image",
            },
            includeBase64: true
        };
        launchImageLibrary(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {

                setDocument(response.assets[0].uri)
                // setFormImage(response.assets[0].base64)
                setUpdateData({
                    ...updateData,
                    img: {
                        uri: response.assets[0].uri,
                        type: response.assets[0].type,
                        name: response.assets[0].fileName,
                        // data: response.data
                        data: response.assets[0].base64
                    },
                })

            }
        });
    }

    return (

  
    
           
                <ScrollView>
                    <ImageBackground style={styles.container} source={imagePath.background} resizeMode="cover">



                        <Animatable.View
                            style={windowWidth > 600 ? styles.footerWithScreen : styles.footer}
                            animation='slideInUp'
                        >
                            <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>

                                <TouchableOpacity onPress={chosePhoto}>
                                    <View style={{ marginTop: 50 }}>

                                        {document ?
                                            <Image
                                                source={{ uri: document }}
                                                style={{ height: 150, width: 150, borderRadius: 100, borderWidth: 10, overflow: 'hidden', borderWidth: 3, borderColor: '#D4AF37' }}
                                            />
                                            :
                                            <Image
                                                source={imagePath.defultCamera}
                                                style={{ height: 150, width: 150, borderRadius: 100, borderWidth: 10, overflow: 'hidden' }}
                                            />
                                        }
                                    </View>

                                    {/* <Icon name="pencil" color={'white'} style={{ position: 'absolute', zIndex: 9, marginTop: '48%', marginLeft: '4%' }} size={32} /> */}
                                </TouchableOpacity>
                            </View>

                            {/* Name input  */}
                            <Text style={styles.inputText}>Occupation</Text>
                            <View style={styles.input}>

                                <Picker
                                    dropdownIconColor="white"
                                    mode="dialog"
                                    style={styles.input_title}
                                    selectedValue={updateData.occupation}
                                    onValueChange={(itemValue, itemIndex) =>

                                        setUpdateData({
                                            ...updateData,
                                            occupation: itemValue
                                        })
                                    }>

                                    <Picker.Item

                                        label="Slect Occupation"
                                        value="null"

                                    />
                                    <Picker.Item

                                        label="Teacher"
                                        value="Teacher"
                                    />
                                    <Picker.Item

                                        label="Doctor"
                                        value="Doctor"
                                    />
                                    <Picker.Item

                                        label="Engineer"
                                        value="Engineer"
                                    />
                                    <Picker.Item

                                        label="Farmer"
                                        value="Farmer"
                                    />
                                    <Picker.Item

                                        label="House wife"
                                        value="House wife"
                                    />
                                    <Picker.Item

                                        label="Private Job"
                                        value="Private Job"
                                    />
                                    <Picker.Item

                                        label="Other"
                                        value="Other"
                                    />

                                </Picker>

                            </View>
                            {/* Name input  */}
                            <Text style={styles.inputText}>Education Level</Text>
                            <View style={styles.input}>

                                <Picker
                                    dropdownIconColor="white"
                                    mode="dialog"
                                    style={styles.input_title}
                                    selectedValue={updateData.edu}
                                    onValueChange={(itemValue, itemIndex) =>

                                        setUpdateData({
                                            ...updateData,
                                            edu: itemValue,
                                        })
                                    }>

                                    <Picker.Item

                                        label="Slect Education Level"
                                        value="null"

                                    />
                                    <Picker.Item

                                        label="PSC"
                                        value="PSC"
                                    />
                                    <Picker.Item

                                        label="JSC"
                                        value="JSC"
                                    />
                                    <Picker.Item

                                        label="SSC/A Level"
                                        value="SSC/A Level"
                                    />
                                    <Picker.Item

                                        label="HSC/O Level"
                                        value="HSC/O Level"
                                    />
                                    <Picker.Item

                                        label="Honours"
                                        value="Honours"
                                    />
                                    <Picker.Item

                                        label="Masters"
                                        value="Masters"
                                    />
                                    <Picker.Item

                                        label="Other"
                                        value="Other"
                                    />

                                </Picker>

                            </View>
                            {/* email input  */}
                            <Text style={styles.inputText}>Birthday  </Text>
                            <TouchableOpacity style={styles.input_textInput}
                                onPress={() => setOpen(true)}
                            >

                                <Text style={{ color: '#ffffff' }}>{moment(date).format('YYYY-MM-DD')}</Text>


                            </TouchableOpacity>



                            <DatePicker
                                modal
                                open={open}
                                date={date}
                                mode="date"
                                theme="dark"
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setUpdateData({
                                        ...updateData,
                                        birthday: date,
                                    })
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}

                            />
                            {/* <Text style={styles.inputText}>Country</Text>
                            <View >
                                <TextInput
                                    // placeholderTextColor="#ffffff"
                                    placeholder='Bangladesh'
                                    style={styles.input_textInput}
                                    onChangeText={text => setUpdateData({
                                        ...updateData,
                                        country: text,
                                    })}
                                />



                            </View> */}
                            {/* Name input  */}
                            <Text style={styles.inputText}>Country</Text>
                            <View style={styles.input}>

                                <Picker
                                    dropdownIconColor="white"
                                    mode="dialog"
                                    style={styles.input_title}
                                    selectedValue={updateData.country}
                                    onValueChange={(itemValue, itemIndex) =>

                                        setUpdateData({
                                            ...updateData,
                                            country: itemValue,
                                        })
                                    }>

                                    <Picker.Item

                                        label="Slect Country"
                                        value="null"

                                    />
                                    <Picker.Item

                                        label="BanglaDesh"
                                        value="BanglaDesh"
                                    />
                                    <Picker.Item

                                        label="India"
                                        value="india"
                                    />
                                    <Picker.Item

                                        label="Malaysia"
                                        value="Malaysia"
                                    />
                                    <Picker.Item

                                        label="Kuwait"
                                        value="Kuwait"
                                    />
                                    <Picker.Item

                                        label="UAE"
                                        value="UAE"
                                    />
                                    <Picker.Item

                                        label="Bahrain"
                                        value="Bahrain"
                                    />


                                </Picker>

                            </View>



                            {/* button */}
                            <View style={styles.btn_container}>
                                <TouchableOpacity style={styles.sign_btn} onPress={handelSkip}>
                                    <Text style={styles.input_title}>
                                        SKIP
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.login_btn}>
                                    <Text style={styles.input_title}>
                                        UPDATE PROFILE
                                    </Text>
                                </TouchableOpacity>



                            </View>
                        </Animatable.View>
                    </ImageBackground>
                </ScrollView>
          
      
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        borderColor: 'red',
        height: 809,

    },
    input: {
        justifyContent: "center",
        alignItems: "stretch",
        borderWidth: 1,
        height: 40,
        borderColor: "#D4AF37",
        borderRadius: 50,
        paddingLeft: 20,
        marginTop: 10,
        color: '#ffffff',



    },
    input_textInput: {
        justifyContent: "center",
        alignItems: "stretch",
        borderWidth: 1,
        height: 40,
        borderColor: "#D4AF37",
        borderRadius: 50,
        paddingLeft: 35,
        marginTop: 10,
        color: '#ffffff',



    },

    input_title: {
        color: '#ffff'
    },
    inputText: {
        marginTop: 20,
        marginLeft: 5,
        color: '#D4AF37'
    },


    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 4,
        backgroundColor: 'Loadergba(0, 0, 0, 0.212)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 30,

    },
    footerWithScreen: {
        flex: 4,
        backgroundColor: 'Loadergba(0, 0, 0, 0.212)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 30,
        marginHorizontal: 200
    },

    title: {
        color: '#D4AF37',
        fontSize: 30,
        fontWeight: 'bold'
    },

    btn_container: {

        flexDirection: 'row',
        marginTop: 5,
        justifyContent: "space-between"
    },

    login_btn: {

        backgroundColor: '#D4AF37',
        borderWidth: 1,
        borderColor: "#D4AF37",
        borderRadius: 50,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 30,

        color: 'black',

    },

    sign_btn: {
        borderWidth: 1,
        borderColor: "#D4AF37",
        borderRadius: 50,
        paddingHorizontal: 55,
        paddingVertical: 10,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 30,

        color: 'black',


    },
});

//make this component available to the app
export default UserInformation;
