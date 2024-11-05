import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Screen_01 } from "../pages/Screen_01";
import { Screen_02 } from "../pages/Screen_02";
import { Screen_03 } from "../pages/Screen_03";
import { Screen_02_Toolkit } from "../pages/redux-toolkit/Screen_02_Toolkit";
import { Screen_03_Toolkit } from "../pages/redux-toolkit/Screen_03_Toolkit";

const Stack = createStackNavigator();

export const AppNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="screen1" component={Screen_01} />
                    {/* Screen for Redux Toolkit */}
                    <Stack.Screen name="screen2" component={Screen_02_Toolkit} />
                    <Stack.Screen name="screen3" component={Screen_03_Toolkit} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

