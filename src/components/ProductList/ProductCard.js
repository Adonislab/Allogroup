import React, { useState } from 'react';
import {Text, View, Image, Dimensions,
    StyleSheet, Button,} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


const ProductCard = ({
    image,
    category,
    title,
    price,
    description,
}) => {
    const [count, setCount] = useState(0);

    const onPressFunctionCart = () => {
        warn.console('Ajout au panier');
    }
  return (
    <View style={styles.container}>
        <View style = {{marginBottom: 25, 
            backgroundColor:'gray', 
            }}>
            <Text style={{fontWeight:'bold', fontSize:18}}>
                        Carte d'identité du produit
            </Text>
            <Image
                source={{ uri : image}}
                  style={{
                    height: 300,
                          }}
            />
            <Text>
                <Text style={{ 
                    fontSize:15,
                    fontWeight:'bold',
            }}>Categorie du produit : </Text>
                <Text>{category}</Text>
            </Text>  
            <Text>             
                <Text style={{ 
                    fontSize:15,
                    fontWeight:'bold',
                    }}>
                Titre du produit : </Text>
                <Text>{title}</Text>
            </Text>

            <View
                style={{
                flexDirection: 'row',
                height: 50,
                padding: 5,
            }}>
                <View style={{flex: 0.2}}>
                    <Text>Unite: {price} F</Text>
                </View>

                <View style={{flex: 0.2}}>
                
                    <AntDesign
                        name="pluscircleo"
                        size={15}
                        onPress={() => setCount(count + 1)
                        }/>
                </View>
                <View style={{flex: 0.2}}>
                    <Text>Nbres : {count}</Text>
                </View>    
                <View style={{flex: 0.2}}>
                    <AntDesign
                        name="minuscircleo"
                        size={15}
                        onPress={() => setCount(count - 1)}
                    />
                </View>

                <View style={{flex:0.2}}>
                    <Text>Somme : {price * count} F</Text>
                </View>
            </View>

            <View style={{marginBottom:15}}>
                <Text style={{ 
                    fontSize:15,
                    fontWeight:'bold',
                    }}>
                Description du produit  </Text>
                <Text numberOfLines={5}>{description}</Text>
            </View>

            <Button
                onPress={onPressFunctionCart}
                title="Ajoutez au panier !"
                color="#ff6d00"
                />
            </View>    
    </View>
   
  )
}

const styles = StyleSheet.create({
    container: {
         flex:1,
         backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center',     
       },
});

export default ProductCard;