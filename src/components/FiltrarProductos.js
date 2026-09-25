import { useState } from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const productos = [
  { id: 1, producto: "Laptop", precioProd: 4500 },
  { id: 2, producto: "Mouse", precioProd: 80 },
  { id: 3, producto: "Teclado", precioProd: 150 },
  { id: 4, producto: "Monitor", precioProd: 1200 },
  { id: 5, producto: "Audífonos", precioProd: 250 },
  { id: 6, producto: "Webcam", precioProd: 180 },
  { id: 7, producto: "Impresora", precioProd: 900 },
  { id: 8, producto: "Router", precioProd: 320 },
  { id: 9, producto: "Disco SSD", precioProd: 450 },
  { id: 10, producto: "Cargador", precioProd: 120 }
]

export default function FiltrarProductos() {
    const [precio, setPrecio] = useState(""); //precio del producto

    //Productos cuyo precio sea mayor o igual al valor ingresado
    const filtrarPrecio = productos.filter((p) => precio ? p.precioProd >= parseInt(precio):true)

    return(
        <View>
            <TextInput
            value={precio}
            onChangeText={setPrecio}
            keyboardType="numeric"
            style={styles.input}></TextInput>

            <FlatList
            //Recibe la lista filtrada
            data={filtrarPrecio}
            //Asigna una clave única a cada producto
            keyExtractor={(item) => item.id}
            //Renderiza cada producto en pantalla
            renderItem={({item}) => (
                <Text style={styles.txtProducto}>
                    {item.producto} - S/. {item.precioProd}
                </Text>
            )}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create(({
    input: {
        borderWidth: 1,
        padding: 7,
        borderRadius: 7,
        marginBottom: 20
    },

    txtProducto: {
        textAlign: "center"
    }
}))