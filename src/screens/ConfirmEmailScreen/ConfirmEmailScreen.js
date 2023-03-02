
import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import { Auth } from 'aws-amplify';


const ConfirmEmailScreen = () => {

	const [code, setCode] = useState(''); 
	const route = useRoute();
	const {control, handleSubmit, watch } = useForm({defaultValues : 
		{username : route ?.params?.username},
		 });
	const username = watch('username');

	const navigation = useNavigation(); 

	const onConfirmPressed = async(data) => {
		try {
			await Auth.confirmSignUp(data.username, data.code);
			navigation.navigate('Connexion');
		}catch(e)
		{
			Alert.alert('Oops', e.message);
		}

				};

	const onResendPress = async () => {
		try {
			await Auth.resendSignUp(username);
			Alert.alert('Success', 'Code renvoyé par email');
		}catch(e)
		{
			Alert.alert('Oops', e.message);
		}
				};
	const onSignInPress = () => { 
		navigation.navigate('Connexion');
				};
	
	return (
		<ScrollView showsVerticalScrollIndicator= {false}>
			<View style={styles.root}>
				<Text style={styles.title}>Confirmation de votre inscription via le code envoyé par adresse éléctronique </Text>
				
				<CustomInput 
					name='username'
					control={control} 
					placeholder = {'Votre identifiant'}
					rules = {{
						required:'Votre identifiant est obligatoire',
						}}
				/>
				
				<CustomInput 
					name='code'
					control={control} 
					placeholder = {'Entrez votre code de confirmation'}
					keyboardType={'numeric'} 
					rules = {{
						required:'Votre code de vérification est obligatoire',
						}}
				/>

				<CustomButton 
					text = 'Confirmation'
					onPress = {handleSubmit(onConfirmPressed)}
					bgColor='#ff6d00'
					fgColor='white'
					/>

				<CustomButton
					text= 'Renvoyez le code de confirmation'
					onPress = {handleSubmit(onResendPress)}
					fgColor='#ff6d00'
				/>

				<CustomButton
					text = "Revenir à la connexion"
					onPress = {onSignInPress}
					fgColor='#ff6d00'
				/>
				
				


			</View>
		</ScrollView>
		
		)

};


const styles = StyleSheet.create({
	root:{
		flex:1,
		alignItems:'center',
		padding:20,
		justifyContent:'center',
		},
	title:{
		fontSize:20,
		fontWeight:'bold',
		margin:10,
		},

		});
export default ConfirmEmailScreen; 
