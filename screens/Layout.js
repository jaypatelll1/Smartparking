import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PARKING_SPOTS_URL = '/';

const Layout = () => {
  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    
    fetch(PARKING_SPOTS_URL)
      .then(response => response.json())
      .then(data => setParkingSpots(data))
      .catch(error => console.error(error));
  }, []);

  const renderParkingSpot = (isOccupied) => {
    const spotStyle = isOccupied ? styles.parkedCarSpot : styles.emptyCarSpot;
    const spotText = isOccupied ? 'Occupied' : 'Vacant';
    return (
      <View style={spotStyle}>
        <Text style={styles.parkingSpotText}>{spotText}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Parking System</Text>
      <View style={styles.parkingRow}>
        {parkingSpots.length > 0 && renderParkingSpot(parkingSpots[0])}
        {parkingSpots.length > 1 && renderParkingSpot(parkingSpots[1])}
        {parkingSpots.length > 2 && renderParkingSpot(parkingSpots[2])}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  parkingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emptyCarSpot: {
    width: 80,
    height: 80,
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  parkedCarSpot: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  parkingSpotText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Layout;
