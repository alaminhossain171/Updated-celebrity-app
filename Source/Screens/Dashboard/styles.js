import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 
  container: {
    padding: 8,
    backgroundColor: '#000',
  },
  homeContainer: {
    backgroundColor: '#232323',
    justifyContent: 'center',
    borderRadius: 10,
    alignContent: 'center',
  },

  ContainerCard: {
    backgroundColor: '#232323',
    marginBottom:20,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    paddingTop:9,
    paddingBottom:5,
  },

  Main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft:6,
    paddingRight:6,
    paddingBottom:6,
  },

  Card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#FFD00E',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#000',
  },

  
  postImage: {
    width: 65,
    height: 65,
    margin: '15%',
    resizeMode: 'stretch',
  },
  linearGradient: {
    width: '100%',
    padding:4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  singleContent: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#FFD00E',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  buttonText: {
    fontSize: 20,
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
    color: 'white',
    padding:2,
    fontWeight: 'bold',
    right: '5%',
    top: '5%',
  },
  badgeT: {
    textAlign: 'center',
    color: 'white',
    padding:2,
    fontWeight: 'bold',
  },
});

export default styles;



