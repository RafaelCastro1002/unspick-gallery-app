import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "./src/layouts/MainLayout";

export default function App() {
  return (
    <View>
      <PaperProvider>
        <MainLayout />
      </PaperProvider>
    </View>
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
