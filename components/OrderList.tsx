import { useState, useEffect } from 'react';
import { View, Text, Button } from "react-native";
import orderModel from "../models/orders.ts";
import { Base, Typography } from '../styles';
// import Order from "../interfaces/order.ts";

export default function OrderList({ route, navigation }) {
    const { reload } = route.params || false;
    const [allOrders, setAllOrders] = useState([]);

    if (reload) {
        reloadOrders();
    }

    async function reloadOrders() {
        setAllOrders(await orderModel.getOrders());
    }

    useEffect(() => {
        reloadOrders();
    }, []);

    // useEffect(() => {
    //     fetch(`${config.base_url}/orders?api_key=${config.api_key}`)
    //       .then(response => response.json())
    //       .then(result => setAllOrders(result.data));
    // }, []);

    // allOrdersからステータスが Nyの人をフィルターかけて、ボタンで書き出す
    const listOfOrders = allOrders
        .filter(order => order.status === "Ny")
        .map((order, index) => {
            return <Button
                title={order.name}
                key={index}
                onPress={() => {
                    navigation.navigate('Details', {
                        order: order
                    });
                }}
            />
        });

    return (
        <View style={Base.base}>
            <Text style={Typography.header2}>Ordrar redo att plockas</Text>
            {listOfOrders}
        </View>
    );
}
