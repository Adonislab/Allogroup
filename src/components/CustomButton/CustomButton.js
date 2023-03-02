import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'; 

const CustomButton=({onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {

	return (
		<Pressable 	
				onPress={onPress} 
				style={[
					styles.container, 
					styles['container_${type}'], 
					bgColor ? {backgroundColor: bgColor } : {}, 	
					]} >

				<Text 
					style={[
						styles.text, 
						styles['text_${type}'], 
						fgColor ? {color: fgColor } : {}, 
					]} >
					{text}	
				</Text>

		</Pressable>
	)};

const styles = StyleSheet.create({
	container: {
		width:'100%',
		padding : 15,
		marginVertical : 5,
		alignItems : 'center',
		borderRadius : 5,
		 } ,
	container_PRIMARY : { 
		backgroundColor:'#ff6d00',},

	container_SECONDARY : {
		borderColor:'#ff6d00',
		borderWidth: 2,
	 },

	container_TERTIARY : { },

	text : {
		fontweight: 'bold',
		color:'#0a5089', },

	text_TERTIARY : {
		fontweight:'bold',
		color: 'gray'},

	text_SECONDARY : {
		color:'#3B71F3'
		
		},

	});


export default CustomButton;

