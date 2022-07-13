//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import imagePath from '../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const Flash = () => {
    const [clickTour, setClickTour] = useState(true);
    const navigation = useNavigation();
    //hello

    useEffect(() => {

        // retrieveData()

    }, []);


    // const retrieveData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('auth_token');
    //         if (value !== null) {

    //             navigation.navigate('Login')

    //         }
    //     } catch (error) {

    //     }
    // };

    const redirectLoginPage = () => {
        // clearInterval(redirectToLogin)
        // navigation.navigate(MainNavigationString.CELEBRITYAUTH)
    }

    // auto redirect to login
    const redirectToLogin = setInterval(redirectLoginPage, 5000)

    const hendelAuthpage = () => {
        // clearInterval(redirectToLogin)
        // navigation.navigate(MainNavigationString.CELEBRITYAUTH)

    }
    return (

        <ImageBackground source={imagePath.background} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


            <View >
                <TouchableOpacity
                    onPress={() => hendelAuthpage()}
                >
                    <Animatable.Image
                        animation="pulse"
                        iterationCount="infinite"
                        // animation="zoomIn"
                        // easing="ease-out"
                        // iterationCount="infinite"

                        source={imagePath.logo}
                        style={{ height: 200, width: 200 }}
                    />
                </TouchableOpacity>

                <Animatable.View
                    style={styles.virtual_tour_btn}
                // animation="pulse"
                // easing="ease-out"
                // iterationCount="infinite"
                >

                    {/* <TouchableOpacity
                        onPress={handelTour}
                    >


                        <Text style={styles.virtual_tour_btn_text}>
                            Virtual Tour
                        </Text>

                    </TouchableOpacity> */}
                </Animatable.View>

            </View>

        </ImageBackground>

    );
};

// define your styles
const { height } = Dimensions.get('screen');
const height_logo = height * 0.28

const styles = StyleSheet.create({ // linearGradient: {

    virtual_tour_btn: {
        backgroundColor: '#D4AF37',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 40
    },
    virtual_tour_btn_text: {

        color: '#ffffff',
        fontWeight: 'bold',
        paddingVertical: 10,
        borderRadius: 50
    }



});

//make this component available to the app
export default Flash;
