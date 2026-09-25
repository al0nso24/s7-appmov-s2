import { useState } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

const estudiantes = [
    { id: 1, nombre: "Ana Torres" },
    { id: 2, nombre: "Carlos Ramírez" },
    { id: 3, nombre: "Lucía Fernández" },
    { id: 4, nombre: "Diego Gutiérrez" },
    { id: 5, nombre: "María López" },
    { id: 6, nombre: "Jorge Sánchez" },
    { id: 7, nombre: "Valeria Castro" },
    { id: 8, nombre: "Andrés Paredes" },
    { id: 9, nombre: "Camila Rojas" },
    { id: 10, nombre: "Pedro Mendoza" }
]

export default function BuscarEstudiante() {
    const [nombre, setNombre] = useState(""); //nombre del estudiante

    //Buscar por nombre
    const buscarEstudiante = estudiantes.filter((e) => e.nombre.toLowerCase().includes(nombre.toLowerCase()));

    //Función para limpiar el input
    const limpiar = () => {
        setNombre("");
    }

    return(
        <View>
            <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}></TextInput>

            <View style={styles.container_btn}>
                <TouchableOpacity onPress={limpiar} style={styles.btn}>
                    <Text style={{color: "white"}}>Limpiar campo</Text>
                </TouchableOpacity>
            </View>

            <FlatList
            data={buscarEstudiante}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Text style={{textAlign: "center"}}>
                    {item.nombre}
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

    container_btn: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },

    btn: {
        backgroundColor: "purple",
        padding: 8,
        borderRadius: 7
    }
}))