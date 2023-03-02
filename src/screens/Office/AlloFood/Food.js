import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ProductsList from '../../../components/ProductList/ProductsList';


const Food = () => {
    
    return(
        <SafeAreaView style={styles.container} >
            <View style={styles.liste} >
                <View>
                    <Text style ={{
                        fontSize:25, 
                        fontWeight:'bold', 
                        color:'#ff6d00',
                        }}>
                        Vos meilleurs Fast Food
                    </Text>
                </View>
                <ProductsList/>
               
            </View>
        </SafeAreaView>

    )}
const styles = StyleSheet.create({
        container: {
             flex: 1,
             backgroundColor: '#fff',
             alignItems: 'center',
             justifyContent: 'center',
             maxWidth:'100%',
           },
           liste: {
            alignItems: 'center',
           },
});

export default Food;