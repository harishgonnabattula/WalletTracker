import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  rootContainer: {
    marginTop: 30,
    marginBottom: 0,
    flex: 1
  },
  container: {
    backgroundColor: "$theme"
  },
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5
  },
  text: {
    color: "#fff"
  },
  right: { color: "#f3747d", fontWeight: "bold", fontSize: 18 }
});

export default styles;
