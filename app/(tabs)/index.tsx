import React, { useState } from "react"
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"

export default function HomeScreen() {
  const [darkMode, setDarkMode] = useState(false)
  const [search, setSearch] = useState("")

  const themeStyles = darkMode ? darkStyles : styles

  // Status bar color
  React.useEffect(() => {
    StatusBar.setBarStyle(darkMode ? "light-content" : "dark-content")
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(darkMode ? "#181818" : "#fff")
    }
  }, [darkMode])

  return (
    <SafeAreaView style={themeStyles.safeArea}>
      <View style={themeStyles.container}>
        <TouchableOpacity
          style={themeStyles.modeSwitch}
          onPress={() => setDarkMode((prev) => !prev)}
        >
          <Text style={themeStyles.modeSwitchText}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Text>
        </TouchableOpacity>
        <Text style={themeStyles.logo}>Cidian</Text>
        <Text style={themeStyles.hanzi}>词典</Text>
        <Text style={themeStyles.subtitle}>Chinese-English dictionary</Text>
        <TextInput
          style={themeStyles.input}
          placeholder="Search..."
          placeholderTextColor={darkMode ? "#aaa" : "#888"}
          value={search}
          onChangeText={setSearch}
        />
        <View style={themeStyles.results} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 12 : 12,
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 32,
    letterSpacing: 2,
    color: "#222",
  },
  hanzi: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#222",
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#444",
    marginBottom: 32,
  },
  input: {
    width: "100%",
    maxWidth: 400,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 18,
    marginBottom: 24,
    color: "#222",
    backgroundColor: "#fff",
  },
  results: {
    width: "100%",
    maxWidth: 400,
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  modeSwitch: {
    alignSelf: "flex-end",
    marginBottom: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#f0f0f0",
  },
  modeSwitchText: {
    color: "#333",
    fontSize: 16,
  },
})

const darkStyles = StyleSheet.create({
  ...styles,
  safeArea: {
    ...styles.safeArea,
    backgroundColor: "#181818",
  },
  logo: {
    ...styles.logo,
    color: "#fff",
  },
  hanzi: {
    ...styles.hanzi,
    color: "#fff",
  },
  subtitle: {
    ...styles.subtitle,
    color: "#ccc",
  },
  input: {
    ...styles.input,
    backgroundColor: "#222",
    color: "#fff",
    borderColor: "#444",
  },
  results: {
    ...styles.results,
    backgroundColor: "#222",
    borderColor: "#333",
  },
  modeSwitch: {
    ...styles.modeSwitch,
    backgroundColor: "#222",
  },
  modeSwitchText: {
    ...styles.modeSwitchText,
    color: "#fff",
  },
})
