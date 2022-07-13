//import liraries
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import imagePath from '../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// create a component
const Congratulations = () => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <>
        
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
                            style={{ height: 140, width: 140, marginTop: -300, }}
                        />
                    </View>

                    <Animatable.View style={styles.footerBody} animation="slideInUp">
                        <View style={styles.footer}>
                            <Text style={styles.CongratsBold}>Congratulations</Text>
                            <Text style={styles.CongratsText}>
                                Dear Superstar
                            </Text>

                            <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', padding: 40, }}>
                                <Image source={imagePath.Middle} style={styles.Middle} />
                            </View>



                            {/* button */}

                            <View style={styles.Login_btn_container}>
                                <Text style={{ color: '#E2BC6C', textAlign: 'center' }}>
                                    Already have an account?
                                </Text>
                                <TouchableOpacity  onPress={() => authContext.demoLogin()}
                                    style={styles.login_btn}
                                    >
                                    <Text style={styles.input_title}>Continue</Text>
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
    containerTop: {
        width:'100%'
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

});

//make this component available to the app
export default Congratulations;