import * as React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Logo from '../../../../../assets/images/Logo.png';
import CustomButton from '../../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const PresentationCoursier = () => {
	const {height} =useWindowDimensions();

	const navigation = useNavigation();

	const onPressConfirmationCourse = () => {
		navigation.navigate('Fin de Livraison');
	};


	return (
		<View style={styles.root}>
			<Image
				source={Logo}
				style={[styles.logo, {height : height * 0.3}]}
				resizeMode= 'contain'
			/>
			
			<Text style={styles.title}>
				Votre Champion a pour nom nom  prénom. 
				Son numéro de téléphone est numero.
				Vous êtes facturé à 300 F au minimum pour la course.
			</Text>

			<CustomButton
				text = 'Confirmation de la livraison'
				onPress = {onPressConfirmationCourse}
				bgColor ='#ff6d00'
				fgColor='white'
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
			logo: {
				width:'70%',
				maxWidth:300,
				maxHeight:200,	

				},
			title: {
				fontSize:15,
				fontWeight:'bold',
				margin:10,
			},


});
export default PresentationCoursier; 
