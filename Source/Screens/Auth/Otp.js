//import liraries
import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    ToastAndroid,
} from 'react-native';
import imagePath from '../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Constants/context';
import LoaderComp from '../../Components/LoaderComp';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppUrl from '../../RestApi/AppUrl';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import navigationStrings from '../../Constants/navigationStrings';

// create a component
const Otp = ({ route }) => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const { authContext, axiosConfig } = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [buffer, setBuffer] = useState(false);
    const [error, setError] = useState(null);
    const [showPass, setShowPass] = useState(true);
    const [data, setData] = useState(null);
    const { phone } = route.params

    const HandelLogin = () => {
        setBuffer(true);

        const fdata = {
            otp: data
        }


        axios
            .post(`https://backend.hellosuperstars.com/api/star_otp_verify`, fdata, axiosConfig)
            .then(res => {
                setBuffer(false);
                console.log(res.data)
                if (res.data.status === 200 && res.data.auth_type === "star") {
                    authContext.Otp()
                    navigation.navigate(navigationStrings.HELLOSTAR)
                } else {

                    setBuffer(false);
                    ToastAndroid.show(
                        'OTP not match !',
                        ToastAndroid.SHORT,
                    );
                }
            })
            .catch(err => {
                ToastAndroid.show(
                    'Network Problem, Check you Internet',
                    ToastAndroid.SHORT,
                );
                setBuffer(false);
                console.log(err);
            });

    };

    return (
        <>
            {buffer ? <LoaderComp /> : <></>}
            <KeyboardAwareScrollView>
                <ImageBackground
                    source={imagePath.background}
                    resizeMode="cover"
                    style={
                        windowWidth > 600 ? styles.containerWideScreen : styles.container
                    }>
                    <Image source={imagePath.Top} style={windowWidth > 600 ? styles.containerTop : styles.Top} />

                    <View style={styles.header}>
                        <Animatable.Image
                            animation="pulse"
                            iterationCount="infinite"
                            // duration="1500"

                            source={imagePath.logo}
                            style={{ height: 150, width: 150, marginTop: -300, }}
                        />
                    </View>

                    <Animatable.View style={styles.footerBody} animation="slideInUp">
                        <View style={styles.footer}>
                            {/* <Text style={styles.title}>Welcome To{'\n'}Hello Super Star</Text> */}
                            <Text style={styles.TextR}>OTP Verify</Text>
                            <Text style={styles.TextDes}>
                                We have sent an SMS to your Phone Number {phone && phone}
                            </Text>
                            <OTPInputView style={styles.InputOTPx} pinCount={6} autoFocusOnLoad
                                codeInputFieldStyle={styles.underlineStyleBase} codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled={(code) => {
                                    setData(code)
                                }}
                            />

                            {/* button */}

                            <View style={styles.Login_btn_container}>
                                {/* <Text style={{ color: '#E2BC6C', textAlign: 'center' }}>
                                    Already have an account?
                                </Text> */}
                                <TouchableOpacity
                                    style={styles.login_btn}
                                    onPress={HandelLogin}
                                // onPress={() => navigation.navigate(navigationStrings.HELLOSTAR)}
                                >
                                    <Text style={styles.input_title}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Animatable.View>
                </ImageBackground>
            </KeyboardAwareScrollView>
        </>
    );
};

const windowHeight = Dimensions.get('window').height;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: windowHeight,
    },
    Icon: {
        marginTop: 8,
    },
    password: {
        marginTop: 8,
        marginLeft: '5%',
    },
    containerWideScreen: {
        flex: 1,
        height: windowHeight,
        paddingHorizontal: 150,
    },
    TextR: {
        color: 'gold',
        textAlign: 'center',
        paddingVertical: 8,
        fontWeight: 'bold',
        fontSize: 30,
    },
    InputZ: {
        justifyContent: 'center',
        // alignItems:'center',
        marginTop: 30,
    },
    input: {
        justifyContent: 'center',
        alignItems: 'stretch',
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
        justifyContent: 'flex-start',
    },
    InputOTPx: {
        width: '90%',
        height: 60,
        marginLeft: 17,
        marginTop: 50,
        marginBottom: 40,

    },



    underlineStyleBase: {
        backgroundColor: '#343434',
        width: 40,
        height: 40,
        color: '#F0E25E',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#343434',
        fontWeight: 'bold',

    },
    underlineStyleHighLighted: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: 'red',
        color: '#F0E25E',
    },
    containerTop: {
        width: '100%'
    },
    input_fild: {
        marginLeft: 10,
        color: '#D4AF37',
        height: 40,
        width: '76%',
    },
    inputText: {
        marginTop: 20,
        marginLeft: 5,
        color: '#D4AF37',
    },
    input_title: {
        color: 'gold',
        fontWeight: 'bold',
        fontSize: 20,
    },
    TextDes: {
        color: '#E2BC6C',
        textAlign: 'center',
        paddingVertical: 1,
        fontSize: 12,
        paddingHorizontal: 20,
    },

    header: {
        flex: 3,
        justifyContent: 'center',
        // top: -120,
        alignItems: 'center',
    },

    footerBody: {
        flex: 3,
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
        borderColor: '#D4AF37',
        width: '90%',
    },

    title: {
        color: '#D4AF37',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },

    Login_btn_container: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    login_btn: {

        borderWidth: 1,
        borderColor: '#D4AF37',
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
export default Otp;
