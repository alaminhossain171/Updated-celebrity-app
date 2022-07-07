//import liraries
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Dimensions, ScrollView, Image } from 'react-native';
import imagePath from '../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { AuthContext } from '../../Constants/context';
import LoaderComp from '../../Components/LoaderComp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import navigationStrings from '../../Constants/navigationStrings';


// create a component
const SignUp = ({ route }) => {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const windowWidth = Dimensions.get('window').width;
    const [showPass, setShowPass] = useState(true)
    const { authContext } = useContext(AuthContext);
    const [buffer, setBuffer] = useState(false)
    const [serverError, setServerError] = useState({});
    const screen = Dimensions.get("screen");
    const [notmatched, setnotmatched] = useState(false)
    const { authId } = route.params
    // let baseUrl = 'https://backend.hellosuperstars.com/api/'

    const onSubmit = (data) => {
        setBuffer(true)
        if (data.password === data.cpassword) {
            const formData = {
                id: authId,
                email: data.email,
                phone: data.phone,
                password: data.password,
            }
            axios.post(`http://backend.hellosuperstars.com/api/superStar/register`, formData).then(res => {
                setBuffer(false)
                if (res.data.status === 200) {
                    // authContext.signIn(res.data.token)
                    // navigation.navigate(navigationStrings.OTP, {
                    //     phone: data.phone
                    // })
                }
                else {
                    setServerError(res.data.validation_errors)

                }
            })
                .catch((err) => {
                    console.log(err)
                    setBuffer(false)
                    // navigation.navigate('Otp', {
                    //     phone: data.phone
                    // })
                });

        } else {
            setBuffer(false)
            setnotmatched(true)
        }





    }

    return (
        <KeyboardAwareScrollView>
            <>
                {buffer ?
                    <LoaderComp />
                    :
                    <></>
                }
                <ScrollView>
                    <ImageBackground style={windowWidth > 600 ? styles.containerWideScreen : styles.container} source={imagePath.background} resizeMode="cover">
                        <Image source={imagePath.Top} style={windowWidth > 600 ? styles.containerTop : styles.Top} />
                        <View style={styles.header}>
                            <Animatable.Image
                                animation="zoomIn"
                                // duration="1500"

                                source={imagePath.logo}
                                style={{ height: 150, width: 150, marginTop: -280, }}
                            />
                        </View>


                        <Animatable.View
                            style={styles.footerBody}
                            animation='slideInUp'
                        >
                            <View style={styles.footer}>

                                <Text style={styles.title}>Registration</Text>
                                <View style={styles.InputZ}>
                                    {/* email input  */}
                                    <View style={styles.input}>
                                        <Entypo name="email" color={'#D4AF37'} size={20} style={styles.Icon} />
                                        <Controller
                                            control={control}
                                            rules={{
                                                required: true,
                                                pattern: {
                                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: 'Please enter a valid email',
                                                },
                                            }}
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <TextInput
                                                    onBlur={onBlur}
                                                    onChangeText={onChange}
                                                    value={value}
                                                    placeholderTextColor="#9e9e9e"
                                                    placeholder='Your Email'
                                                    style={styles.input_fild}
                                                />
                                            )}
                                            name="email"
                                        />



                                    </View>
                                    {errors.email && <Text style={{ color: 'red', marginLeft: 25, }}>{errors.email?.type === 'pattern' ? "provide valid email" : "This field is required !"}</Text>}

                                    {serverError?.email && <Text style={{ color: 'red', marginLeft: 25, marginTop: 10 }}>{serverError?.email}</Text>}

                                    {/* password input  */}
                                    <View style={styles.input}>
                                        <Icon name="phone" color={'#D4AF37'} size={20} style={styles.Icon} />
                                        <Controller
                                            control={control}
                                            rules={{
                                                required: true,
                                                pattern: {
                                                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                                                    message: 'Please enter a valid phone number',
                                                },

                                            }}

                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <TextInput
                                                    onBlur={onBlur}
                                                    onChangeText={onChange}
                                                    value={value}
                                                    placeholderTextColor="#9e9e9e"
                                                    placeholder='Your Phone Number'
                                                    style={styles.input_fild}
                                                />
                                            )}
                                            name="phone"
                                        />

                                    </View>
                                    {errors.phone && <Text style={{ color: 'red', marginLeft: 25 }}>{errors.phone?.type === 'pattern' ? "provide valid phone number" : "This field is required !"}</Text>}
                                    {serverError?.phone && <Text style={{ color: 'red', marginLeft: 25, marginTop: 10 }}>{serverError?.phone}</Text>}

                                    {/* password input  */}
                                    <View style={styles.input}>
                                        <Icon name="lock" color={'#D4AF37'} size={20} style={styles.Icon} />
                                        <Controller
                                            control={control}
                                            rules={{
                                                required: true,
                                                minLength: {
                                                    value: 8,
                                                    message: ", Min length is 8"
                                                },
                                                maxLength: {
                                                    value: 10,
                                                    message: ", Max length is 10"
                                                }

                                            }}
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <TextInput
                                                    onBlur={onBlur}
                                                    onChangeText={onChange}
                                                    value={value}
                                                    placeholderTextColor="#9e9e9e"
                                                    placeholder='password'
                                                    secureTextEntry={showPass}
                                                    style={styles.input_fild}
                                                />
                                            )}
                                            name="password"
                                        />
                                        <TouchableOpacity style={styles.password}
                                            onPress={() => setShowPass(!showPass)}
                                        >
                                            {showPass ?
                                                <Entypo name='eye-with-line' size={20} color={'#D4AF37'} />
                                                :
                                                <Entypo name='eye' size={20} color={'#D4AF37'} />
                                            }
                                        </TouchableOpacity>


                                    </View>
                                    {errors.password && <Text style={{ color: 'red', marginLeft: 25 }}>This field is required {errors.password.message}</Text>}
                                    <View style={styles.input}>
                                        <Icon name="lock" color={'#D4AF37'} size={20} style={styles.Icon} />
                                        <Controller
                                            control={control}
                                            rules={{
                                                required: true,
                                                minLength: {
                                                    value: 8,
                                                    message: ", Min length is 8"
                                                },
                                                maxLength: {
                                                    value: 10,
                                                    message: ", Max length is 10"
                                                },


                                            }}

                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <TextInput
                                                    onBlur={onBlur}
                                                    onChangeText={onChange}
                                                    value={value}
                                                    placeholderTextColor="#9e9e9e"
                                                    placeholder='confirm password'
                                                    secureTextEntry={showPass}
                                                    style={styles.input_fild}
                                                />
                                            )}
                                            name="cpassword"
                                        />
                                        {/* <TouchableOpacity style={styles.password}
                                            onPress={() => setShowPass(!showPass)}
                                        >
                                            {showPass ?
                                                <Entypo name='eye-with-line' size={20} color={'#D4AF37'} />
                                                :
                                                <Entypo name='eye' size={20} color={'#D4AF37'} />
                                            }
                                        </TouchableOpacity> */}


                                    </View>
                                    {notmatched && <Text style={{ color: 'red', marginLeft: 25 }}>Password not matched</Text>}
                                    {errors.cpassword && <Text style={{ color: 'red', marginLeft: 25 }}>This field is required {errors.cpassword.message}</Text>}


                                    {/* button */}
                                    <View style={styles.Login_btn_container}>
                                        <TouchableOpacity style={styles.login_btn}
                                            onPress={handleSubmit(onSubmit)}
                                        //  onPress={() => navigation.navigate(navigationStrings.OTP)}
                                        >
                                            <Text style={styles.input_title}>
                                                Next
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Animatable.View>
                    </ImageBackground>
                </ScrollView>
            </>
        </KeyboardAwareScrollView>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: 809,


    },
    containerWideScreen: {
        flex: 1,
        backgroundColor: 'black',
        height: 809,
        paddingHorizontal: 150
    },
    Icon: {
        marginTop: 8
    },
    password: {
        marginTop: 8,
        marginLeft: '5%'

    },
    input_fild: {
        marginLeft: 10,
        color: '#D4AF37',
        height: 40,
        width: '76%',
        // backgroundColor: 'red'

    },
    InputZ: {
        justifyContent: 'center',
        // alignItems:'center',
        marginTop: 30,
    },
    input: {
        justifyContent: "center",
        alignItems: "stretch",
        borderWidth: 1,
        marginHorizontal: 20,
        height: 40,
        borderRadius: 10,
        paddingLeft: 16,
        marginTop: 10,
        color: '#D4AF37',
        backgroundColor: '#121212',
        borderWidth: 1,
        fontSize: 16,
        borderColor: '#DDA35796',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    input_title: {
        color: 'gold',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputText: {
        marginTop: 20,
        marginLeft: 5,
        color: '#D4AF37'
    },
    containerTop: {
        width: '100%'
    },


    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    footerBody: {
        flex: 4,
        top: -120,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },

    footer: {
        // flex: 1,
        backgroundColor: 'Loadergba(0, 0, 0, 0.212)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#D4AF37",
        width: '90%',

    },


    title: {
        color: '#D4AF37',
        fontSize: 30,
        paddingTop: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    Login_btn_container: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    login_btn: {

        borderWidth: 1,
        borderColor: "#D4AF37",
        borderRadius: 10,
        paddingHorizontal: 20,
        width: '90%',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,

    },
});

//make this component available to the app
export default SignUp;
