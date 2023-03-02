import React, { useState, useEffect } from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from  '../screens/NewPasswordScreen';

import AlloGroup from '../screens/AlloGroup/AlloGroup';
import Food from '../screens/Office/AlloFood/Food';
import Office from '../screens/Office/Office';
import NavigationTab from './navigation';
import DebutLivraison from '../screens/Office/AlloLivreur/DebutLivraison';
import DetailLivraison from '../screens/Office/AlloLivreur/Details';
import InterfaceClient from '../screens/Office/AlloLivreur/Interface';
import SelectionLieuDepart from '../screens/Office/AlloLivreur/SelectionLieuDepart';
import SelectionLieuRetrait from '../screens/Office/AlloLivreur/SelectionLieuRetrait';
import InscriptionLivreur from '../screens/Office/AlloLivreur/Backlivreur/inscriptionLivreur';
import FinLivraison from '../screens/Office/AlloLivreur/FinLivraison';
import PresentationCoursier from '../screens/Office/AlloLivreur/PresentationCoursier';
import NavigationTabFood from '../screens/Office/AlloFood/navigationFood';
import { Auth, Hub } from '@aws-amplify/core';

const Stack = createNativeStackNavigator();

const Navigation = () => {

	const [user, setUser] = useState(undefined);


	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
			setUser(authUser);
		} catch (e) {
			setUser(null);
		}	
	};
	useEffect(() => {
		checkUser();
	}, []);

	useEffect(() => {
		const listener = data => {
			if (data.payload.event === 'signIn' || data.payload.event == 'signOut')
			{
				checkUser();
			}
		};
		Hub.listen('auth', listener);
		return () => Hub.remove('auth', listener);
	}, []);

	if (user === undefined) {
		return (
			<View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator/>
			</View>
		)
	}
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='InscriptionLivreur'>

				
				{ user ? (
					
					<Stack.Screen name='Bienvenue' component={Home}/>
					
				) : (
				<>
					<Stack.Screen name='Services' component={Office}/>
					<Stack.Screen name='Bienvenue' component={Home}/>
					<Stack.Screen name='Detail' component={DetailLivraison}/>
					<Stack.Screen name='InscriptionLivreur' component={InscriptionLivreur}/>
					
					<Stack.Screen name='Connexion' component={SignInScreen}/>	
					<Stack.Screen name='NavigationTab' component={NavigationTab}/>
					<Stack.Screen name='NavigationTabFood' component={NavigationTabFood}/>
					<Stack.Screen name='DebutLivraison' component={DebutLivraison}/>
	
					<Stack.Screen name='InterfaceClient' component={InterfaceClient}/>
					<Stack.Screen name='AlloGroup' component={AlloGroup}/>
					<Stack.Screen name='Food' component={Food}/>
					
					<Stack.Screen name='livraison' component={DebutLivraison}/>		
					<Stack.Screen name='Inscription' component={SignUpScreen}/>
					<Stack.Screen name='Confirmation' component={ConfirmEmailScreen}/>
					<Stack.Screen name='Mot de passe oublie' component={ForgotPasswordScreen}/>
					<Stack.Screen name='Nouveau mot de passe' component={NewPasswordScreen}/>
					<Stack.Screen name='Lieu de depart' component={SelectionLieuDepart}/>
					<Stack.Screen name='Lieu de Retrait' component={SelectionLieuRetrait}/>
					<Stack.Screen name='Fin de Livraison' component={FinLivraison}/>
					<Stack.Screen name='Presentation Coursier' component={PresentationCoursier}/>
				</>
				)}
				
				

			</Stack.Navigator>		


		</NavigationContainer>

	
);
}

export default Navigation;

