import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PARKING_SPOTS_URL = "/";

const Layout = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={require("../assets/map.png")} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		justifyContent: "center",
		alignItems: "center",
    backgroundColor: "#fff",
	},
	img: {
		width: 350,
		height: 420,
    marginTop: -40,
	},
});

export default Layout;
