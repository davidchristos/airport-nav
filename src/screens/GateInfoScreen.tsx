import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, List, Chip, Divider } from 'react-native-paper';

const GateInfoScreen = () => {
  // Example gate information
  const gateInfo = {
    gateNumber: 'B12',
    terminal: 'Terminal 2',
    status: 'Active',
    currentFlight: 'AA1234',
    walkingTime: '8 min',
    amenities: ['Charging Stations', 'Seating Area', 'Water Fountain'],
    nextFlights: [
      { flight: 'AA1234', destination: 'New York (JFK)', time: '14:30' },
      { flight: 'AA1456', destination: 'Chicago (ORD)', time: '16:45' },
      { flight: 'AA1789', destination: 'Miami (MIA)', time: '18:20' },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Gate {gateInfo.gateNumber}</Title>
          <Paragraph>{gateInfo.terminal}</Paragraph>
          <View style={styles.chipContainer}>
            <Chip mode="outlined" style={styles.chip}>
              Status: {gateInfo.status}
            </Chip>
            <Chip mode="outlined" style={styles.chip}>
              Walking Time: {gateInfo.walkingTime}
            </Chip>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Amenities Nearby</Title>
          <View style={styles.amenitiesContainer}>
            {gateInfo.amenities.map((amenity, index) => (
              <Chip key={index} style={styles.amenityChip}>
                {amenity}
              </Chip>
            ))}
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Upcoming Flights</Title>
          {gateInfo.nextFlights.map((flight, index) => (
            <React.Fragment key={index}>
              <List.Item
                title={flight.flight}
                description={flight.destination}
                right={() => <Paragraph>{flight.time}</Paragraph>}
              />
              {index < gateInfo.nextFlights.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  chipContainer: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 8,
  },
  chip: {
    marginRight: 8,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 8,
  },
  amenityChip: {
    marginRight: 8,
    marginBottom: 8,
  },
});

export default GateInfoScreen;
