
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Food from './Food';
import Commande from './Commande';
import Favoris from './Favoris';




const Tab = createBottomTabNavigator();






const NavigationTabFood = (  ) => {

	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator 
				
				
	
				screenOptions={({route})=> ({
						tabBarIcon : ( { focused, color, size })=>{
							let iconName;

							if (route.name==='Fast Food') {
								iconName ='home-outline';
									} 
							else if (route.name ==='Mes Commandes'){
								iconName = "heart-outline";
									} 
							else if (route.name ==='Mes Favoris'){
								iconName= 'pizza-outline';
									}	
							return <Ionicons name ={iconName} size={size} color={color}/>;
												},
						tabBarActiveTintColor: '#ff6d00',
						tabBarInactiveTintColor:'#07528a'
						
						 })}>



				

				<Tab.Screen name='Fast Food' component={Food}/>
				<Tab.Screen name='Mes Commandes' component={Commande}/>
				<Tab.Screen name='Mes Favoris' component={Favoris}/>
								


			</Tab.Navigator>		


		</NavigationContainer>

	
);

		




}

export default NavigationTabFood;

