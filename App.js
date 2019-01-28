import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card } from './utils/Card'

export default class App extends React.Component {
  
  state = {
    cards: []
  }
  
  createCard = () => {
    
    console.log(this.state.cards)
    let newCard = new Card('0', 'What\'s your name?', 'Felipe', 'General')
    let newCards = this.state.cards
    newCards.push(newCard)
    this.setState({
      cards: newCards
    })
    console.log(this.state.cards)
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Click" onPress={this.createCard}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
