import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, ActivityIndicator, List } from 'react-native-paper';

const FlightTrackingScreen = () => {
  // In a real app, we would fetch this data from an aviation API
  const flightInfo = {
    flightNumber: 'AA1234',
    status: 'On Time',
    departure: {
      airport: 'LAX',
      terminal: 'T4',
      gate: 'G45',
      scheduledTime: '10:30 AM',
      actualTime: '10:30 AM',
    },
    arrival: {
      airport: 'JFK',
      terminal: 'T8',
      gate: 'B12',
      scheduledTime: '6:45 PM',
      actualTime: '6:45 PM',
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Flight {flightInfo.flightNumber}</Title>
          <Paragraph style={styles.status}>Status: {flightInfo.status}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Departure</Title>
          <List.Item
            title={flightInfo.departure.airport}
            description="Airport"
          />
          <List.Item
            title={flightInfo.departure.terminal}
            description="Terminal"
          />
          <List.Item
            title={flightInfo.departure.gate}
            description="Gate"
          />
          <List.Item
            title={flightInfo.departure.scheduledTime}
            description="Scheduled Time"
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Arrival</Title>
          <List.Item
            title={flightInfo.arrival.airport}
            description="Airport"
          />
          <List.Item
            title={flightInfo.arrival.terminal}
            description="Terminal"
          />
          <List.Item
            title={flightInfo.arrival.gate}
            description="Gate"
          />
          <List.Item
            title={flightInfo.arrival.scheduledTime}
            description="Scheduled Time"
          />
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
  status: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FlightTrackingScreen;
