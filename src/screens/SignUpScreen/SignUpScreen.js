
import React, { useState } from 'react';
import { View, Text, 
	Image, StyleSheet, ScrollView, 
	useWindowDimensions, 
	Alert} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput'; 
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';


const EMAIL_REGEX= '/^[a-zA-Z0-9.!#$%&'*+/=?^_`{!}~-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {

	const {height} = useWindowDimensions();

	const {control, handleSubmit, formState:{errors}, watch} = useForm();

	const pwd = watch('password');

	const [username, setUsername] = useState('');

	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const [passwordRepeat, setPasswordRepeat] = useState('');

	const navigation = useNavigation();


	const onRegisterPressed = async(data) => { 
		const {username, password, email, name} = data;
		try {
			await Auth.signUp(
				{
					username,
					password,
					attributes : {email, name, preferred_username : username},
				});
				navigation.navigate('Confirmation', {username}); 
		}catch(e) {
			Alert.alert('Oops', e.message);
		}
			
						};

	const onTermsOfUsePressed = () => {
		console.warn('Acceptation des politiques');
								};

	const onPrivacyPressed = () => {
		console.warn('Acceptation des politiques privées');
									};
	const onSignInPress = () => {
		navigation.navigate('Connexion')
			};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style = {styles.root}>

				
				<Image
					source={Logo}
					style={[styles.logo, {height : height * 0.3}]}
					resizeMode='contain'
				/>		
						
				
				<Text style={styles.title} >

					Création de votre compte AlloGroup

				</Text>

				<CustomInput
					name='name'
					control={control} 
					placeholder={'Prénom'}
					rules={{
						required:'Votre prénom est néssaire pour une meilleur communication',  	
					}} 
				/>

				<CustomInput
					name='username'
					control={control} 
					placeholder={'Identifiant pour une connexion'}
					rules={{
						required:'Un identifiant est nécessaire pour la connexion',  	
					}} 
				/>

				<CustomInput
					name='email'
					control={control} 
					placeholder={'Votre email'}
					keyboardType={'email-address'}
					rules={{pattern: {value: EMAIL_REGEX, message: 'Votre email est invalide '}}}
				/> 

				<CustomInput 
					name='password'
					control={control}
					placeholder={'Votre mot de passe'}
					secureTextEntry
					rules = {{
						required:'Votre mot de passe est nécessaire',
						minLenght: {
							value:8,
							message:'Votre mot de passe doit être de huit  caractère au moins',
							},
					}}
				/>

				<CustomInput
					name="password-repeat"
					control={control}
					placeholder={'Confirmez votre mot de passe'}
					secureTextEntry
					rules={{
						validate:value => value==pwd || 'Les deux mots de passes ne correspondent pas',
					}}
				/>
			
				<CustomButton 
					text='Inscription' 
					onPress={handleSubmit(onRegisterPressed)} 
					bgColor='#ff6d00'
					fgColor='white' 
				/>

				<Text style = {styles.text} >
					Priez de lire et acceptez les <Text style = {styles.link} onPress={onTermsOfUsePressed} > 
					poliques de nos services</Text> et <Text style = {styles.link} onPress={onPrivacyPressed} > 
					utilisations des services</Text>
				
				</Text>
					
					
	

				<CustomButton 
					text = "J'ai déjà un compte"
					onPress = {onSignInPress}
					type = 'TERIARY'
				/> 

			</View>
		</ScrollView>
		)};


const styles = StyleSheet.create({
	root: {
		flex:1,
		justifyContent:'center',
		alignItems: 'center',
		padding: 20, } ,
	logo:{
		width:'70%',
		maxWidth:300,
		maxheight:200,
		},

	title: { 
		fontSize: 18,
		fontWeight:'bold',
		color: '#07528a',
		margin: 10, 
		},
	text : {
		color: 'gray',
		marginVertical: 10,  	
		},
	link : {
		color: '#ff6d00',
		},
					});
			

export default SignUpScreen;  
