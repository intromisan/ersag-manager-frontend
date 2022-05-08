import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CatalogScreen from "../screens/CatalogScreen";
// import RemindersScreen from "../screens/RemindersScreen";
// import DiscoverScreen from "../screens/DiscoverScreen";
// import AccountScreen from "../screens/AccountScreen";
// import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          right: 20,
          bottom: 25,
          left: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 70,
          paddingBottom: 0,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: "home" | "bell" | "search" | "user" | undefined =
            undefined;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Reminders") {
            iconName = "bell";
          } else if (route.name === "Catalog") {
            iconName = "search";
          } else if (route.name === "Account") {
            iconName = "user";
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Reminders" component={RemindersScreen} /> */}
      {/* <Tab.Screen name="Discover" component={DiscoverScreen} /> */}
      <Tab.Screen name="Catalog" component={CatalogScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTabs;

const style = StyleSheet.create({
  tabNavigation: {},
});
