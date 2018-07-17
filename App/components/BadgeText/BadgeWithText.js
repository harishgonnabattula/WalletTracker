import React from "react";
import { Badge } from "react-native-elements";
import styles from "./styles";
const badgeText = "Current Balance";

const BadgeWithText = () => (
  <Badge
    value={badgeText}
    textStyle={styles.text}
    containerStyle={styles.container}
  />
);

export default BadgeWithText;
