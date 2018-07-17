import React, { Component } from "react";
import PropTypes from "prop-types";
import { Calendar } from "react-native-calendars";

export default class CalendarsScreen extends Component {
  static propTypes = {
    naigation: PropTypes.object
  };

  onDayPress = calendar => {
    const { navigation } = this.props;
    navigation.goBack(null);
    navigation.state.params.onDate(calendar);
  };

  render() {
    return (
      <Calendar onDayPress={this.onDayPress} hideExtraDays showWeekNumbers />
    );
  }
}
