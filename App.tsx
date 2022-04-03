import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './assets/warehouse.jpg';
import Stock from './components/Stock.tsx';
// import PostList from './components/PostList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.base}>
        <Text style={styles.header}>Lager-Appen</Text>
        <Image source={warehouse} style={styles.image} />
        <Stock />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: '#003366',
    padding: 12,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 42,
    fontFamily: 'Verdana',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    minHeight: 200,
  }
});