import * as React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Logo from '../../../../../assets/images/Logo.png';
import CustomButton from '../../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const FinLivraison = () => {
	const {height} = useWindowDimensions();
 
	const navigation = useNavigation();
	
	const onPressRetour = () => {
		navigation.navigate('Processus de livraison');
		};

	return (
		<View style={styles.root}>
			<Image
				source={Logo}
				style={[styles.logo, {height : height * 0.3}]}
				resizeMode= 'contain'
			/>

			<Text style={styles.title} >
				Merci beaucoup pour la confiance !
			</Text>

			<Text style={styles.title}>
				A très vite !!!
			</Text>
			
			<CustomButton
				text = 'Retour pour un autre processus de livraison' 
				onPress = {onPressRetour}
				fgColor = '#ff6d00'
			/>
				
		</View>
)};

const styles= StyleSheet.create({
			root: {
				flex:1,
				alignItems:'center',
				justifyContent:'center',
				padding:20,
				},
			title: {
				fontSize:15,
				fontWeight:'bold',
				margin:10,
			},
			logo:{
				width:'70%',
				maxWidth:300,
				maxheight:200,
			},


});
export default FinLivraison; 
