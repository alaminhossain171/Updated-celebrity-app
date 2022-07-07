//import liraries
import React, { useContext, useEffect, useState } from 'react';
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
    ScrollView,
    useWindowDimensions
} from 'react-native';
import imagePath from '../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Constants/context';
import LoaderComp from '../../Components/LoaderComp';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppUrl from '../../RestApi/AppUrl';
import { RadioButton } from 'react-native-paper';
import navigationStrings from '../../Constants/navigationStrings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RenderHtml from 'react-native-render-html';
// create a component
const HelloStar = () => {
    const [isSelected, setSelection] = useState(false);
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const { authContext, axiosConfig } = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [buffer, setBuffer] = useState(false);
    const [error, setError] = useState(null);
    const [showPass, setShowPass] = useState(true);
    const { width } = useWindowDimensions();
    const [information, setInformation] = useState({})




    useEffect(() => {
        getInstruction()
    }, [])

    const getInstruction = () => {
        setBuffer(true);



        axios
            .get(AppUrl.StarInstrucation, axiosConfig)
            .then(res => {
                setBuffer(false);

                if (res.data.status === 200) {
                    setInformation(res.data.star_details)
                } else {
                    setBuffer(false);
                    setError('user and password not match !!');
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

    const source = {
        html: `<div style='color:#e6e6e6'>${information?.terms_and_condition}</div>`
    };

    const redirectTodeshbord = () => {
        if (isSelected) {
            authContext.demoLogin()
            navigation.navigate(navigationStrings.CONGRATULATIONS)
        } else {
            ToastAndroid.show(
                'please accept our terms and conditions',
                ToastAndroid.SHORT,
            );
        }
    }

    return (
        <>
            {buffer ?
                <LoaderComp /> : <></>}
            <KeyboardAwareScrollView>
                <ImageBackground source={imagePath.background} resizeMode="cover" style={windowWidth > 600 ?
                    styles.containerWideScreen : styles.container
                }>
                    <Image source={imagePath.Top} style={windowWidth > 600 ? styles.containerTop : styles.Top} />

                    <View style={styles.header}>
                        <Animatable.Image animation="pulse" iterationCount="infinite" // duration="1500"
                            source={imagePath.logo} style={{ height: 140, width: 140, marginTop: -250, }} />
                    </View>

                    <Animatable.View style={styles.footerBody} animation="slideInUp">
                        <View style={styles.footer}>
                            <Text style={styles.CongratsBold}>Hello</Text>
                            <Text style={styles.CongratsText}>
                                {/* {information?.super_star?.first_name + ' ' + information?.super_star?.last_name} */}
                            </Text>

                            <View
                                style={{ justifyContent: 'center', width: '100%', alignItems: 'center', paddingVertical: 10 }}>
                                {/* <Image source={{ uri: `${AppUrl.MediaBaseUrl + information.super_star?.image}` }} style={styles.Middle} /> */}
                            </View>

                            {/* button */}
                            <ScrollView style={{ height: 120, }}>
                                <RenderHtml
                                    contentWidth={width}
                                    source={source}
                                />
                                {/* <Text style={{ color: '#E2BC6C', textAlign: 'justify', paddingHorizontal: 20, }}>
                                    Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled.

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled.

                                </Text> */}
                            </ScrollView>

                            <View style={styles.Login_btn_container}>
                                <Text style={{ color: '#E2BC6C', textAlign: 'center' }}>

                                    <TouchableOpacity style={styles.label} onPress={() => setSelection(!isSelected)} >

                                        <Text>
                                            {isSelected ? (

                                                <Icon name="radiobox-marked" size={20} color="#E2BC6C" />
                                            ) : (
                                                <Icon name="radiobox-blank" size={20} color="red" />
                                            )
                                            }
                                        </Text>
                                        <Text style={styles.TeXtXS}> Accept terms & conditions </Text>
                                    </TouchableOpacity>

                                </Text>
                                <TouchableOpacity style={styles.login_btn}
                                    onPress={redirectTodeshbord}
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
    containerTop: {
        width: '100%'
    },
    TextR: {
        color: 'gold',
        textAlign: 'center',
        paddingVertical: 8,
        fontWeight: 'bold',
        fontSize: 30,
    },
    Middle: {
        height: 100,
        width: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'gold',
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
        flex: 2,
        justifyContent: 'center',
        // top: -120,
        alignItems: 'center',
    },

    footerBody: {
        flex: 4,
        top: -80,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },

    footer: {

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
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    login_btn: {
        borderWidth: 1,
        borderColor: '#D4AF37',
        borderRadius: 10,
        paddingHorizontal: 20,
        width: '85%',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    CongratsBold: {
        color: 'gold',
        textAlign: 'center',
        paddingTop: 8,
        fontWeight: 'bold',
        fontSize: 20,
    },

    CongratsText: {
        color: '#F5EA45',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        paddingHorizontal: 20,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        flexDirection: 'row',

    },
    TeXtXS: {

        color: '#E2BC6C',

    },

});

//make this component available to the app
export default HelloStar;