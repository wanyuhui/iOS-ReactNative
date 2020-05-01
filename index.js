import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class RNPage extends React.Component {
  render() {
    const contents = this.props['name'];
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>这是一个固定文本</Text>
        <Text style={styles.scores}>{contents}</Text>
        {/* <Image source="https://facebook.github.ioassets/p_cat2.png" style={{width: 200, height: 200}}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// 整体js模块的名称
AppRegistry.registerComponent('RNPage', () => RNPage);
