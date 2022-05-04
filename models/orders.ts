import config from "../config/config.json";

import Order from "../interfaces/order";
import OrderItem from "../interfaces/order_item";
import product from "./products";

const orders = {
    getOrders: async function getOrders(): Promise<Order[]> {
        // オーダーのデータを取得して、
        // result.data（interface Orderのプロミス）を返す
        const response = await fetch(`${config.base_url}/orders?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;  
    },

    pickOrder: async function pickOrder(order: Partial<Order>) {
        // 商品の更新情報changedProductをupdateProductに渡す（在庫数が減少）
        // Partialだとinterfaceの全てを含まなくてよい
        await Promise.all(order.order_items.map(async (order_item: Partial<OrderItem>) => {
            let changedProduct = {
                id: order_item.product_id,
                name: order_item.name,
                stock: order_item.stock - order_item.amount,
                api_key: config.api_key,
            };

            await product.updateProduct(changedProduct);
        }));

        let changedOrder = {
            id: order.id,
            name: order.name,
            status_id: 200,
            api_key: config.api_key,
        };

        await orders.updateOrder(changedOrder);
    },

    updateOrder: async function updateOrder(order: Partial<Order>) {
        try{

            await fetch(`${config.base_url}/orders?api_key=${config.api_key}`, {
                body: JSON.stringify(order),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'PUT'
            });
        } catch (error) {
            console.log("Could not update order");
        }
    },
};

export default orders;
