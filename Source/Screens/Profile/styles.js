import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 
  container: {
    padding: 8,
    backgroundColor: '#000',
},

ContainerCard: {
    backgroundColor: '#232323',
    marginBottom: 3,
    justifyContent: 'center',
    alignContent: 'center',
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    textAlign: 'center',
    padding: 8,
},

TextHeder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
},

ContainerCard2: {
    backgroundColor: '#232323',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 8,
    paddingLeft: 10,
},


Text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8,
},

ContentX: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
},
Edit: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'

},

LinearGradient: {
    borderRadius: 30,
    marginVertical: 10,
    marginTop: 20,
},

TextA: {
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
},

PassText:{
  color:'white',
  fontSize: 16,
  paddingHorizontal: 10,
},

input: {
  height: 40,
  margin: 12,
  fontSize: 16,
  padding: 10,
  color:'white',
  borderRadius:4,
  backgroundColor:'#121212',
}

});

export default styles;



