import React, { Component } from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { createNewDeck, DECKS_KEY } from '../utils/api'

class AddDeck extends Component{

    state = {
        deckTitle: '',
        deckAdded: false,
        deck: {}
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Add New Deck',
        }
    }

    onChangeTitle = title => {
        this.setState({
            deckTitle: title
        })
    }

    onSaveDeck = () => {
        let title = this.state.deckTitle
        let updateDecks = this.props.navigation.getParam('updateDecks')
        
        createNewDeck(this.state.deckTitle, updateDecks)
        .then(response => {
            let decks = JSON.parse(response)
            let newDeck = { deck_name: title, cards: [] }
            decks.push(newDeck)
            AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
                .then(response => {
                    updateDecks()
                    this.props.navigation.navigate('Deck', { deck: newDeck, updateDecks: updateDecks, gamePlayed: this.props.navigation.getParam('gamePlayed') })
                })
        })
        
        this.setState({
            deckAdded: true
        })
    }

    render(){
        return(
            this.state.deckAdded === false ? (
                <View>
                    <Text h3 style={{ margin: 10, textAlign: 'center' }}>New Deck</Text>
                    <Input placeholder='Title' onChangeText={title => this.onChangeTitle(title)} value={this.deckTitle} />
                    <Button title="Save Deck" style={style.button} onPress={this.onSaveDeck}></Button>
                </View>
            ) : (
                <View>
                    <Text h3 style={{textAlign: 'center', margin: 10}}>Deck Added :)</Text>
                </View>
            )
        )
    }
}

const style = StyleSheet.create({
    button: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20
    }
})

export default AddDeck