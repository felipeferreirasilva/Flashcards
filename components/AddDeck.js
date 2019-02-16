import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { createNewDeck } from '../utils/api'

class AddDeck extends Component{

    state = {
        deckTitle: '',
        deckAdded: false
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