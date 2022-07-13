import { StyleSheet, ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../Constants/imagePath';
const MonthSchedule = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.ContainerCard}>
          <Text style={styles.TextHeder}>January</Text>
        </View>

        <View style={styles.ContainerCard2}>

          <View style={styles.TabSpan}>

            <View style={styles.fls}>

              <TouchableOpacity style={styles.Tab} onPress={() => setTab(0)}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={tab === 1 ? ['#000', '#000'] :
                  ['#FFAD00', '#FFD273', '#FACF75', '#E7A725', '#FFAD00']} style={tab === 1 ? styles.linearGradient1 :
                    styles.linearGradient}>

                  <Text style={tab === 1 ? styles.ApprovedSche1 : styles.ApprovedSche}>Approved</Text>

                </LinearGradient>
              </TouchableOpacity>

            </View>

            <View style={styles.fls}>

              <TouchableOpacity style={styles.Tab} onPress={() => setTab(1)}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={tab === 0 ? ['#000', '#000'] :
                  ['#FFAD00', '#FFD273', '#FACF75', '#E7A725', '#FFAD00']} style={tab === 0 ? styles.linearGradient1 :
                    styles.linearGradient}>

                  <Text style={tab === 0 ? styles.ApprovedSche1 : styles.ApprovedSche}>Requested</Text>

                </LinearGradient>
              </TouchableOpacity>
            </View>

          </View>

          {
            tab === 0 ? (
              <>
                <View style={styles.Content}>
                  <View style={styles.Content1}>
                    <Image source={imagePath.BannerX} style={styles.postImage} />
                    <Image source={imagePath.ScheduleBanner} style={styles.SchImage} />
                    <Text style={styles.Text}>Learning Session </Text>
                  </View>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                  colors={['#FFAD00', '#FFD273', '#FACF75', '#E7A725', '#FFAD00']}
                  style={styles.LinerBu} >
                  <View style={styles.ViewRow}>
                    <View style={styles.ClockView}>
                      
                    <Image source={imagePath.ImgTime1}  />
                      
                    </View>
                    <View style={styles.ClockView}>
                    <Text style={styles.DateT} >DAY</Text>
                      <Text style={styles.DateTi} >03</Text>
                    </View>
                    <View style={styles.ClockView}>
                     <Text style={styles.DateT} >DAY</Text>
                      <Text style={styles.DateTi} >03</Text>
                    </View>
                    <View style={styles.ClockView}>
                     <Text style={styles.DateT} >DAY</Text>
                      <Text style={styles.DateTi} >03</Text>
                    </View>
                    <View style={styles.ClockView}>
                     <Text style={styles.DateT} >DAY</Text>
                      <Text style={styles.DateTi} >03</Text>
                    </View>

    
                  </View>
                  </LinearGradient>

                </View>
              </>

            ) : (

              <>
                <View style={styles.Content}>
                </View>
              </>

            )
          }

        </View>

      </ScrollView>
    </>
  )
}

export default MonthSchedule

const styles = StyleSheet.create({

  container: {
    padding: 8,
    backgroundColor: '#000',
  },

  ContainerCard: {
    backgroundColor: '#232323',
    marginBottom: 3,
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    padding: 8,
    paddingLeft: 10,
  },

  TextHeder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
  },

  ContainerCard2: {
    backgroundColor: '#232323',
    marginBottom: 20,
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10,
    padding: 8,
    paddingLeft: 10,
  },

  TabSpan: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: "center",
    alignItems: 'center',
    marginBottom: 5,
  },

  Tab: {
    width: '95%'
  },

  linearGradient: {
    borderRadius: 15,
    paddingVertical: 10,
  },

  linearGradient1: {
    borderRadius: 15,
    paddingVertical: 10,
  },

  fls: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  ApprovedSche: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  ApprovedSche1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  Content: {
    backgroundColor: '#0008',
    borderRadius: 10,
    marginTop: 8,
  },
  Content1: {
    position: 'relative'
  },

  SchImage: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
  },

  Text: {
    position: 'absolute',
    color: 'black',
    paddingTop: 5,
    paddingLeft: 20,
    fontSize: 20,
    bottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    left: 0,
    right: 0,
  },
  ViewRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    alignContent:'center',
    height:60,
    paddingHorizontal:10,
  
  },

  LinerBu:{
    borderRadius:30,
    marginVertical:10,
  },

  ClockView:{
    backgroundColor:'black',
    minWidth:50,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,

  },

  DateT:{
    color:'white',
    fontWeight:'bold',
    paddingHorizontal:18,
  },

  DateTi:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
  }

})