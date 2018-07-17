import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 60,
    justifyContent: "space-between"
  },
  line: { color: "#626262", alignSelf: "center" },
  innerContainer: {
    marginLeft: -50
  },
  title: { color: "#fff", fontSize: 15 },
  input: {
    width: 200,
    height: 50,
    fontSize: 30,
    color: "cyan"
  },

  icon: {
    marginRight: 10,
    alignSelf: "center"
  },
  check: {
    marginRight: 20,
    alignSelf: "center"
  }
});

export default styles;
