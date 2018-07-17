import React from "react";
import PropTypes from "prop-types";
import { Header } from "react-native-elements";
import styles from "./styles";

const AppHeader = props => {
  return (
    <Header
      backgroundColor={styles.$bgColor}
      leftComponent={{
        icon: "insert-chart",
        color: "#fff",
        onPress: props.onLeftButtonPress,
        underlayColor: "transparent"
      }}
      centerComponent={{
        text: "MyWallet",
        style: styles.centerComponent
      }}
      rightComponent={{
        icon: "add",
        color: "#fff",
        onPress: props.onRightButtonPress,
        underlayColor: "transparent"
      }}
      statusBarProps={{ barStyle: "light-content" }}
      outerContainerStyles={styles.outerContainer}
    />
  );
};

AppHeader.propTypes = {
  onRightButtonPress: PropTypes.func,
  onLeftButtonPress: PropTypes.func
};

export default AppHeader;
