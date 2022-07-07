//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, ImageBackground} from 'react-native';
import imagePath from '../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


// create a component
const Loader = () => {
    // const navigation = useNavigation();
    
    return (
        <ImageBackground style={styles.container} source={imagePath.background} resizeMode="cover">
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceInDown"
                    easing="ease-out"
                    // iterationCount="infinite"
                    
                    source={imagePath.logo}
                    style={{ height:200, width:200 }}
                />
            </View>
            
            {/* <Animatable.View
                style={styles.footer}
                animation='slideInUp'
            >
                <Text style={styles.title}>Stay connected with your star</Text>
                <Text style={styles.text}>Sign in with your account</Text>
                <TouchableOpacity
                    style={styles.get_start}
                    onPress={()=>navigation.navigate('Login')}
                >
               
             
                        <Text style={{ color:'#ffffff',fontWeight: 'bold' }}>
                            Get Started
                    </Text>
             
                </TouchableOpacity>
                
            </Animatable.View> */}
        </ImageBackground>
    );
};

// define your styles
const { height } = Dimensions.get('screen');
const height_logo = height * 0.28

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      header: {
           flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      footer: {
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 50,
          paddingHorizontal: 30
        },
        logo: {
            width: height ,
            height: height_logo
        },
        title: {
            color: '#D4AF37',
            fontSize: 30,
            fontWeight: 'bold'
        },
        text: {
            color: 'grey',
            marginTop:5
        },
     
        signIn: {
            width: 150,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flexDirection: 'row'
    },
        
    get_start: {
        backgroundGradient: "vertical",
        backgroundGradientTop: "#333333",
        backgroundGradientBottom: "#666666",
        backgroundColor: '#D4AF37',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
        alignItems: 'center',
        marginLeft: 200,
        marginTop: 50,
        color: 'black',
        shadowColor: 'black'

        }
        

});

//make this component available to the app
export default Loader;