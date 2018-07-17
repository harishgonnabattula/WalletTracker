import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { CheckBox } from "native-base";

import styles from "./styles";

class ExpenseView extends Component {
  constructor(props) {
    super(props);
    this.state = { check: true };
  }

  static propTypes = {
    title: PropTypes.string,
    isDate: PropTypes.bool,
    showCurrency: PropTypes.bool,
    keyBoardType: PropTypes.string,
    onTextField: PropTypes.func,
    placeholder: PropTypes.string,
    onDateChange: PropTypes.func,
    onCheck: PropTypes.func
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.line}> ––– </Text>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#626262"
            selectionColor="cyan"
            keyboardType={this.props.keyBoardType}
            onChangeText={value => this.props.onTextField(value)}
            {...this.props}
          />
        </View>
        {this.props.isDate ? (
          <Icon
            color="#ffc003"
            name="date-range"
            containerStyle={styles.icon}
            onPress={this.props.onDate}
            underlayColor="transparent"
          />
        ) : null}
        {this.props.showCheckMark ? (
          <CheckBox
            checked={this.state.check}
            style={styles.check}
            color="#f3747d"
            onPress={() => {
              this.setState({ check: !this.state.check });
              this.props.onCheck(!this.state.check);
            }}
          />
        ) : null}
        {!this.props.showCheckMark && !this.props.isDate ? <Icon /> : null}
      </View>
    );
  }
}

export default ExpenseView;
