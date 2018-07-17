import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    marginTop: 35,
    alignSelf: "center"
  },
  container: {
    flexDirection: "row",

    paddingLeft: 20,
    paddingRight: 50
  },
  upArrow: {
    tintColor: "#4de289"
  },
  downArrow: {
    tintColor: "#f3747d"
  },
  textContainer: {
    justifyContent: "space-evenly"
  },
  text: {
    color: "#ffff",
    fontWeight: "500"
  }
});

export default styles;
