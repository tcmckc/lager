import config from "../config/config.json";
import Products from "..interfaces/products.ts";

const product = {
    getProducts: async function getProducts(): Promise<Products[]> {
        const response = await fetch(`${config.base_url}/products?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;
    },
    
    updateProduct: async function updateProduct(productToChange: Partial<Products>) {
        try {
            // product.api_key = config.api_key;

            await fetch(`${config.base_url}/products`, {
                body: JSON.stringify(productToChange),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'PUT'
            })
            .then(function (response) {

            });
        } catch (error) {
            console.log("Could not update product");
        }
    },
};

export default product;
