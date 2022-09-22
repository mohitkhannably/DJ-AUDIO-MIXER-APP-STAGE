import * as React from 'react';
import { Text, View, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from './DJButton';
import AppHeader from './AppHeader';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3"
            text="WELL COME ALL "
            bgcolor="gold"
          />
          </View>

          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="http://soundbible.com/mp3/labrador-barking-daniel_simon.mp3"
            text="CLICK ME"
            bgcolor="gold"
          />
          </View>
          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3"
            text="OPEN ME"
            bgcolor="gold"
          />
            <DJButton
            uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3"
            text="END ME"
            bgcolor="gold"
          />
        </View>
        <View style={styles.stopButtonContainer}>
          <TouchableOpacity
            style = {styles.stopButton} 
            onPress={()=>{
              Audio.setIsEnabledAsync(true);
            }}
            >
            <Text>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   stopButtonContainer : {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    marginTop:30
  },
   musicButtonContainer : {
    alignItems:'STOP',   
  },
  stopButton :{
    width: '80%',
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 30,
    backgroundColor : 'red',
    borderWidth:2,
    borderColor : 'rgba(0,0,0,0.1)',
  }
});

