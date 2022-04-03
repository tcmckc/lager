import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import config from "../config/config.json";

function StockList() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
        .then(response => response.json())
        .then(result => setProducts(result.data));
    }, []);
  
    const list = products.map((product, index) => <Text key={index} style={{color: '#FFFFFF', fontFamily: 'Verdana', lineHeight: 20}}>{ product.name } - { product.stock }</Text>);
  
    return (
      <View>
        <Text style={{color: '#FFFFFF', fontSize: 16, fontFamily: 'Verdana-Bold', marginBottom: 10}}>Namn - Lagersaldot</Text>
        {list}
      </View>
    );
}

export default function Stock() {
  return (
      <View>
        <Text style={{color: '#97B37D', fontSize: 22, fontFamily: 'Verdana', marginTop: 20, marginBottom: 20}}>Lagerförteckning</Text>
        <StockList />
      </View>
  );
}


// export default function Stock() {
//   return (
//       <View>
//         <Text style={{color: '#97B37D', fontSize: 22}}>Lagerförteckning</Text>
//         <StockList />
//       </View>
//   );
// }