import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { updateDeck } from '../utils/api'

class AddCard extends Component {

    state = {
        cardId: '',
        cardQuestion: '',
        cardAnswer: '',
        cardAdded: false
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Add New Card',
        }
    }

    onChangeQuestion = question => {
        this.setState({
            cardQuestion: question
        })
    }

    onChangeAnswer = answer => {
        this.setState({
            cardAnswer: answer
        })
    }

    onSaveCard = () => {
        let updateDecks = this.props.updateDecks
        let deck = this.props.deck
        let newCard = {
            id: deck.cards.length + 1,
            question: this.state.cardQuestion,
            answer: this.state.cardAnswer
        }
        updateDeck(deck.deck_name, newCard, updateDecks)
        this.setState({
            cardAdded: true
        })
    }

    render() {
        return (
            this.state.cardAdded === false ? (
                <View>
                    <Text h3 style={{ margin: 10, textAlign: 'center' }}>New Card</Text>
                    <Input placeholder='Question' onChangeText={question => this.onChangeQuestion(question)} value={this.cardQuestion} />
                    <Input placeholder='Answer' onChangeText={answer => this.onChangeAnswer(answer)} value={this.state.cardAnswer} />
                    <Button title="Save Card" style={style.button} onPress={this.onSaveCard}></Button>
                </View>
            ) : (
                <View>
                    <Text h3 style={{textAlign: 'center', margin: 10}}>Card Added :)</Text>
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

export default AddCard