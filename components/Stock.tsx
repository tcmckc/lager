import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
// import config from "../config/config.json";
import { Typography } from '../styles';
import productModel from '../models/products.ts';

export default function Stock({products, setProducts}) {
  return (
      <View>
        <Text style={Typography.header2}>Lagerförteckning</Text>
        <StockList products={products} setProducts={setProducts} />
      </View>
  );
}

function StockList({products, setProducts}) {
    // const [products, setProducts] = useState([]);
  
    // useEffect(() => {
    //     fetch(`${config.base_url}/products?api_key=${config.api_key}`)
    //     .then(response => response.json())
    //     .then(result => setProducts(result.data));
    // }, []); 

    useEffect(() => {
      (async () => {
        const allProducts = await productModel.getProducts();
        setProducts(allProducts);
      })();
    }, []);
  
    const list = products.map((product, index) => 
      <Text key={index} style={Typography.normal}>
        { product.name } - { product.stock }
      </Text>
    );
  
    return (
      <View>
        <Text style={Typography.header3}>Namn - Lagersaldot</Text>
        {list}
      </View>
    );
}