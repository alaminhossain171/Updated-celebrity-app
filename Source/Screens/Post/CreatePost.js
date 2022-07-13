/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const CreatePost = () => {
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

export default CreatePost;
