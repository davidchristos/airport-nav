import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FAB, Portal, Modal, Card, Title, Paragraph } from 'react-native-paper';

const AirportMapScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  // Example airport location (LAX)
  const initialRegion = {
    latitude: 33.9416,
    longitude: -118.4085,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const points = [
    { id: 1, title: 'Terminal 1', coordinate: { latitude: 33.9416, longitude: -118.4085 }, type: 'terminal' },
    { id: 2, title: 'Security Checkpoint', coordinate: { latitude: 33.9420, longitude: -118.4080 }, type: 'security' },
    { id: 3, title: 'Food Court', coordinate: { latitude: 33.9410, longitude: -118.4090 }, type: 'amenity' },
  ];

  const showLocationDetails = (location) => {
    setSelectedLocation(location);
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {points.map((point) => (
          <Marker
            key={point.id}
            coordinate={point.coordinate}
            title={point.title}
            onPress={() => showLocationDetails(point)}
          />
        ))}
      </MapView>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={styles.modal}
        >
          {selectedLocation && (
            <Card>
              <Card.Content>
                <Title>{selectedLocation.title}</Title>
                <Paragraph>Type: {selectedLocation.type}</Paragraph>
                {/* Add more details as needed */}
              </Card.Content>
            </Card>
          )}
        </Modal>
      </Portal>

      <FAB
        style={styles.fab}
        icon="layers"
        onPress={() => {}}
        label="Change Floor"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default AirportMapScreen;
