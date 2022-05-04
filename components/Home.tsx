import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, Image } from 'react-native';
import warehouse from './../assets/warehouse.jpg'
import Stock from './../components/Stock.tsx';
import { Base, Typography } from '../styles';

export default function Home({products, setProducts}) {
    return (
        <ScrollView style={Base.base}>
            <Text style={Typography.header1}>Lager-Appen</Text>
            <Image source={warehouse} style={Base.image} />
            <Stock products={products} setProducts={setProducts} />
            <StatusBar style="auto" />
        </ScrollView>
    );
}