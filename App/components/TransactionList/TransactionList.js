import React from "react";
import PropTypes from "prop-types";
import { Text, View, SectionList, ScrollView } from "react-native";
import { ListItem, List } from "react-native-elements";
import styles from "./styles";

const TransactionList = props => {
  keyExtractor = (item, index) => index;
  renderItem = ({ item }) => (
    <ListItem
      roundAvatar
      title={item.name}
      titleNumberOfLines={0}
      subtitle={
        <View style={styles.subtitleView}>
          <Text style={styles.text}>{item.date.toString()}</Text>
        </View>
      }
      avatar={require("./images/receipt.png")}
      hideChevron={true}
      containerStyle={styles.container}
      titleStyle={{ color: "#fff" }}
      rightTitle={"$" + item.amount.toString()}
      rightTitleStyle={[
        styles.right,
        item.type === "Income" ? { color: "#4de289" } : { color: "#f3747d" }
      ]}
    />
  );
  return (
    <View style={styles.rootContainer}>
      <SectionList
        renderItem={this.renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold", color: "#fff", paddingLeft: 15 }}>
            {title}
          </Text>
        )}
        sections={[{ title: props.title, data: props.data }]}
        keyExtractor={this.keyExtractor}
      />
    </View>
  );
};

TransactionList.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};

export default TransactionList;
