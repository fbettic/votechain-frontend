import React from "react";
import { Text, View, StyleSheet, Button} from "react-native";



const HomeScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.terms}>Terminos y condiciones</Text>
			<View style={styles.button}>
				<Button title="Aceptar" onPress={ ()=> props.navigation.navigate("Vote")} />
			</View>
		</View>)
}


const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' },
	terms: { fontSize: 40, marginBottom: 8, color: 'black' }
});
export default HomeScreen;
