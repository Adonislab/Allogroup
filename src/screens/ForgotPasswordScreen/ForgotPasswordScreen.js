
import React, { useState } from 'react';
import {View, Text,StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';
import {useForm}  from 'react-hook-form';
import {Auth} from 'aws-amplify';

const ForgotPasswordScreen = () => {

	const [username, setUsername] = useState('');

	const {control, handleSubmit, formState:{errors}} = useForm();

	const navigation = useNavigation();

	const onSendPressed = async data  => {
		try {
			await Auth.forgotPassword(data.username);
			navigation.navigate('Nouveau mot de passe');
		} catch (e) {
			Alert.alert('Oops',e.message);
		}

					
			};
	const onSendPressInscription = () => {
		navigation.navigate('Connexion');
		};

	return ( 
		<ScrollView showsVerticalIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Bienvenue au processus de 
				changement de votre mot de passe. Nous vous demandons votre identifiant 
				afin de vous envoyer un code de réinitialisation dans votre boite email.
				Merci bien !!! </Text>

				<CustomInput
					name='username'
					control={control} 
					placeholder = 'Votre identifiant'
					rules={{
						required:'Votre identifiant est obligatoire',
						}}
					/>
		
				<CustomButton
					text = 'Renouvelez'
					onPress = {handleSubmit(onSendPressed)}
					bgColor='#ff6d00'
					fgColor='white'
				/>

				<CustomButton
					text = 'Retour pour inscription'
					onPress = {onSendPressInscription}
					fgColor= '#ff6d00'
				/>

				
			</View>		

		</ScrollView>

		)


};

const styles = StyleSheet.create({
	root:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		padding:20, 	
		},
	title: {
		fontSize:15,
		fontWeight:'bold',
		margin:12,
		justifyContent:'center',
		color:'blue',
	},

}); 






export default ForgotPasswordScreen;
