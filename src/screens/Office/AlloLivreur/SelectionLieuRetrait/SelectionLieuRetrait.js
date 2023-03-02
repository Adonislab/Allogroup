import { useState } from 'react';
import {View,Text, Dimensions, 
	StyleSheet,TextInput, Button, AsyncStorage } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import {
	//GooglePlaceDetail,
	GooglePlacesAutocomplete
  } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../environements";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 6.366667,
  longitude: 2.433333,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const SelectionLieuRetrait = () => {
	const navigation = useNavigation();
	const onConfirmationDepart = async () => {
		try {
			await AsyncStorage.multiSet([
				['lieu_arrivee', details.description],
		 		['personne_arrivee', setIdentifiantDepart],
				['numero_arrivee', setNumeroDepart]]);
				navigation.navigate("Detail");	
		} catch (e) {
		  // Error saving data
		}
	};
	const [IdentifiantDepart, setIdentifiantDepart] = useState('');
	const [NumeroDepart, setNumeroDepart] = useState('');
  return (
	<View>
		<MapView
			style={styles.map}
			provider={PROVIDER_GOOGLE}
			initialRegion={INITIAL_POSITION}
		/>
		<View style= {styles.place}>
			<Text style={{ fontSize:25, fontWeight:'bold'}}>
			Où livrez-vous ?
			</Text>	
			<GooglePlacesAutocomplete
				style = {{ textInput: styles.input }} 
      			placeholder = 'Lieu de livraison' 
      			onPress = { ( details  =  null )  =>  { 
        		// 'details' est fourni lorsque fetchDetails = true 
        			console.log (details.description) ; 
      			}} 
      			query = { { 
        			key : GOOGLE_API_KEY , 
        			language :'fr', 
      			}} 
    		/> 
			<View style={styles.details}>
				<Text style={{fontSize:20, color:'orange'}}>
					Personne a contacté au 
					lieu de livraison
				</Text>
				<TextInput
        			style={{height: 40}}
					value={IdentifiantDepart}
        			placeholder="Identifiant"
       				onChangeText={setIdentifiantDepart}
					required={true}
					errorMessage="Aidez le livreur en donnant le prénom de la personne à contacter"
    
      			/>
				<TextInput
        			style={{height: 40}}
					value={NumeroDepart}
        			placeholder="Numéro de téléphone"
       				onChangeText={setNumeroDepart}
					keyboardType='numeric'
					maxLength={11}
					required={true}
					errorMessage="Aidez le livreur en donnant le numéro à contacter"
      			/>
				<Button 
					title='Confirmation de lieu de livraison'
					onPress={onConfirmationDepart}
					color='orange'
				/>
			</View>
		</View>
		
		
	</View>
)};

const styles = StyleSheet.create({ 
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	  },
	place:{
		position:'absolute',
		width: "90%",
    	backgroundColor: "white",
    	shadowColor: "black",
    	shadowOffset: { width: 2, height: 2 },
    	shadowOpacity: 0.5,
    	shadowRadius: 4,
    	elevation: 4,
    	padding: 8,
    	borderRadius: 8,
    	top: 50,
		margin:20,
	},
	input:{
		borderColor: "orange",
    	borderWidth: 2,
	}, 
	details:{
		marginTop:1,
	} 
});
export default SelectionLieuRetrait;