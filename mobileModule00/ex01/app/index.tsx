import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {
    const [initialState, setInitialState] = useState(true);

    const handlePress = () => {
        console.log("Button pressed");
        setInitialState(!initialState);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {initialState ? "A simple text" : "Hello World"}
            </Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Click me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        marginBottom: 5,
        backgroundColor: "darkgreen",
        borderRadius: 5,
        color: "white",
    },
    button: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 50,
        elevation: 5, // For Android: adds shadow/elevation
        shadowColor: "#000", // For iOS: shadow color
        shadowOffset: { width: 0, height: 2 }, // For iOS: shadow offset
        shadowOpacity: 0.8, // For iOS: shadow opacity
        shadowRadius: 3, // For iOS: shadow blur radius
    },
    buttonText: {
        color: "darkgreen",
        fontSize: 20,
    },
});
