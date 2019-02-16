import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { ListItem, Text, Button } from 'react-native-elements'
import { checkInitialData, createInitialDeck, getAllDecks, deleteAllData } from '../utils/api'
import { setLocalNotification, clearLocalNotification } from "../utils/notification"

// LISTAR TODOS OS DECKS
// AO CLICAR NO DECK CHAMAR O COMPONENT DECK PASSANDO O DECK SELECIONADO

class Home extends Component {
    state = {
        decks: {},
        gamePlayed: false
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Home',
        }
    }

    componentWillMount() {
        // deleteAllData()

        // Verifica se o deck inicial existe, se nao existir ele é criado, em seguida todos os decks ao state
        checkInitialData()
            .then(response => {
                if (response === null) {
                    createInitialDeck()
                    return getAllDecks()
                } else {
                    return getAllDecks()
                }
            })

            .then(response => {
                this.setState({
                    decks: JSON.parse(response)
                })
            })
    }

    componentDidUpdate() {
        if(this.state.gamePlayed){
            this.delayNotification()
        }
    }

    updateDecks = () => {
        getAllDecks()
            .then(response => {
                this.setState({
                    decks: JSON.parse(response)
                })
            })
    }

    delayNotification = async () => {
        await clearLocalNotification()
        await setLocalNotification()
    }

    gamePlayedUpdate = () => {
        this.setState({
            gamePlayed: true
        })
    }

    render() {
        return (
            <ScrollView>
                <Text h3 style={{ margin: 15, textAlign: "center" }}>Select a Deck</Text>
                {Object.keys(this.state.decks).length > 0 &&
                    this.state.decks.map(deck => (
                        <ListItem
                            key={deck.deck_name}
                            title={(deck.deck_name).toUpperCase()}
                            onPress={() => this.props.navigation.navigate('Deck', { deck: deck, updateDecks: this.updateDecks, gamePlayed: this.gamePlayedUpdate })}
                            linearGradientProps={{
                                colors: ['#6f86d6', '#005bea'],
                                start: [1, 0],
                                end: [0.2, 0],
                            }}
                            titleStyle={{ color: 'white', fontWeight: 'bold' }}
                            topDivider={true}
                            bottomDivider={true}
                            subtitleStyle={{ color: 'white' }}
                            subtitle={`Number of questions: ${deck.cards.length}`}
                            pad={30}
                            style={{ margin: 3 }}
                            chevronColor="white"
                            chevron
                        >
                        </ListItem>
                    ))
                }
                <Button title="Add New Deck" style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('AddDeck', { updateDecks: this.updateDecks })}></Button>
            </ScrollView>
        )
    }
}

export default Home