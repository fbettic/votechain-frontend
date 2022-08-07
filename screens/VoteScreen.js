import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, FlatList } from "react-native";
import VoteOptionCard from "../components/VoteOptionCard";
import axios from "axios";
import { base_url } from "../constants/data";

const VoteScreen = (props) => {
  const [voteOptions, setVoteOptions] = useState([]);

  useEffect(() => {
    const getVoteOptions = async () => {
      await axios
        .get(base_url + "options")
        .then((res) => {
            setVoteOptions(res.data);
        }).catch((err) => {
            console.log(err.response);
        });
    }
    getVoteOptions();
  }, []);

  const handleList = (list) => {
    setVoteOptions(list);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Votación</Text>
      <Text style={styles.title2}>
        ¿Quién será el próximo presidente de Argentina?
      </Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={voteOptions}
          renderItem={({ item }) => <VoteOptionCard item={item} />}
        />
      </SafeAreaView>
      {console.log(voteOptions)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  lsit: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title1: { fontSize: 40, marginBottom: 8, color: "black" },
  title2: { fontSize: 30, marginBottom: 8, color: "black" },
});

export default VoteScreen;
