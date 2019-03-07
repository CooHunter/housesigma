import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import ClusteredMapView from 'react-native-maps-super-cluster'
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'

class GoogleMaps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectMarkerId: ''
    }
  }

  selectMarker = marker => () => {
    this.setState({
      selectMarkerId: marker.id_listing
    })
  }

  renderCluster = (cluster) => {
    return (
      <Marker coordinate={cluster.coordinate} identifier={`${cluster.clusterId}`}>
        <View style={styles.clusterContainer}>
          <Text style={styles.clusterText}>
            {cluster.pointCount}
          </Text>
        </View>
      </Marker>
    )
  }

  renderMarker = marker => {
    return (
      <Marker identifier={marker.id_listing} key={marker.id_listing} coordinate={marker.location} onPress={this.selectMarker(marker)}>
        <View style={[styles.markerContainer, this.state.selectMarkerId === marker.id_listing ? styles.highlight : null]}>
          <Text>{marker.house_type} {marker.price}</Text>
        </View>
      </Marker>
    )
  }

  render() {
    return (
      <ClusteredMapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        data={this.props.list}
        renderMarker={this.renderMarker}
        renderCluster={this.renderCluster}
        initialRegion={{latitude: 43.672073, longitude: -79.370331, latitudeDelta: 0.1, longitudeDelta: 0.1 }}
        showsMyLocationButton={true}
      >
      </ClusteredMapView>
    )
  }
}

const styles = StyleSheet.create({
  clusterContainer: {
    width: 30,
    height: 30,
    padding: 6,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    borderColor: 'orange',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  clusterText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center'
  },
  markerContainer: {
    borderRadius: 2,
    borderWidth: 1,
    padding: 2,
    borderColor: 'skyblue',
    backgroundColor: 'skyblue'
  },
  highlight: {
    borderColor: 'yellow',
    backgroundColor: 'yellow'
  }
})

export default GoogleMaps