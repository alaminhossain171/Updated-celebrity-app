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
      <View style={{padding: 12,margin:15,backgroundColor:'#181819',borderRadius:20}}>
        <View style={styles.createPostRow}>
          <View />
          <Text style={{color: '#9e9e9e'}}>Post Type</Text>
          <TouchableOpacity onPress={() => setFreeShow(!freeShow)}>
            <AntDesign
              name={freeShow ? 'caretdown' : 'caretright'}
              color={'#ffad00'}
              size={15}
            />
          </TouchableOpacity>
        </View>

        {freeShow && (
          <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
            <TouchableOpacity
              onPress={() => setPaidShow(false)}
              style={!paidShow ? styles.freeBtnActive : styles.freeBtn}>
              <Text style={!paidShow ? {color: '#9e9e9e'} : {color: '#9e9e9e'}}>
                Free
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPaidShow(true)}
              style={paidShow ? styles.freeBtnActive : styles.freeBtn}>
              <Text style={{color: '#9e9e9e'}}>Paid</Text>
            </TouchableOpacity>
          </View>
        )}

        {!paidShow ? (
          <>
            <View>
              <TextInput
                style={styles.createPostRow}
                placeholder="Post Title"
                placeholderTextColor={'#9e9e9e'}
              />
            </View>
            <View>
              <TextInput
                style={styles.createPostDescription}
                multiline={true}
                placeholder="Post Description"
                placeholderTextColor={'#9e9e9e'}
              />
            </View>

            <View style={styles.uploadFile}>
              <TouchableOpacity
                style={styles.uploadFileBtn}
                onPress={openDocumentFile}>
                <Entypo name="video-camera" color={'#ffaa00'} size={15} />
                {fileShow ? (
                  <Text style={{color: '#9e9e9e', paddingLeft: 8}}>
                    {fileShow}
                  </Text>
                ) : (
                  <Text style={{color: '#9e9e9e', paddingLeft: 8}}>
                    Upload File
                  </Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.uploadFileBtn}
                onPress={openPicker}>
                <Entypo name="image" color={'#ffaa00'} size={15} />
                {pick ? (
                  <Image style={{height: 300, width: 300}} source={pick} />
                ) : (
                  <Text style={{color: '#9e9e9e', paddingLeft: 8}}>
                    Upload Image
                  </Text>
                )}
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.removeBtn}>
                <Text style={{ fontSize: 13,color:'white'}}>REMOVE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmBtn}>
                <Text style={{ fontSize: 13,color:'white'}}>CONFIRM</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View>
              <TextInput
                style={styles.createPostTitleDollar}
                placeholder="$12"
                placeholderTextColor={'#9e9e9e'}
              />
            </View>
            <View>
              <TextInput
                style={styles.createPostRow}
                placeholder="Post Title"
                placeholderTextColor={'#9e9e9e'}
              />
            </View>
            <View>
              <TextInput
                style={styles.createPostDescription}
                multiline={true}
                // textAlignVertical='top'sdaf
                placeholder="Post Description"
                placeholderTextColor={'#9e9e9e'}
              />
            </View>

            <View style={styles.uploadFile}>
              <TouchableOpacity
                style={styles.uploadFileBtn}
                onPress={openDocumentFile}>
                <Entypo name="video-camera" color={'#9e9e9e'} size={22} />
                <Text style={{color: '#9e9e9e', paddingLeft: 8}}>Upload File</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.uploadFileBtn}
                onPress={openPicker}>
                <Entypo name="image" color={'#9e9e9e'} size={22} />
                <Text style={{color: '#9e9e9e', paddingLeft: 8}}>
                  Upload Image
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
              <TouchableOpacity style={styles.removeBtn}>
                <Text style={{ fontSize: 13}}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmBtn}>
                <Text style={{ fontSize: 13}}>Confirm</Text>
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
    borderWidth: 0.5,
    borderColor: '#ffad00',
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
    borderWidth: 0.5,
    borderColor: '#ffaa00',
    borderRadius: 20,
    padding: 10,
  },
  createPostDescription: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    color: 'white',
    borderWidth: 0.5,
    borderColor: '#ffaa00',
    borderRadius: 20,
    backgroundColor: '#121212',
    padding: 10,
    minHeight: 80,
  },
  uploadFile: {
   
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  uploadFileBtn: {
width:'47%',
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    color: 'white',
    borderWidth: 0.5,
    backgroundColor: '#121212',
    borderColor: '#ffaa00',
    borderRadius: 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeBtn: {
    backgroundColor: '#2A2B2E',
    borderRadius: 20,
width:'47%',
    height: 40,
    marginTop: 30,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtn: {
  width:'47%',
    backgroundColor: '#1D90F4',
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  freeBtn: {
    width:'47%',
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    borderColor: '#ffaa00',
    borderWidth: 0.5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  freeBtnActive: {
    width:'47%',
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    borderColor: '#ffad00',
    backgroundColor: '#2A2B2E',
    color: '#ddd',
    borderWidth: 0.5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostCreate;
