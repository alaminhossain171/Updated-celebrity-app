//import liraries
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


const EditProduct = () => {

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
    title: 'Video Picker',
    mediaType: 'video',
    // mediaType: 'image',
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
        <View>
          <TextInput
            style={styles.createPostRow}
            placeholder="Post Title"
            placeholderTextColor={'#ff0'}
          />
        </View>
        <View>
          <TextInput
            style={styles.createPostDescription}
            multiline={true}
            placeholder="Post Description"
            placeholderTextColor={'#ff0'}
          />
        </View>

        <View style={styles.productPrice}>
          <View style={styles.productTitle}>
            <Text style={{color: '#ff0'}}>Product Price</Text>
          </View>

          <View style={styles.price}>
            <TextInput
              style={{color: '#ddd'}}
              placeholder="$30"
              placeholderTextColor={'#ddd'}
            />
          </View>
        </View>
        <View style={styles.productPrice}>
          <View style={styles.productTitle}>
            <Text style={{color: '#ff0'}}>Product Units</Text>
          </View>

          <View style={styles.price}>
            <TextInput
              style={{color: '#ddd'}}
              placeholder="13"
              placeholderTextColor={'#ddd'}
            />
          </View>
        </View>

        <View style={styles.uploadFile}>
          <TouchableOpacity
            style={styles.uploadFileBtn}
            onPress={openDocumentFile}>
            <Entypo name="image" color={'#ff0'} size={22} />
            {/* <Text style={{color: '#ff0', paddingLeft: 8}}></Text> */}
            <Text style={{color: '#ff0', paddingLeft: 8}}>Upload File</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadFileBtn}
            onPress={openDocumentFile}>
            <Entypo name="image" color={'#ff0'} size={22} />
            {/* <Text style={{color: '#ff0', paddingLeft: 8}}></Text> */}
            <Text style={{color: '#ff0', paddingLeft: 8}}>Upload File</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadFileBtn}
            onPress={openDocumentFile}>
            <Entypo name="image" color={'#ff0'} size={22} />
            {/* <Text style={{color: '#ff0', paddingLeft: 8}}></Text> */}
            <Text style={{color: '#ff0', paddingLeft: 8}}>Upload File</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.uploadFileBtn} onPress={openPicker}>
            <Entypo name="image" color={'#ff0'} size={22} />
            <Text style={{color: '#ff0', paddingLeft: 8}}>Upload Image</Text>
          </TouchableOpacity> */}
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.removeBtn}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default EditProduct

const styles = StyleSheet.create({
  price: {
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
    borderColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTitle: {
    // color: 'gold',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  productPrice: {
    // flex: 1,
    borderWidth: 1,
    borderColor: 'gold',
    // padding: 10,
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#121212',
    marginTop: 8,
    marginBottom: 8,
  },
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
    borderColor: '#ff0',
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
    borderColor: '#ff0',
    borderRadius: 20,
    padding: 10,
  },
  createPostDescription: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    color: 'white',
    borderWidth: 1,
    borderColor: '#ff0',
    borderRadius: 20,
    backgroundColor: '#121212',
    padding: 10,
    minHeight: 80,
  },
  uploadFile: {
    // flex: 1,
    flexDirection: 'row',
  },
  uploadFileBtn: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'column',
    color: 'white',
    borderWidth: 1,
    backgroundColor: '#121212',
    borderColor: '#ff0',
    borderRadius: 20,
    height: 80,
    marginRight: 5,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeBtn: {
    backgroundColor: '#F6B718',
    borderRadius: 20,
    flex: 1,
    height: 40,
    marginTop: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtn: {
    flex: 1,
    backgroundColor: '#39D1B9',
    borderRadius: 20,
    marginTop: 10,
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
    borderColor: '#ff0',
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
    borderColor: '#ff0',
    backgroundColor: 'coral',
    color: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

