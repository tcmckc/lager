import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderList from './OrderList.tsx';
import PickList from './PickList.tsx';

const Stack = createNativeStackNavigator();


export default function Pick(props) {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={OrderList} />
            <Stack.Screen name="Details">
                {() => <PickList {...props} setProducts={props.setProducts} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}