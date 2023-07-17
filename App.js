import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import loginscreen from "./screens/loginscreen";
import registerscreen from "./screens/registerscreen";
import chatscreen from "./screens/chatscreen";

const Stack = createStackNavigator();

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={loginscreen} />
          <Stack.Screen name="Register" component={registerscreen} />
          <Stack.Screen name="Chat" component={chatscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
