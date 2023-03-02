import React, { useState } from 'react';
import {View, Text, 
    StyleSheet, TextInput, 
    Button, AsyncStorage} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const details= () =>
{ 
    const navigation = useNavigation ();
    const onPressTerminerLivraison = async () =>{
      try {
        await AsyncStorage.multiSet([
          ['titre', setTitre],
         ['message', setMessage]]);
        navigation.navigate('Pesentation coursier')
      } catch (error) {
        
      } 

    };
    const [titre, setTitre] = useState('');
    const [message, setMessage] = useState('');
    
  return (
    <View style={styles.root}>
        <Text>Détails sur la livraison</Text>
        <TextInput 
             style={{paddingTop: 50}}
             value={titre}
             onChangeText={setTitre}
             placeholder="Titre de la livraison"
             required={true}
             errorMessage="Donne un titre pour rendre le tracage facile"
        />
        <TextInput 
             style={{paddingTop: 80, height: 50}}
             value={message}
             onChangeText={setMessage}
             multiline
             placeholder="Détails sur livraison"
             required={true}
             errorMessage="Nous vous invitons à donner ces détails 
            pour la sécurité la marchandisse"
        />

        <Button
            title='Terminez le processus'
            onPress={onPressTerminerLivraison}/>
    </View>
  )
}
const styles = StyleSheet.create({ 
  root: {
    flex:1,
		alignItems:'center',
	  },  
  });
export default details;