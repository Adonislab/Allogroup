import * as React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/LogoHome.png';
import {useNavigation} from '@react-navigation/native';
 

const Home = () => {
	const {height} =useWindowDimensions();

	const navigation = useNavigation();


	setTimeout(() => {
		navigation.navigate('Connexion'); //this.props.navigation.navigate('Login')
	}, 5000)

	return (
		<View style={styles.root}>
			<Image
				source={Logo}
				style={[styles.logo, {height : height * 0.5}]}
				resizeMode= 'contain'
			/>

			
		</View>
		
)};

const styles= StyleSheet.create({
			root: {
				flex:1,
				alignItems:'center',
				padding:20,
				justifyContent:'center',
				backgroundColor:'#0a5089',
				},
			logo:{
				width:'80%',
				maxWidth:300,
				maxheight:200,
			},


});
export default Home; 
