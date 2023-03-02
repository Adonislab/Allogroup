import * as React from 'react';
import {View, Text, Dimensions, 
	StyleSheet, Image, Pressable } from 'react-native';
import { useForm } from "react-hook-form";
import { Auth } from 'aws-amplify';

const { width, height } = Dimensions.get("window");

const Setting = () => {
	const { register, handleSubmit } = useForm();
	const onPressFunctionRecharger = () => {

	};
	return (
	<View style={styles.root}>	
	<View style={styles.profile}>	
		<Image 
			source={require('./profil_default.png')}
			style={styles.profil}
			resizeMode="contain"
		/>
	</View>	
	<View>
		<Text style={{fontSize:15, fontWeight:'bold', paddingBottom:20}}>Prénom : {}</Text>
		<Text style={{fontSize:15, fontWeight:'bold', paddingBottom:20}}>Identifiant : {}</Text>
		<Text style={{fontSize:15, fontWeight:'bold', paddingBottom:20}}>Adresse : {}</Text>	
	</View>
	<Pressable style={{paddingBottom:20}}
		onPress={onPressFunctionRecharger}>
  		<Text style={{fontWeight:'bold', color:'blue'}}>Rechargez votre portefeuille</Text>
	</Pressable>
	<View style={{alignItems:'center'}}>
		<Text style={{fontSize:15, fontWeight:'bold', 
		paddingBottom:20, color:'orange'}}>
			Votre type de compte
		</Text>
		<Text style={{fontSize:15, 
		paddingBottom:20}}>
			Je veux être liveur
		</Text>
		<Text style={{fontSize:15, 
		paddingBottom:20}}>
			Je suis être une entreprise de fastFood
		</Text>
		
	</View>
	</View>	
)};		

const styles= StyleSheet.create(
{
	profile:{
		alignItems:'center',
		backgroundColor:'white',
		borderRadius:10,
	},
	root:{
		marginRight:10,
		marginLeft:10,
		
	},

})



export default Setting;
