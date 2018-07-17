import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

const rootContainer = ({ children }) => {
  return <View style={styles.root}>{children}</View>;
};

rootContainer.propTypes = {
  children: PropTypes.any
};
export default rootContainer;
