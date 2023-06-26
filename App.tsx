import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "./src/layouts/MainLayout";

import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-thin': require('./assets/fonts/Poppins-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={{
      colors: {}
    }}>
      <MainLayout />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
