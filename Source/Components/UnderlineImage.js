import React from 'react'
import imagePath from './../Constants/imagePath';
import {
    Image,
    View,
} from 'react-native';

function UnderlineImage() {
    return (
        <View style={{ alignItems: 'center' }} >
            <Image style={{ marginVertical: 3 }} source={imagePath.lineMeetup} />
        </View>
    )
}

export default UnderlineImage