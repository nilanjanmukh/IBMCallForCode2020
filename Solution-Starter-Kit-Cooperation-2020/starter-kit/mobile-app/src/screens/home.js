import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 75
  },
  image: {
    alignSelf: 'flex-start',
    height: '20%',
    width:'50%',
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 20
  },
  content: {
    fontFamily: 'IBMPlexSans-Light',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 15,
    width: 175
  },
  button: {
    backgroundColor: '#1062FE',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 15
  }
});

const Home = () => (
  <View style={styles.center}>
    <ScrollView style={styles.scroll}>
      <Image
        style={styles.image}
        source={require('../images/2020-cfc-512.png')}
      />
      <Text style={styles.subtitle}>CDE-GGM-CE</Text>
      <Text style={styles.title}>Empatheisers Community Collaboration</Text>
      <Text style={styles.content}>
        The COIV19 pandemic provides an unparalleled human crisis that only impacts peoples lives but also their livelihood. 
        While food and medicines are absolute essentials, the humanitarian crisis caused by loss of employment and sustenance 
        is equally massive. Our solution design aims to address this humanitarian crisis along the following lines:
      </Text>
      <Text style={styles.content}>
        Provide a platform to connect employers (production-house/rice mills/factories/warehouse owners etc) 
        short on manpower to workers willing to lend their assistance or provide paid service.
      </Text>
      <Text style={styles.content}>
        Suggest options to both employers and prospective workers about possible pros/cons of the available options.
      </Text>
      <Text style={styles.content}>
        Cross reference COVID heat-map and location details to rank the options with weighted score.
      </Text>
      
    </ScrollView>
  </View>
);

export default Home;
