import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 50,
    alignSelf: "center"
  },
  currencySymbol: {
    fontSize: 22,
    paddingTop: 8,
    marginRight: 5,
    color: "#ffff"
  },
  amount: {
    fontSize: 50,
    color: "#4de289"
  },
  currency: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingLeft: 10,
    color: "#ffff"
  }
});

export default styles;
