import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";
function registerscreen({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        user
          .updateProfile({
            displayName: name,
            photoURL: imageUrl
              ? imageUrl
              : "https://www.trackergps.com/canvas/images/icons/avatar.jpg",
          })
          .then(() => {
            // Update successful
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        // ...
        navigation.popToTop();
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your name"
        label="name"
        leftIcon={{ type: "material", name: "badge" }}
        value={name}
        onChangeText={(text) => setname(text)}
      />
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
      <Input
        placeholder="Enter your image URL"
        label="profile picture"
        leftIcon={{ type: "material", name: "face" }}
        value={imageUrl}
        onChangeText={(text) => setimageUrl(text)}
      />
      <Button title="register" onPress={register} style={styles.buttons} />
    </View>
  );
}

export default registerscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  buttons: {
    width: 200,
    marginTop: 10,
  },
});
