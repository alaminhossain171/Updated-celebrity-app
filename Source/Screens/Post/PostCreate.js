/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const PostCreate = () => {
  const [pick, setPick] = React.useState('');

  const [freeShow, setFreeShow] = React.useState(false);
  const [paidShow, setPaidShow] = React.useState(0);
  const [fileShow, setFileShow] = React.useState(null);

  const openDocumentFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res.uri, res.type, res.name, res.size);
      setFileShow(res.name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  const options = {
    title: 'Image Picker',
    // mediaType: 'video',
    mediaType: 'image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const openPicker = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        console.log(source);
        setPick(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={{padding: 12}}>
        <View style={styles.createPostRow}>
          <View />
          <Text style={{color: '#fff'}}>Post Type</Text>
          <TouchableOpacity onPress={() => setFreeShow(!freeShow)}>
            <AntDesign
              name={freeShow ? 'caretdown' : 'caretright'}
              color={'#fff'}
              size={22}
            />
          </TouchableOpacity>
        </View>

        {freeShow && (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => setPaidShow(false)}
              style={!paidShow ? styles.freeBtnActive : styles.freeBtn}>
              <Text style={!paidShow ? {color: '#ddd'} : {color: '#fff'}}>
                Free
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPaidShow(true)}
              style={paidShow ? styles.freeBtnActive : styles.freeBtn}>
              <Text style={{color: '#fff'}}>Paid</Text>
            </TouchableOpacity>
          </View>
        )}

        {!paidShow ? (
          <>
            <View>
              <TextInput
                style={styles.createPostRow}
                placeholder="Post Title"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View>
              <TextInput
                style={styles.createPostDescription}
                multiline={true}
                placeholder="Post Description"
                placeholderTextColor={'#fff'}
              />
            </View>

            <View style={styles.uploadFile}>
              <TouchableOpacity
                style={styles.uploadFileBtn}
                onPress={openDocumentFile}>
                <Entypo name="video-camera" color={'#fff'} size={22} />
                {fileShow ? (
                  <Text style={{color: '#fff', paddingLeft: 8}}>
                    {fileShow}
                  </Text>
                ) : (
                  <Text style={{color: '#fff', paddingLeft: 8}}>
                    Upload File
                  </Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.uploadFileBtn}
                onPress={openPicker}>
                <Entypo name="image" color={'#fff'} size={22} />
                {pick ? (
                  <Image style={{height: 300, width: 300}} source={pick} />
                ) : (
                  <Text style={{color: '#fff', paddingLeft: 8}}>
                    Upload Image
                  </Text>
                )}
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.removeBtn}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmBtn}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View>
              <TextInput
                style={styles.createPostTitleDollar}
                placeholder="$12"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View>
              <TextInput
                style={styles.createPostRow}
                placeholder="Post Title"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View>
              <TextInput
                style={styles.createPostDescription}
                multiline={true}
                // textAlignVertical='top'sdaf
                placeholder="Post Description"
                placeholderTextColor={'#fff'}
              />
            </View>

            <View style={styles.uploadFile}>
              <TouchableOpacity
                style={styles.uploadFileBtn}
                onPress={openDocumentFile}>
                <Entypo name="video-camera" color={'#fff'} size={22} />
                <Text style={{color: '#fff', paddingLeft: 8}}>Upload File</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.uploadFileBtn}
                onPress={openPicker}>
                <Entypo name="image" color={'#fff'} size={22} />
                <Text style={{color: '#fff', paddingLeft: 8}}>
                  Upload Image
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.removeBtn}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmBtn}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  createPostRow: {
    backgroundColor: '#121212',
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
  createPostTitleDollar: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#121212',
    alignItems: 'center',
    color: 'white',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
  createPostDescription: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    color: 'white',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    backgroundColor: '#121212',
    padding: 10,
    minHeight: 80,
  },
  uploadFile: {
    flex: 1,
    flexDirection: 'row',
  },
  uploadFileBtn: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    color: 'white',
    borderWidth: 1,
    backgroundColor: '#121212',
    borderColor: '#fff',
    borderRadius: 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeBtn: {
    backgroundColor: '#F6B718',
    borderRadius: 20,
    flex: 1,
    height: 40,
    marginTop: 70,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtn: {
    flex: 1,
    backgroundColor: '#39D1B9',
    borderRadius: 20,
    marginTop: 70,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  freeBtn: {
    flex: 1,
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  freeBtnActive: {
    flex: 1,
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    borderColor: '#fff',
    backgroundColor: 'coral',
    color: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostCreate;
