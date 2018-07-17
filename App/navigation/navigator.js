import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import Dashboard from "../screens/Dashboard";
import AddExpense from "../screens/AddExpense";
import Profile from "../screens/Profile";
import Calendar from "../screens/Calendar";
import ExpenseGraph from "../screens/ExpenseGraph";

const DashboardNavigator = createStackNavigator(
  {
    Dashboard: Dashboard,
    AddExpense: AddExpense,
    Calendar: Calendar,
    Analytics: ExpenseGraph
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const navigation = createBottomTabNavigator(
  {
    DashboardScreen: DashboardNavigator,
    ProfileScreen: Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "DashboardScreen") {
          iconName = `ios-cash${focused ? "" : "-outline"}`;
        } else if (routeName === "ProfileScreen") {
          iconName = `ios-person${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),

    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "#1E212A"
      },
      showLabel: false
    }
  }
);

export default navigation;
