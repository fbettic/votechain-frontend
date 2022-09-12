import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import { FlatList } from "react-native";
import VoteOptionCard from "../../../components/VoteOptionCard";
import { getVoteOptions } from "../../../services/options";
import styles from "./styles";

const Vote = (props) => {
  const [voteOptions, setVoteOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOptions = async () => {
      await getVoteOptions()
        .then((resp) => {
					//console.log(resp);
          setVoteOptions(resp);
          setLoading(false);
        })
        .catch((err) => {
          console.log("err>>>", err);
        });
    };
    loadOptions();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
					style={styles.list}
          data={voteOptions}
          renderItem={({ item }) => {
						return <VoteOptionCard option={item} />
					}}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default Vote;
