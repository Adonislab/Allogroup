import * as React from 'react';
import {View, Text, StyleSheet,  
	Button, ScrollView, SafeAreaView } from 'react-native';
import {useNavigation} from '@react-navigation/native';


const DebutLivraison = () => {
	const navigation = useNavigation();
	
	const onPressCourse = () => {
			navigation.navigate('InterfaceClient');	
				};
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<SafeAreaView style={styles.container} >
				<View style={{marginBottom:20}}>
					<Text style={{fontSize:20, color:'#ff6d00', textAlign:'center' }}>
						Gestion des livraisons
					</Text>
				</View>
					
				<Button
					onPress={onPressCourse}
					title="Nouvelle livraison"
					color='#0a5089'
				/>

			</SafeAreaView>
		</ScrollView>
	)};

const styles= StyleSheet.create({
	container : {
		flex:1,
		margin:20,
		paddingTop:20,
	}, 
});
export default DebutLivraison; 
