import {StyleSheet} from 'react-native';

const StylesHome = StyleSheet.create({
     container: {
          padding: 6,
          backgroundColor: '#232323',
          flex: 1,
          borderRadius: 10,
          marginBottom:20,
        },
      
        homeContainer: {
          flex: 1,
          backgroundColor: '#232323',
          borderRadius: 10,
          paddingBottom: 8,
        },
        superStarHome: {
          flexDirection: 'row',
          padding: 5,
        },
        postImage: {
          width: 65,
          height: 65,
          margin: '15%',
        },
        linearGradient: {
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          // overflow: 'hidden',
        },
        singleContent: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
          borderWidth: 1,
          borderColor: '#FFD00E',
          borderRadius: 10,
          position: 'relative',
          overflow: 'hidden',
        },
      
        buttonText: {
          fontSize: 20,
          padding:3,
          fontWeight: 'bold',
          color: '#000',
        },
        badge: {
          backgroundColor: 'red',
          borderRadius: 50,
          position: 'absolute',
          minWidth: 25,
          height:25,
          textAlign: 'center',
          justifyContent:'center',
          alignItems:'center',
          alignContent:'center',
          borderWidth:2,
          borderColor:'#232323',
          color: 'white',
          padding:2,
          fontWeight: 'bold',
          right: '30%',
          top: '35%',
        },
        badgeT: {
          textAlign: 'center',
          color: 'white',
          padding:2,
          fontWeight: 'bold',
        },

        SDD:{
          color:'white',
        }
  
});

export default StylesHome;