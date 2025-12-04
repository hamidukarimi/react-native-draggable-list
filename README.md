# React Native Draggable List

A simple, clean, and customizable **draggable sortable list** built using `react-native-draggable-flatlist`. This component gives you a modern mobile UI pattern with a dedicated **drag handle**, smooth reordering, and easy integration into any React Native project.

Perfect for:

* Settings screens
* Todo lists
* Reorderable menus
* Category sorting
* Any list that needs drag-and-drop functionality

---

## ✨ Features

* 🚀 Smooth drag & drop interactions
* 🎯 Drag handle icon for accurate control
* 📱 Clean React Native UI
* ⚡ Fast & lightweight
* 🧩 Simple API
* 🌙 Easy to customize styles, icons, layout

---

## 📸 Demo

(Add a GIF or screenshot here)

```
/assets/demo.gif
```

---

## 📦 Installation

```sh
npm install react-native-draggable-flatlist react-native-vector-icons
```

Or with yarn:

```sh
yarn add react-native-draggable-flatlist react-native-vector-icons
```

---

## 🧠 Usage Example

Here is a clean, production-ready draggable list using a drag handle icon:

```jsx
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
        style=[
          styles.itemContainer,
          { backgroundColor: isActive ? "#d1d1d1" : "#f2f2f2" }
        ]
      >
        <Text style={styles.label}>{item.label}</Text>

        <TouchableOpacity onLongPress={drag} hitSlop={10}>
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
```

---

## 🔖 GitHub Topics (recommended for SEO)

Add these tags to your repo:

```
react-native
react-native-component
react-native-ui
draggable
draggable-list
sortable-list
react-native-draggable-list
flatlist
draggable-flatlist
drag-and-drop
mobile-ui
```

---

## 📁 Project Structure

```
react-native-draggable-list/
├── src/
│   └── DraggableList.js (optional if making reusable component)
├── example/
│   └── App.js
├── assets/
│   └── demo.gif
└── README.md
```

---

## 🚀 Roadmap / Future Improvements

* Add more drag handle icon sets
* Add animated demo GIF
* Add TypeScript version
* Provide reusable component wrapper
* Add dark mode

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a PR.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you like this project, consider giving it a **star** ⭐ to help others find it!

---

Made with ❤️ using React Native.
