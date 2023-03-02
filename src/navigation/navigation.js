
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Office from '../screens/Office/Office';
import Setting from '../screens/Setting/Setting';
import Historique from '../screens/Historique/Historique';





const Tab = createBottomTabNavigator();






const NavigationTab = () => {

	return (
		<NavigationContainer independent={true} style ={{}}>
			<Tab.Navigator 

				
	
				screenOptions={({route})=> ({
						tabBarIcon : ( { focused, color, size })=>{
							let iconName;

							if (route.name==='Services') {
								iconName = focused ? 'earth-outline' : 'earth-outline';
									} 
							else if (route.name ==='Paramètres'){
								iconName = 'ios-options-outline';
									}
							else if (route.name ==='Mes Activités'){
								iconName= 'construct-outline';
									} 
							
							return <Ionicons name ={iconName} size={size} color={color}/>;
												},
						tabBarActiveTintColor: '#ff6d00',
						tabBarInactiveTintColor:'#07528a',
						 })}>



				

				<Tab.Screen name='Services' component={Office}/>
				<Tab.Screen name='Paramètres' component={Setting}/>
				<Tab.Screen name='Mes Activités' component={Historique}/>
				
				
			</Tab.Navigator>		


		</NavigationContainer>

	
);

		




}

export default NavigationTab;

