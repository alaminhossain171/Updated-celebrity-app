//import liraries
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground, ToastAndroid } from
    'react-native';
import imagePath from '../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

// create a component
const CelebrityAuth = () => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;

    return (
        <>
            <ImageBackground source={imagePath.background} resizeMode="cover" style={windowWidth > 600 ?
                styles.containerWideScreen : styles.container}>
                <Image source={imagePath.Top} style={windowWidth > 600 ? styles.containerTop : styles.Top} />

                <View style={styles.header}>

                    <Animatable.Image animation="pulse" iterationCount="infinite" // duration="1500" source={imagePath.logo}
                        style={{ height: 150, width: 150, marginTop: -80, }} />

                </View>
                <View style={styles.header}>
                    <Animatable.Image animation="pulse" iterationCount="infinite" // duration="1500"
                        source={imagePath.logo} style={{ height: 140, width: 140, marginTop: -250, }} />
                </View>

                <Animatable.View style={styles.footer} animation='slideInUp'>

                    <View style={styles.Auth_btn_container}>

                        <TouchableOpacity style={styles.AuthBtn}>
                            <Text style={styles.AuthTitle}>
                                Register
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.AuthBtn}>
                            <Text style={styles.AuthTitle}>
                                Log in
                            </Text>
                        </TouchableOpacity>

                    </View>
                </Animatable.View>

                <Image source={imagePath.Bottom} style={windowWidth > 600 ? styles.containerTop : styles.Bottom} />
            </ImageBackground>
        </>
    );
};

const windowHeight = Dimensions.get('window').height;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: windowHeight,
        backgroundColor: 'black'

    },
    Icon: {
        marginTop: 8
    },
    containerWideScreen: {
        flex: 1,
        height: windowHeight,
        paddingHorizontal: 150
    },
    containerTop: {
        width: '100%'
    },

    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        backgroundColor: 'Loadergba(0, 0, 0, 0.212)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },

    Auth_btn_container: {

        marginTop: 10,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },

    AuthBtn: {

        backgroundColor: '#D4AF37',
        borderWidth: 1,
        width: '80%',
        borderColor: "#D4AF37",
        borderRadius: 10,
        paddingHorizontal: 55,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 30,

    },

    AuthTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },

});

export default CelebrityAuth;