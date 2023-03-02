import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Office = () => {
	const navigation = useNavigation();

	const {height} = useWindowDimensions();
	
	const onPressLivreur = () => {
					navigation.navigate('InterfaceClient');
						};
	const onPressFood = () => {
					//navigation.navigate('NAVIGATE', {name: 'NavigationTabFood'});
					navigation.navigate('NavigationTabFood');
					};
	const onPressApropos = () => {
					navigation.navigate('AlloGroup');
					};
	
	return (
		<SafeAreaView  style = {styles.root}>
			<ScrollView showsVerticalScrollIndicator={true}>
				
				<View style={styles.border}>
					<ScrollView horizontal={true}>
					
						<View style = {{flex:0.5, paddingLeft:10}}>
									<Text style={{fontSize:15, color:'white',fontWeight:'bold' }}>PorteFeuille</Text>
									<Text style={{fontSize:15, color:'white', fontWeight:'bold'}}>0 F </Text>
						</View>
					</ScrollView>

				</View>

				<View style={styles.services}>
		
					<ScrollView horizontal={true}>
					
						<TouchableOpacity 
							onPress={onPressLivreur}>
							<View style={styles.borderservice}>
								<Image 
									style={[styles.icone,{height:height*0.1}]}
									source={require('../../../assets/images/iconelivreur.png')}
									resizeMode="contain"
								/>
							

							</View>
							<View style = {{ marginTop: 0, alignItems:'center'}} >
								<Text style={{fontSize:12 }}>Livreur</Text>
							</View>
						</TouchableOpacity>


					
						<TouchableOpacity 
							onPress={onPressFood}>
							<View style={styles.borderservice}>
								<Image 
									source={require('../../../assets/images/food.png')}
									style={[styles.icone,{height:height*0.1}]}
									resizeMode='contain'
								/>
							

							</View>
							<View style = {{ marginTop: 0, alignItems:'center'}} >
								<Text style={{fontSize:12}}>Food</Text>
							</View>
						</TouchableOpacity>



					

						<TouchableOpacity 
							onPress={onPressApropos}>
							<View style={styles.borderservice}>
								<Image 
									source={require('../../../assets/images/aide.png')}
									style={[styles.icone,{height:height*0.1}]}
									resizeMode='contain'
								/>
							

							</View>
							<View style = {{ marginBottom: 0, alignItems:'center'}} >
								<Text style={{fontSize:12}}>Aide </Text>
							</View>
						</TouchableOpacity>


						

					</ScrollView>


				</View>

				

				<View style={{alignItems:'center', marginTop:30}}>
					<Text style={styles.promotion}>Nouveautés et Promotions</Text>	
					
					
						
							<Image
								source={require('../../../assets/images/aliment0.jpg')}
								style={{width: '100%', height: 300}}
								resizeMode='contain'
							/>
				</View>
 
			</ScrollView>
		</SafeAreaView>
		)};


const styles = StyleSheet.create({
	root: {
		flex:1,
		alignItems: 'center',
		 } ,

	icone: {
		width: '100%',
		Width: 100,
		height: 100,
				 },

	border: {
		backgroundColor:'#ff6d00',
		borderRadius:5,
		height:'20%',
				},
	margeborder:{
		marginRight:30,
				},
	borderservice:{
		backgroundColor:'#fff',
		borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width)/4),
		width:Dimensions.get('window').width*0.2,
		height:Dimensions.get('window').width*0.2,
		justifyContent:'center',
		alignItems:'center',
		margin:20,

				},
	promotion:{
		alignItems:'center',
		justifyContent:'center',
		fontWeight:'bold',
		fontSize:20,
		color:'#ff6d00',
			},
	services:{
		paddingTop:30,
		paddingBottom:20,
			},
	
		
					});
			

export default Office;  
