import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
	const [backendState, setBackendState] = useState(
		JSON.parse(
			`[{"name": "p1","isParked": true,"parkDuration": 134},{"name": "p2","isParked": true,"parkDuration": 400},{"name": "p3","isParked": false,"parkDuration": null}]`
		)
	);

	const [parkinginfo2, setparkinginfo2] = useState("vacant...");
	const [parkinginfo3, setparkinginfo3] = useState("vacant...");
	const [charginginfo, setcharginginfo] = useState("vacant...");
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
			<ChargingSpot state={backendState[0]} />
			<Text style={styles.headerText}>Parking Spots</Text>
			<Text style={styles.infoheaderText}></Text>
			<ParkingSpot state={backendState[1]} />
			<ParkingSpot state={backendState[2]} />
		</View>
	);
};

function ChargingSpot({ state }) {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		setMinutes(Math.floor(state.parkDuration / 60));
		setSeconds(state.parkDuration % 60);
	}, [state]);

	return (
		<>
			<Text style={styles.headerText}>Charging Spot</Text>
			<View
				style={
					state.isParked
						? styles.containerBorderOccupied
						: styles.containerBorder
				}
			>
				<Text style={styles.infoheaderText}>Spot</Text>
				<Text style={styles.infoText}>
					{state.isParked
						? `Occupied for ${minutes} minutes and ${seconds} seconds`
						: "Vacant"}
				</Text>
				<Text style={styles.infoText}>
					{state.isParked ? "Charging" : "Not Charging"}
				</Text>
			</View>
		</>
	);
}

function ParkingSpot({ state }) {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		setMinutes(Math.floor(state.parkDuration / 60));
		setSeconds(state.parkDuration % 60);
	}, [state]);

	return (
		<>
			<View
				style={
					state.isParked
						? styles.containerBorder1Occupied
						: styles.containerBorder1
				}
			>
				<Text style={styles.infoheaderText}>Spot {state.name[1]}</Text>
				<Text style={styles.infoText}>
					{state.isParked
						? `Occupied for ${minutes} minutes and ${seconds} seconds`
						: "Vacant"}
				</Text>
				{/* <Text style={styles.infoText}>
					{state.isParked ? "Charging" : "Not Charging"}
				</Text> */}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	infoText: {
		marginLeft: 5,
		marginTop: 8,
		fontSize: 18,
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
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	headerText: {
		fontSize: 26,
		fontWeight: "bold",
		marginBottom: 0,
		marginTop: 25,
	},
	containerBorder: {
		borderWidth: 1,
		borderColor: "#aca",
		borderRadius: 10,
		// height: 100,
		marginTop: 10,
		padding: 20,
	},
	containerBorderOccupied: {
		borderWidth: 1,
		borderColor: "#ebb",
		borderRadius: 10,
		// height: 100,
		marginTop: 10,
		padding: 20,
	},
	containerBorder1: {
		marginTop: 10,
		borderWidth: 1,
		borderColor: "#aca",
		borderRadius: 10,
		// height: 75,
		padding: 20,
	},
	containerBorder1Occupied: {
		marginTop: 10,
		borderWidth: 1,
		borderColor: "#ebb",
		borderRadius: 10,
		// height: 75,
		padding: 20,
	},
});

export default Home;
