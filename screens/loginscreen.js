import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

function loginscreen({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  useEffect(() => {
    const unsubscibe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Chat");
      } else {
        // User is signed out
        // ...
        navigation.canGoBack() && navigation.popToTop();
      }
    });

    return unsubscibe;
  }, []);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setemail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setpassword(text)}
        secureTextEntry
      />
      <Button title="Sign In" onPress={signIn} buttonStyle={styles.button} />
      <Button
        title="Register"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

export default loginscreen;

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
