import { useState } from "react";
import { Pressable, Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
    const [result, setResult] = useState("0");
    const [input, setInput] = useState("0");

    const handlePress = (button: string) => {
        if (button === "=") {
            doOperation();
        } else if (button === "C") {
            if (input === "0" || input.length === 1) {
                setInput("0");
                return;
            }
            setInput(input.slice(0, -1));
        } else if (button === "AC") {
            setInput("0");
            setResult("0");
        } else if (button === "0" || button === "00") {
            if (input === "0") {
                setInput("0");
                return;
            }
            setInput((prevInput) => (prevInput == "0" ? button : prevInput + button));
        } else if (button === ".") {
            const lastChar = input[input.length - 1];
            let lastCharIndex = input.length - 1;
            if (["+", "-", "*", "/"].includes(lastChar)) {
                setInput((prevInput) => (prevInput == "0" ? button : prevInput + "0" + button));
                return;
            } else if (["."].includes(lastChar)) {
                return;
            }
            while (lastCharIndex >= 0 && input[lastCharIndex].match(/[0-9]/)) {
                lastCharIndex--;
            }
            if (input[lastCharIndex] === ".") {
                return;
            }
            setInput((prevInput) => prevInput + button);
        } else {
            setInput((prevInput) => (prevInput == "0" ? button : prevInput + button));
        }
    };

    const doOperation = () => {
        try {
            const calculatedResult = eval(input);
            setResult(calculatedResult.toString());
            setInput("0");
        } catch (error) {
            setResult("Error: " + error);
        }
    };

    return (
        <>
            <View style={[styles.container]}>
                <Text style={[styles.text, { paddingBottom: 20, textAlign: "right" }]}>{input}</Text>
                <Text style={[styles.text, { textAlign: "right" }]}>{result}</Text>
            </View>
            <View style={[styles.container, { backgroundColor: "#3265b8" }]}>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <Pressable style={styles.button} onPress={() => handlePress("7")}>
                            <Text style={styles.text}>7</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("8")}>
                            <Text style={styles.text}>8</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("9")}>
                            <Text style={styles.text}>9</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("C")}>
                            <Text style={styles.text}>C</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("AC")}>
                            <Text style={styles.text}>AC</Text>
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        <Pressable style={styles.button} onPress={() => handlePress("4")}>
                            <Text style={styles.text}>4</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("5")}>
                            <Text style={styles.text}>5</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("6")}>
                            <Text style={styles.text}>6</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("+")}>
                            <Text style={styles.text}>+</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("-")}>
                            <Text style={styles.text}>-</Text>
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        <Pressable style={styles.button} onPress={() => handlePress("1")}>
                            <Text style={styles.text}>1</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("2")}>
                            <Text style={styles.text}>2</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("3")}>
                            <Text style={styles.text}>3</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("*")}>
                            <Text style={styles.text}>x</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("/")}>
                            <Text style={styles.text}>/</Text>
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        <Pressable style={styles.button} onPress={() => handlePress("0")}>
                            <Text style={styles.text}>0</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress(".")}>
                            <Text style={styles.text}>.</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("00")}>
                            <Text style={styles.text}>00</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handlePress("=")}>
                            <Text style={styles.text}>=</Text>
                        </Pressable>
                        <View style={styles.button}></View>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "stretch",
        justifyContent: "flex-start",
        padding: 16,
        paddingHorizontal: 40,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    column: {
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    },
    text: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
    },
    button: {
        width: 36,
        height: 36,
    },
});
