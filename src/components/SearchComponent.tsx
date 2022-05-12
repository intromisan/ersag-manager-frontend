import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { COLORS } from "../constants";

const SearchComponent = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <TextInput style={styles.searchInput} />
        <Feather
          style={styles.searchInputIcon}
          name="search"
          size={24}
          color={COLORS.accent}
        />
      </View>
      <Pressable>
        <View style={styles.filterContainer}>
          <Feather name="filter" size={24} color={COLORS.white} />
        </View>
      </Pressable>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  searchContainer: {
    marginBottom: 20,
    height: 50,
    flexDirection: "row",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 3,
  },
  searchInputIcon: {
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 20,
  },
  filterContainer: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: COLORS.accent,
    borderRadius: 3,
  },
});
