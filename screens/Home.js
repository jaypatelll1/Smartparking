import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const [parkinginfo1, setparkinginfo1] = useState("vacant...");
  const [parkinginfo2, setparkinginfo2] = useState("vacant...");
    const [charginginfo, setcharginginfo]= useState("vacant...")
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.viewLayoutButton}
        onPress={() => {
          navigation.navigate("Layout");
        }}
      >
        <Text style={styles.viewLayoutButtonText}>View Layout</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>Charging Spot</Text>
      <View style={styles.containerBorder}>
      <Text style={styles.infoText}>{charginginfo}</Text>

      </View>
      <Text style={styles.headerText}>Parking Spots</Text>
      <Text style={styles.infoheaderText}></Text>
      <View style={styles.containerBorder1}>
        <Text style={styles.infoheaderText}>Spot 1</Text>
        <Text style={styles.infoText}>{parkinginfo1}</Text>
      </View>
      <View style={styles.containerBorder1}>
        <Text style={styles.infoheaderText}>Spot 2</Text>
        <Text style={styles.infoText}>{parkinginfo2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  infoText: {
    marginLeft: 5,
    marginTop: 8,
    fontSize: 15,
  },
  infoheaderText: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  viewLayoutButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 0,
  },
  viewLayoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 10,
  },
  containerBorder: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    height: 100,
    marginTop:10,
  },
  containerBorder1: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    height: 90,
  },
});

export default Home;
