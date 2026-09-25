import { useState } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { FlatList, Text, TextInput, View } from "react-native"

const productos = [
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Mouse", price: 80 },
    { id: 3, name: "Teclado", price: 50 },
    { id: 4, name: "Monitor", price: 1200 },
    { id: 5, name: "Audífonos", price: 250 },
    { id: 6, name: "Webcam", price: 180 },
    { id: 7, name: "Impresora", price: 900 },
    { id: 8, name: "Router", price: 320 },
    { id: 9, name: "Disco SSD", price: 450 },
    { id: 10, name: "Cargador", price: 120 }
]

export default function BuscarProductos() {
    const [query, setQuery] = useState(""); //nombre del producto
    const [minPrice, setMinPrice] = useState(""); // precio del producto

    //Filtrar el nombre del producto
    const filtrarNombre = productos.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

    //Filtra el precio del prodcuto
    const filtrarPrecio = productos.filter((p) => minPrice ? p.price >= parseInt(minPrice) : true);
                   
    //Limpia los campos de los inputs
    const limpiar = () => {
        setQuery(""); //limpia input de producto
        setMinPrice(""); //limpia input de precio
    }

    return(
        //1ra sección: Buscar productos por nombre
        //2da sección: Buscar productos por precio
        <View>
            <TextInput
            style={styles.input}
            value={query}
            onChangeText={setQuery}
            placeholder="Buscar producto..."></TextInput>

            <View style={styles.contenedor_btn}>
                <TouchableOpacity onPress={limpiar} style={styles.btnProd}>
                    <Text style={{color: "white"}}>Limpiar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
            style={{marginBottom: 50}}
            data={filtrarNombre}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Text style={{textAlign: "center"}}>
                    {item.name} - S/. {item.price}
                </Text>
            )}>
            </FlatList>

            <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={minPrice}
            onChangeText={setMinPrice}
            placeholder="Buscar el precio..."></TextInput>

            <View style={styles.contenedor_btn}>
                <TouchableOpacity onPress={limpiar} style={styles.btnPrice}>
                    <Text style={{color: "white"}}>Limpiar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
            data={filtrarPrecio}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Text style={{textAlign: "center"}}>
                    {item.name} - S/. {item.price}
                </Text>
            )}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create(({
    input: {
        borderWidth: 1,
        padding: 7,
        borderRadius: 7,
        marginBottom: 20,
    },

    contenedor_btn: {
        justifyContent: "center",
        alignItems: "center"
    },

    btnProd: {
        marginBottom: 25,
        backgroundColor: "blue",
        borderWidth: 1,
        borderRadius: 7,
        padding: 7,
    },

    btnPrice: {
        marginBottom: 25,
        backgroundColor: "red",
        borderWidth: 1,
        borderRadius: 7,
        padding: 7
    }
}))