import React from 'react';
import { WebView, StyleSheet} from 'react-native';

export default class App extends React.Component {
  render() {
    
    return (
      <WebView style={styles.container} 
      //example site
      source={{uri: 'https:/www.google.com/'}}
      style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
});