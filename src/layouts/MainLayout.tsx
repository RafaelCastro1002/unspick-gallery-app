import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/FontAwesome5";
import { Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => (
  <PaperProvider>
    <Text>home</Text>
  </PaperProvider>
);
const SettingsScreen = () => (
  <PaperProvider>
    <Text>settings</Text>
  </PaperProvider>
);

const Routes = () => {
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
        }}
        labeled={false}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="images" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="image" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
