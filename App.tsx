import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainLayout from './src/layouts/MainLayout';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar hidden={true} translucent={true}/>
      {/* <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View> */}
      <MainLayout />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
