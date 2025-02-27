import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Surface, Title, Searchbar } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <Title style={styles.title}>Welcome to Airport Navigator</Title>
        
        <Searchbar
          placeholder="Search flights or airports"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('FlightTracking')}
            style={styles.button}
          >
            Track Flight
          </Button>

          <Button
            mode="contained"
            onPress={() => navigation.navigate('AirportMap')}
            style={styles.button}
          >
            Airport Map
          </Button>

          <Button
            mode="contained"
            onPress={() => navigation.navigate('GateInfo')}
            style={styles.button}
          >
            Gate Information
          </Button>
        </View>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  surface: {
    padding: 16,
    elevation: 4,
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  searchBar: {
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    marginVertical: 8,
  },
});

export default HomeScreen;
