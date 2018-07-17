import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { connectAlert } from "../components/Alert";
import { RootContainer } from "../components/RootCotainer";
import { Expense } from "../components/Expense";
import { Icon } from "react-native-elements";
import { addExpense, setDate, unsetDate } from "../actions/actions";
import moment from "moment";

// transactions: {
//   name: String(Description),
//   date: Date,
//   amount: Number,
//   type: String(Income, Expense),
//   category: [String]([food, meat, bill])
// }
const transaction = {
  category: [],
  type: "Expense",
  name: "",
  date: "",
  amount: 0
};
let datePlaceHolder = "";

class AddExpense extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    date: PropTypes.string,
    alertWithType: PropTypes.func
  };

  componentWillMount() {
    datePlaceHolder = moment(new Date()).format("MMM D, YYYY");
  }
  handleDate = () => {
    this.props.navigation.navigate("Calendar", {
      onDate: this.handleDateChange
    });
  };
  handleDateChange = dateVal => {
    datePlaceHolder = moment(dateVal.dateString).format("MMM D, YYYY");
    this.props.dispatch(setDate(datePlaceHolder));
    transaction.date = datePlaceHolder;
  };
  handleName = name => {
    transaction.name = name;
  };
  handleAmount = amount => {
    transaction.amount = amount;
  };

  handleType = type => {
    transaction.type = type ? "Expense" : "Income";
  };

  handleAddExpense = () => {
    if (
      transaction.name === "" ||
      transaction.amount == 0 ||
      transaction.date === ""
    ) {
      this.props.alertWithType(
        "error",
        "Warning!",
        "Please fill all the fields."
      );
    } else {
      this.props.dispatch(addExpense(transaction));
      this.props.navigation.goBack(null);
    }
  };

  render() {
    return (
      <RootContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView>
            <Expense
              title="DATE"
              isDate={true}
              onTextField={this.handleDateChange}
              onDate={this.handleDate}
              placeholder={datePlaceHolder}
              editable={false}
              value={this.props.date}
            />
            <Expense
              title="GIVE EXPENSE A NAME"
              onTextField={this.handleName}
              placeholder="Name"
              showCheckMark={true}
              onCheck={this.handleType}
            />

            <Expense
              title="AMOUNT"
              keyBoardType="numeric"
              onTextField={this.handleAmount}
              placeholder="$0"
            />
            <Icon
              name="check-circle"
              color="#ffc003"
              size={60}
              containerStyle={{
                alignSelf: "center",
                paddingTop: 100
              }}
              onPress={this.handleAddExpense}
              underlayColor="transparent"
            />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </RootContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    date: state.reducer.lastTransactionDate
  };
};

export default connect(mapStateToProps)(connectAlert(AddExpense));
