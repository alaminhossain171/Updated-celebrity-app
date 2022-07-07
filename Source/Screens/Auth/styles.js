import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: windowHeight,
        backgroundColor:'black'
        
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
          width:'100%'
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
          width:'100%',
          alignItems:'center',
      },
  
      AuthBtn: {
  
          backgroundColor: '#D4AF37',
          borderWidth: 1,
          width:'80%',
          borderColor: "#D4AF37",
          borderRadius: 10,
          paddingHorizontal: 55,
          paddingVertical: 10,
          alignItems: 'center',
          marginTop: 30,
  
      },
      
      AuthTitle: {
          color: 'black',
          fontWeight:'bold',
          fontSize:20,
      },
      

});

export default styles;
