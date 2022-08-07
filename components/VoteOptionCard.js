import axios from "axios";
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { users, base_url } from "../constants/data";

const VoteOptionCard = (props) => {
    

    const handleVote = async () => {
        await axios.post(base_url + "vote", {
            option_id: props.item.id,
            username: users[0].username,
        }).then((rep) => {
            console.log(rep.data);
        }).catch((err) => {
            console.log(err.response);
        }
        );
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.nameStyle}>{props.item.name}</Text>
            <Text style={styles.groupStyle}>{props.item.group}</Text>
            <View style={styles.buttonStyle}>
                <Button title="Votar" onPress={handleVote} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: { flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: "85%" },
    nameStyle: { fontSize: 25, marginBottom: 8, color: 'black' },
    groupStyle: { fontSize: 16, marginBottom: 8, color: 'black' },
    buttonStyle: { width: 300, height: 88, borderRadius: 5 }
});

export default VoteOptionCard;