import React from 'react';
import {View, Text, StyleSheet, ScrollView,Button } from 'react-native';
				
import CustomInput from '../../../../components/CustomInput';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';



const InterfaceClient  = () => {

	const navigation = useNavigation();

	const {control} = useForm();

	const onPressRecuperation = () => {
		navigation.navigate('Lieu de depart');
		};
	
	const onPressLivraison = () => {
		navigation.navigate('Lieu de Retrait');
		};
	const onPressConfirmCourse = () => {
		navigation.navigate('Lieu de Retrait');
	}

	return (
		<View style={styles.root}>
			<SafeAreaView>
			<ScrollView>	
			<View style={{marginBottom:40}}>
				<View style={{alignItems:'center', marginBottom:15}}>	
					<Text style={styles.text}>
					ADRESSE DE RECUPERATION					</Text>
				</View>
				<Button
  					onPress={onPressRecuperation}
  					title="Adresse de récupération"
  					color="#fff"
					/>
			</View>

			<View style={{marginBottom:100}}>
				<View style={{marginBottom:20, alignItems:'center'}}>
					<Text style={styles.text}>
						ADRESSE DE DESTINATION
					</Text>
				</View>
				<Button
  					onPress={onPressLivraison}
  					title="Adresse de destination"
  					color="#fff"
					/>
			</View>	
				<View style={{marginBottom:20, alignItems:'center'}}>
					<Text style={styles.text}>
						TITRE ET DETAILS DE LA LIVRAISON
					</Text>
				</View>	
				<CustomInput 
					name='titre_course'
					control={control}
					placeholder='Titre de la course' 
					rules= {{
						validate:value => value==pwd || 'Il est nécessaire de préciser un titre afin de mieux suivre la libraison'
						}}
					/>
				<View style={{width:'100%', paddingTop:10}}>
				<CustomInput 
					name='detail_course'
					control={control}
					placeholder='Détails à partager avec votre livreur' 
					rules= {{
						validate:value => value==pwd || 'Il est nécessaire de préciser les colis déposés au livreur pour la sécurité du produit'
						}}
					multiline={true}
					/>
				</View>
			<View style={{paddingTop:100}}>
				<Button
					title='Création de la course'
					onPress={onPressConfirmCourse}
					color="#ff6d00"
				/>
			</View>
		</ScrollView>	
		</SafeAreaView>				
		</View>
)};

const styles= StyleSheet.create({
			root: {
				flex:1,
				paddingTop:20,
				backgroundColor:'#fff',
				marginLeft:10,
				marginRight:10,
				},
			text: {
				fontSize:15,
				fontWeight:'bold',
				color: '#07528a'
			},


});
export default InterfaceClient; 
