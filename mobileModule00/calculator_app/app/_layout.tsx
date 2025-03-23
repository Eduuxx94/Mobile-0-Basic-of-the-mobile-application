import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#3265b8" },
                headerTintColor: "white",
                headerTitle: "Calculator",
            }}
        />
    );
}
