//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

// create a component
const LoaderComp = () => {
    return (
        <Spinner
                visible={true}
                textContent={'Loading...'}
                textStyle={{  color:'#757575', fontSize:12 }}
                size='large'
                color='#757575'
                overlayColor='rgba(0, 0, 0, 0.733)'
               
        /> 
    );
};

//make this component available to the app
export default LoaderComp;
