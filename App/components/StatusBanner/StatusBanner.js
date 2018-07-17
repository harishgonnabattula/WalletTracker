import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const StatusBanner = props => {
  const { income, expense } = props;
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Image
          source={require("./images/up-arrow.png")}
          style={styles.upArrow}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Income</Text>
          <Text style={styles.text}>${income} USD</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          source={require("./images/down-arrow.png")}
          style={styles.downArrow}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Expense</Text>
          <Text style={styles.text}>${expense} USD</Text>
        </View>
      </View>
    </View>
  );
};
export default StatusBanner;
