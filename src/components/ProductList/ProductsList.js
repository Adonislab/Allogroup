import React from 'react';
import {FlatList} from 'react-native';
import {products} from '../../screens/Office/AlloFood/products';
import ProductCard from './ProductCard';
import { useWindowDimensions } from 'react-native';

const ProductsList = () => {
    const {width, height} = useWindowDimensions();
  return (
   
        <FlatList
            data={products}
            keyExtractor ={(products) => products.id}
            renderItem={({item}) => <ProductCard  {...item} />}
            style={{ maxwidth: width, height:height*0.1, minwidth: width*0.9 }}
        />
        )}

export default ProductsList;