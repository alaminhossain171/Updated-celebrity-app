/* eslint-disable prettier/prettier */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../Constants/imagePath';

const Schedule = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.ContainerCard}>
          <Text style={styles.TextHeder}>Schedule</Text>
        </View>

        <View style={styles.ContainerCard2}>
          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>January 2022</Text>
            </View>
          </View>
          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>January 2022</Text>
            </View>
          </View>
          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>February 2022</Text>
            </View>
          </View>

          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>March 2022</Text>
            </View>
          </View>

          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>April 2022</Text>
            </View>
          </View>
          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>May 2022</Text>
            </View>
          </View>
          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>June 2022</Text>
            </View>
          </View>

          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>July 2022</Text>
            </View>
          </View>
          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>January 2022</Text>
            </View>
          </View>
          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>February 2022</Text>
            </View>
          </View>

          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>March 2022</Text>
            </View>
          </View>

          <View style={styles.Content}>
            <View>
              <Image source={imagePath.Schedule} style={styles.postImage} />
            </View>
            <View>
              <Text style={styles.Text}>March 2022</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Schedule;

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
    padding: 8,
    paddingLeft: 10,
  },

  TextHeder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
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
  Content: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  Text: {
    color: 'white',
    paddingTop: 5,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
