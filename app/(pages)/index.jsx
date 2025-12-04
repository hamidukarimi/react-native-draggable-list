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
          { backgroundColor: isActive ? "#d1d1d1" : "#f2f2f2" },
        ]}
      >
        <Text style={styles.label}>{item.label}</Text>

        {/* Drag Icon */}
        <TouchableOpacity
          onLongPress={drag}
          delayLongPress={120}
          hitSlop={10} // bigger touch area for better UX
        >
          <Feather name="menu" size={22} color="#333" />
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
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  itemContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
});
