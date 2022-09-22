import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>🎧 DJ WhiteHat 🎧 </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'gold',
    height:70,
    
  },
  text:{
    color: 'white',
    padding: 23,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
