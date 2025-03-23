import { Pressable, Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  const handlePress = (button: string) => {
    console.log("button pressed :", button);
  };

  return (
    <>
      <View style={[styles.container, { alignItems: "flex-end" }]}>
        <Text style={[styles.text, { paddingBottom: 20 }]}>0</Text>
        <Text style={styles.text}>0</Text>
      </View>
      <View style={[styles.container, { backgroundColor: "#3265b8" }]}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Pressable onPress={() => handlePress("7")}>
              <Text style={styles.text}>7</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("8")}>
              <Text style={styles.text}>8</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("9")}>
              <Text style={styles.text}>9</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("C")}>
              <Text style={styles.text}>C</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("AC")}>
              <Text style={styles.text}>AC</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable onPress={() => handlePress("4")}>
              <Text style={styles.text}>4</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("5")}>
              <Text style={styles.text}>5</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("6")}>
              <Text style={styles.text}>6</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("+")}>
              <Text style={styles.text}>+</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("-")}>
              <Text style={styles.text}>-</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable onPress={() => handlePress("1")}>
              <Text style={styles.text}>1</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("2")}>
              <Text style={styles.text}>2</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("3")}>
              <Text style={styles.text}>3</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("x")}>
              <Text style={styles.text}>x</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("/")}>
              <Text style={styles.text}>/</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable onPress={() => handlePress("0")}>
              <Text style={styles.text}>0</Text>
            </Pressable>
            <Pressable onPress={() => handlePress(".")}>
              <Text style={styles.text}>.</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("00")}>
              <Text style={styles.text}>00</Text>
            </Pressable>
            <Pressable onPress={() => handlePress("=")}>
              <Text style={styles.text}>=</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.text}></Text>
            </Pressable>
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
    width: 32,
    textAlign: "center",
  },
});
