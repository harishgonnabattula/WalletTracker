import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";

const TextInput = props => {
  const { amount } = props;
  const amountStyle = [styles.amount];
  if (amount < 0) {
    amountStyle.push({ color: "#f3747d" });
  } else {
    if (amountStyle.length > 1) {
      amountStyle.pop();
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.currencySymbol}>$</Text>
      <Text style={amountStyle}>{Math.abs(amount).toFixed(2)}</Text>
      <Text style={styles.currency}>USD</Text>
    </View>
  );
};

TextInput.propType = {
  amount: PropTypes.number
};

export default TextInput;
