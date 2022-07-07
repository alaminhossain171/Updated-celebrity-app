//import liraries
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import imagePath from '../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AuthContext } from '../../Constants/context';
import LoaderComp from '../../Components/LoaderComp';


import Icon from 'react-native-vector-icons/AntDesign';


// create a component
const SignUp = () => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const { authContext } = useContext(AuthContext);

    const [buffer, setBuffer] = useState(true);
    const [category, setCategory] = useState([]);
    const [selectAll, setSelectAll] = useState(false)

    const screen = Dimensions.get("screen");
    let baseUrl = 'https://backend.hellosuperstars.com/api/'

    useEffect(() => {
        getAllCategory()



    }, []);

    const getAllCategory = () => {
        axios.get(`${baseUrl}view-category`).then((res) => {
            //console.log(res.data.category)
            if (res.data.status === 200) {
                setBuffer(false)
                makeCatrgoryArry(res.data.category)
                //setCategory(res.data.category)
            }
            else {
                setBuffer(false)
            }
        })
            .catch((err) => {
                alert('network problem')
            })
    }

    const makeCatrgoryArry = (data) => {

        let categoryArry = data.map((item, index) => {
            item.isSelected = false
            return { ...item }
        })

        setCategory(categoryArry)
    }

    const selectHandaler = (valu) => {

        let categoryArry = category.map((item, index) => {
            if (valu == index) {

                item.isSelected = !item.isSelected
            }
            return { ...item }
        })

        setCategory(categoryArry)
    }

    const selectAllCategory = () => {
        setSelectAll(!selectAll)
        let categoryArry = category.map((item) => {

            item.isSelected = !selectAll

            return { ...item }
        })

        setCategory(categoryArry)
    }

    const catergoryDoneHandel = () => {
        authContext.category()
    }

    return (

        <>
            {buffer ?
                <LoaderComp />
                :
                <></>
            }

            <ImageBackground style={styles.container} source={imagePath.background} resizeMode="cover">
                <View style={styles.header}>
                    <Animatable.Image
                        animation="zoomIn"
                        // duration="1500"

                        source={imagePath.logo}
                        style={{ height: 100, width: 100 }}
                    />
                </View>
                <Animatable.View
                    style={windowWidth > 600 ? styles.footerWithScreen : styles.footer}
                    animation='slideInUp'
                >

                    <Text style={styles.title}>CATEGORY</Text>


                    {/* category container   */}
                    <ScrollView>
                        <View style={styles.CategoryContainer}>
                            {category ? category.map((item, index) =>

                                <TouchableOpacity style={styles.categoryitem} key={index} onPress={() => selectHandaler(index)}>
                                    <View>
                                        <Image

                                            style={{ height: 50, width: 50, borderRadius: 10 }}
                                            source={{
                                                uri: `https://backend.hellosuperstars.com/${item.icon}`,
                                            }}
                                        />

                                    </View>
                                    <Text style={styles.btn_text}>
                                        {item.name}

                                    </Text>
                                    <Text style={styles.btn_text}>
                                        <Icon name={item.isSelected ? "checkcircle" : "ellipsis1"} size={20} color="#D4AF37" />
                                    </Text>
                                </TouchableOpacity>


                            ) : ""}


                        </View>
                    </ScrollView>
                    <View style={styles.btn_container}>

                        <TouchableOpacity style={styles.btn_out_line} onPress={catergoryDoneHandel}>
                            <Text style={styles.btn_text}>
                                SKIP
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn_selct_all} onPress={selectAllCategory}>
                            <Text style={styles.btn_text}>
                                {selectAll ? "UNSELECT ALL" : "SELECT ALL"}
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.btn_primamary} onPress={catergoryDoneHandel}>
                        <Text style={styles.btn_text}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>


                </Animatable.View>
            </ImageBackground>
        </>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        borderColor: 'red',
        height: 809,


    },
    CategoryContainer: {
        flexDirection: 'column',
        minHeight: 400,

    },
    btn_text: {
        color: '#ffff'
    },
    categoryitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: "#D4AF37",
        paddingHorizontal: 50,
        // paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,


    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 5,
        backgroundColor: 'Loadergba(0, 0, 0, 0.212)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 30,

    },
    footerWithScreen: {
        flex: 5,
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
        justifyContent: "space-between"
    },

    btn_primamary: {

        backgroundColor: '#D4AF37',
        borderWidth: 1,
        borderColor: "#D4AF37",
        borderRadius: 10,
        paddingHorizontal: 55,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
        bottom: 10,
        color: 'black',

    },

    btn_out_line: {
        borderWidth: 1,
        borderColor: "#D4AF37",
        borderRadius: 10,
        paddingHorizontal: 55,
        paddingVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,

        color: 'black',


    },

    btn_selct_all: {
        borderWidth: 1,
        borderColor: "#D4AF37",
        borderRadius: 10,
        paddingHorizontal: 35,
        paddingVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,

        color: 'black',
    }
});

//make this component available to the app
export default SignUp;
