import { StyleSheet, View } from 'react-native';
import BuscarProductos from './src/components/BuscarProducto';
import BuscarEstudiante from './src/components/BuscarEstudiante';
import FiltrarProductos from './src/components/FiltrarProductos';

export default function App() {
  return (
    <View style={styles.container}>
      <FiltrarProductos></FiltrarProductos>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    marginTop: 90,
    marginBottom: 60
  },
});
