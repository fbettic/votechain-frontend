import React, { useState } from "react";
import { View } from "react-native";
import {
  Text,
  Button,
  TextInput,
  Avatar,
  Portal,
  Dialog,
  Paragraph,
} from "react-native-paper";
import styles from "./styles";
import { login } from "../../../services/login";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [cuit, setCuit] = useState(0);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await login(cuit, password)
      .then((res) => {
        console.log(res);
        setLoading(false);
        dispatch(setUser(res));
      })
      .catch((err) => {
        console.log("err>>" + err);
        setVisible(true);
        setLoading(false);
      });
  };

  const hideDialog = () => setVisible(false);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Avatar.Image
          style={styles.logo}
          size={128}
          source={require("../../../assets/Logo.png")}
        />
        <Text style={styles.votechain}>VoteChain</Text>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="CUIT"
            keyboardType="number-pad"
            onChangeText={(value) => {
              setCuit(value);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={!showPassword ? "eye" : "eye-off"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            onChangeText={(value) => {
              setPassword(value);
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            mode="contained"
            loading={loading}
            onPress={() => handleLogin()}
          >
            INGRESAR
          </Button>
        </View>
      </View>
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Lo siento</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Cuit y/o contraseña incorrectos</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
};

export default Login;
