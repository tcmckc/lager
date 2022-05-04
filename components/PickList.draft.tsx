

// import { CurrentRenderContext } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { Base, Typography } from '../styles';
import { useState, useEffect } from 'react';
import orderModel from "../models/orders.ts";
import productModel from "../models/products.ts";

export default function PickList({ route, navigation, setProducts }) {
    const { order } = route.params;
    const [productsList, setProductsList] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         const allProducts = await productModel.getProducts();
    //         setProductsList(allProducts);
    //     })();
    // }, []);

    // // Listを押すとリロードされる
    // async function pick() {
    //     await orderModel.pickOrder(order);
    //     navigation.navigate("List", { reload: true });
    // }

    useEffect(async () => {
        setProductsList(await productModel.getProducts());
    }, []);

    async function pick() {
        await orderModel.pickOrder(order);
        setProducts(await productModel.getProducts());
        navigation.navigate("List", { reload: true});
    }

    const productsHash = productsList.reduce((hash, current) => ({...hash, [current.id]: current.stock}), {});

    let allInStock = true;

    // オーダー商品情報の出力
    const orderItemsList = order.order_items.map((item, index) => {
        if (productsHash[item.product_id] < item.account) {
            allInStock = false;
        }
        return <Text
                key={index}
                style={Typography.normal}
                >
                    {item.name} - {item.amount} - {item.location}
            </Text>;
    });

    return (
        <View style={Base.base}>
            <Text style={{...Typography.header2}}>{order.name}</Text>
            <Text style={Typography.normal}>{order.address}</Text>
            <Text style={Typography.normal}>{order.zip} {order.city}</Text>

            <Text style={{...Typography.header3, ...Base.header4}}>Produkter:</Text>

            {orderItemsList}

            {allInStock
                ? <Button title="Plocka order" onPress={pick} />
                : <Text style={Typography.normal}>Ordern går inte att packa, då varor saknas.</Text>
            }
        </View>
    )
};