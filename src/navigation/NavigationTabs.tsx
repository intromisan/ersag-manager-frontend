import { StyleSheet, useWindowDimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CatalogScreen from "../screens/CatalogScreen";
import CartScreen from "../screens/CartScreen";
import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  const { height } = useWindowDimensions();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          right: 20,
          bottom: height * 0.03,
          left: 20,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.borderColor,
          borderTopWidth: 1,
          borderTopColor: COLORS.borderColor,
          borderRadius: 15,
          height: height * 0.085,
          paddingBottom: 10,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName:
            | "home"
            | "shopping-cart"
            | "book-open"
            | "user"
            | undefined = undefined;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Cart") {
            iconName = "shopping-cart";
          } else if (route.name === "Catalog") {
            iconName = "book-open";
          } else if (route.name === "Account") {
            iconName = "user";
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.textLight,
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ title: "Главная" }}
        component={HomeScreen}
      />
      {/* <Tab.Screen name="Discover" component={DiscoverScreen} /> */}
      <Tab.Screen
        name="Catalog"
        options={{ title: "Каталог" }}
        component={CatalogScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{ title: "Инвентарь" }}
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};

export default NavigationTabs;
