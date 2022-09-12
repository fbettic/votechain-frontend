import axios from "axios";
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Text,
  TouchableRipple,
  Avatar,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import { users, base_url } from "../constants/data";

const VoteOptionCard = (props) => {
  const handleVote = async () => {
    await axios
      .post(base_url + "vote", {
        option_id: props.id,
        username: users[0].username,
      })
      .then((rep) => {
        console.log(rep.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (

      <Card onPress={() => console.log("Pressed")} style={styles.container}>
				
        <Card.Title
          title={props.option.name}
          subtitle={'Partido: ' + props.option.group}

          left={(lprops) => (
            <Avatar.Image {...lprops} source={{ uri: props.option.image }} />
          )}
        />
        <Card.Content>
          <Paragraph>{props.option.description}</Paragraph>
        </Card.Content>
      </Card>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
		marginVertical:10,
		marginHorizontal:10
  },
  name: {},
  group: {},
});

export default VoteOptionCard;
