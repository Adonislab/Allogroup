import React, { useState } from 'react'; 
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'; 
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import { Auth } from 'aws-amplify';
 
const NewPasswordScreen = () => {

					const [code,setCode] = useState('');
					
					const {control,handleSubmit,formState:{errors} } = useForm();

					const [newPassword,setNewPassword] = useState('');
					
					const navigation = useNavigation();

					const onSubmitPressed = async(data) => {
						try {
							await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
							navigation.navigate('Connexion');
						} catch (e) {
							Alert.alert('Oops',e.message);
						}

						//navigation.navigate('Processus de livraison');
					};
					

					const onSignInPressed = () => {
						navigation.navigate('Connexion');
					};


					return (
						<ScrollView showsVerticalScrollIndicator={false}>

							<View style={styles.root}>
								<Text style={styles.title}>Changement du mot de passe</Text> 
								
								<CustomInput
									name='username'
									control={control} 
									placeholder="Votre identifiant"
									rules={{
										required:'Le identifiant est nécessaire pour envoyer le code'
										}}
								/>

								<CustomInput
									name='code'
									control={control} 
									placeholder="Code envoyé par email"
									keyboardType={'numeric'}
									rules={{
										required:'Le code envoyé est nécessaire'
										}}
								/>

								<CustomInput
									name='password'
									control={control} 
									placeholder="Nouveau mot de passe"
									secureTextEntry
									rules={{
										required:'Votre nouveau mot de passe est obligatoire',
										minLenght:{value:8,message:'Votre mot de passe doit être de 8 caractères au moins'},
										}}
								/>

								<CustomButton 
									text="Effectuez le changement"
									onPress={handleSubmit(onSubmitPressed)}
									bgColor="#ff6d00"
									fgColor="white"
								/>

								<CustomButton 
									text="Retour pour inscription"
									onPress={onSignInPressed}
									fgColor='#ff6d00'
								/>

							</View>
						</ScrollView>

					);
	

};


const styles =StyleSheet.create({
			root:{
				flex:1,
				alignItems:'center',
				justityContent:'center',
				padding:20,
				},
			title:{
				fontSize:18,
				fontWeight:'bold',
				margin:10,
			},

		});
export default NewPasswordScreen;
