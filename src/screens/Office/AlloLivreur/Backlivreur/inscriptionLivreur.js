import React, {useMemo, useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, 
    Picker, TextInput, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AssetsSelector } from 'expo-images-picker';
import { Ionicons } from '@expo/vector-icons'
import { MediaType, Asset } from 'expo-media-library';
import { DataStore } from '@aws-amplify/datastore';
import { LivreurModel } from '../../../../models';

import Amplify,{ Storage } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';



export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [openImagesPicker,setOpenImagesPicker] = React.useState(false);

    const navigation = useNavigation();
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [numero, setNumero] = useState();
    const [moto, setMoto] = useState();

    const onPressInscriptionSuiteLivreur = async () => {
        
        await DataStore.save(
            new LivreurModel({
                "nom": nom,
                "prenom": prenom,
                "numero": numero,
                "photoprofil":  awsImageUri,
                "motopropre": moto,
                "tablelivraisonmodelID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
                "commandefoodmodelID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
            })
        );
        navigation.navigate('presentation');
    }

  const [mediaFiles,setMediaFiles] = React.useState([])

  const [isLoading,setIsLoading] = React.useState(false)

  ///// upload image ////
  const fetchImageUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  }
  const uploadFile = async (file) => {
    const img = await fetchImageUri(file.uri);
    return Storage.put(`photo_profil${Math.random()}.jpg`,img, {
      level:'public',
      contentType:file.type,
      progressCallback(uploadProgress){
        console.log('PROGRESS--', uploadProgress.loaded + '/' + uploadProgress.total);
      }
    })
    .then((res) => {
      Storage.get(res.key)
      .then((result) => {
        console.log('RESULT --- ', result);
        let awsImageUri = result.substring(0,result.indexOf('?'))
        console.log('RESULT AFTER REMOVED URI --', awsImageUri)
        setIsLoading(false)
      })
      .catch(e => {
        console.log(e);
      })
    }).catch(e => {
      console.log(e);
    })
  }
  ////end upload img ////

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    console.log(pickerResult);
    uploadFile(pickerResult)
    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }

  let polar_text_1 = 'red'
  let polar_text_2 = 'blue'

  const widgetSettings = useMemo(
    () => ({
        getImageMetaData: false,
        initialLoad: 100,
        assetsType: [MediaType.photo, MediaType.video],
        minSelection: 1,
        maxSelection: 1,
        portraitCols: 4,
        landscapeCols: 4,
    }),
    []
)
const widgetErrors = useMemo(
  () => ({
      errorTextColor: polar_text_2,
      errorMessages: {
          hasErrorWithPermissions:
              'Please allow permission'
          ,
          hasErrorWithLoading: "Allow media permission please",
          hasErrorWithResizing:'There was an error with resizing',
          hasNoAssets: 'there was no assets',
      },
  }),
  []
)

let mainWithOpacity = 'green'
let bg = '#fff'
let main = 'lightgray'
let _textStyle = '#fff'
let _buttonStyle = 'blue'

const widgetStyles = useMemo(
  () => ({
      margin: 2,
      bgColor: bg,
      spinnerColor: main,
      widgetWidth: 99,
      screenStyle:{
          borderRadius: 5,
          overflow: "hidden",
      },
      widgetStyle:{
          margin: 10
      },
      videoIcon: {
          Component: Ionicons,
          iconName: 'ios-videocam',
          color: polar_text_1,
          size: 20,
      },
      selectedIcon: {
          Component: Ionicons,
          iconName: 'ios-checkmark-circle-outline',
          color: 'white',
          bg: mainWithOpacity,
          size: 26,
      },
  }),
  [polar_text_1, mainWithOpacity]
)

const widgetNavigator = useMemo(
  () => ({
      Texts: {
          finish: 'finish',
          back: 'back',
          selected: 'selected',
      },
      midTextColor: polar_text_2,
      minSelection: 3,
      buttonTextStyle: _textStyle,
      buttonStyle: _buttonStyle,
      onBack: () => setOpenImagesPicker(false),
      onSuccess: (data) => onSuccess(data),
  }),
  []
)

function openLibrary(){
  setOpenImagesPicker(true)
}

function onSuccess(data){
  setIsLoading(true)
  console.log(data)
  setOpenImagesPicker(false)
  let assetsArray = []
  data.forEach(file => {
    console.log('Each file --- ', file);
    assetsArray.push({
      uri:file.uri,
      type:file.mediaType
    })
  });
  setMediaFiles(assetsArray)
  assetsArray.forEach((file) => {
    uploadFile(file)
  })
}



  return (
    <>
    {
      openImagesPicker ? <View style={{
        flex:1,
        marginTop:60
      }}>
        <AssetsSelector
      Settings={widgetSettings}
      Errors={widgetErrors}
      Styles={widgetStyles}     // optional
      Navigator={widgetNavigator} // optional
    />
      </View>
    :
    <View style={styles.container}>
    <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
    <Image
        source={require('./iconelivreur.png')}
        resizeMode = 'contain'
        style={{alignItems:'center'}}
    />

    <View style={{backgroundColor:'#0A5089', alignItems:'center'}}>
      <Text style={{fontSize:18, fontWeight:'bold', color:'white',marginBottom:10}}>NOM</Text>    
    </View>
    <TextInput
        style={styles.input}
        onChangeText={setNom}
        value={nom}
        placeholder="Nom de famille"
        required={true}
		errorMessage="Obligatoire"
        />
    <View style={{backgroundColor:'#0A5089', alignItems:'center'}}>
      <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>PRENOM</Text>    
    </View>    
        
    <TextInput
        style={styles.input}
            onChangeText={setPrenom}
            value={prenom}
            placeholder="Votre prénom"
            required={true}
			errorMessage="Obligatoire"
        />
    <View style={{backgroundColor:'#0A5089', alignItems:'center'}}>
      <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>NUMERO DE TELEPHONE</Text>    
    </View>  
    <TextInput
      style={styles.input}
      onChangeText={setNumero}
      value={numero}
      placeholder="Numéro de téléphone"
      keyboardType="numeric"
      required={true}
			errorMessage="Obligatoire"
  />   

  <View style={{backgroundColor:'#0A5089', alignItems:'center'}}>
      <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>Ajoutez une photo</Text>    
    </View>        
  

    

    <TouchableOpacity onPress={openLibrary} style={styles.button}>
      <Text style={styles.buttonText}>Ajoutez</Text>
    </TouchableOpacity>

    <Button
        onPress={onPressInscriptionSuiteLivreur}
        title="Je veux être livreur"
        color="#ff6d00"
    />
  </View>
    }
  </>
  );
}

const styles = StyleSheet.create({
  /* Other styles hidden to keep the example brief... */
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    margin:10,
    backgroundColor:'white'
  },
  button:{
    backgroundColor:'white',
    padding:5,
    marginTop:20,
    borderRadius:10
  },
  buttonText:{
    color:'#ff6d00',
    textAlign:'center',
    fontSize:18
  },
  input:{
    backgroundColor:'white',
    
  }
});