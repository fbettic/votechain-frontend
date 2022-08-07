import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { users } from "../constants/data";


const LoginScreen = (props) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		if (userName === users[0].username && password === users[0].password) {
			console.log("Login Successful");
			props.navigation.navigate("Terms");
		} else {
			console.log("Login Failed");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>Bienvenido a</Text>
			<Text style={styles.votechain}>VoteChain</Text>
			<TextInput style={styles.input} placeholder="Usuario" onChangeText={(value) => { setUserName(value) }} />
			<TextInput style={styles.input} placeholder="Contraseña"  onChangeText={(value) => { setPassword(value) }}/>
			<View style={styles.button}>
				<Button title="Iniciar Sesión" onPress={ ()=>handleLogin()} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' },
	welcome: { fontSize: 40, marginBottom: 8, color: 'black' },
	votechain: { fontSize: 80, marginBottom: 8, color: 'black' },
	input: { width: 200, height: 44, padding: 8, borderWidth: 1, borderColor: 'grey', marginBottom: 10, borderRadius: 5 },
	button: { width: 200, height: 88, borderRadius: 5 }
});

//black mintcream orangered
export default LoginScreen;