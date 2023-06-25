import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import routes from "./routes";

const Tab = createMaterialBottomTabNavigator();

const BottomMenu = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#3B28CC"
            inactiveColor="#888098"
            barStyle={{
                backgroundColor: "#FFF",
                borderTopColor: "#888098",
                borderTopWidth: 1,
                height: 74
            }}
            labeled={false}
            shifting={true}
        >
            {routes.map((route, key) => {
                return (
                    <Tab.Screen
                        key={key}
                        name={route.name}
                        component={route.component}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialIcons name={route.icon} color={color} size={30} />
                            ),
                        }}
                    />
                )
            })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomMenu;
