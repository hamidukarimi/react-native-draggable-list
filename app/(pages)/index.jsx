import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import Feather from "react-native-vector-icons/Feather";

export default function SimpleDraggableList() {
  const [data, setData] = useState([
    { key: "1", label: "Item 1" },
    { key: "2", label: "Item 2" },
    { key: "3", label: "Item 3" },
    { key: "4", label: "Item 4" },
    { key: "5", label: "Item 5" },
  ]);

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <View
        style={[
          styles.itemContainer,
          {
            backgroundColor: isActive ? "#2e2e2e" : "#1e1e1e",
            transform: [{ scale: isActive ? 1.02 : 1 }],
            shadowOpacity: isActive ? 0.4 : 0.2,
          },
        ]}
      >
        <Text style={styles.label}>{item.label}</Text>

        {/* Drag Icon */}
        <TouchableOpacity
          onLongPress={drag}
          delayLongPress={120}
          hitSlop={10}
        >
          <Feather name="menu" size={22} color="#bbb" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onDragEnd={({ data }) => setData(data)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000", // Full dark background
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  itemContainer: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3, // Android shadow
  },
  label: {
    fontSize: 17,
    fontWeight: "600",
    color: "#f5f5f5",
  },
});
