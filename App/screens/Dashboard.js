import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RootContainer } from "../components/RootCotainer";
import { AppHeader } from "../components/Header";
import { BadgeWithText } from "../components/BadgeText";
import { TextInput } from "../components/Text";
import { StatusBanner } from "../components/StatusBanner";
import { TransactionList } from "../components/TransactionList";

// transactions: {
//   name: String(Description),
//   date: Date,
//   amount: Number,
//   type: String(Income, Expense),
//   category: [String]([food, meat, bill])
// }

class App extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    transactions: PropTypes.array
  };

  handleOnAddExpensePress = () => {
    this.props.navigation.navigate("AddExpense");
  };
  handleOnChartPress = () => {
    //this.props.navigation.navigate("Analytics");
  };

  render() {
    const currentBalance = this.props.income - this.props.expense;
    return (
      <RootContainer>
        <AppHeader
          onRightButtonPress={this.handleOnAddExpensePress}
          onLeftButtonPress={this.handleOnChartPress}
        />
        <BadgeWithText />
        <TextInput amount={currentBalance} />
        <StatusBanner income={this.props.income} expense={this.props.expense} />
        <TransactionList
          title="Transaction Detail"
          data={this.props.transactions}
        />
      </RootContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    transactions: state.reducer.transactions,
    income: state.reducer.income,
    expense: state.reducer.expense
  };
};

export default connect(mapStateToProps)(App);
