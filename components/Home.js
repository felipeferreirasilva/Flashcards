import React, { Component } from 'react'
import { View } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import { checkInitialData, createInitialDeck, getAllDecks, deleteAllData, updateDeck } from '../utils/api'

// LISTAR TODOS OS DECKS
// AO CLICAR NO DECK CHAMAR O COMPONENT DECK PASSANDO O DECK SELECIONADO

class Home extends Component {
    state = {
        decks: {}
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

    updateDecks = () => {
        getAllDecks()
        .then(response => {
            this.setState({
                decks: JSON.parse(response)
            })
        })
    }

    render() {
        return (
            <View>
                <Text h3 style={{ margin: 15, textAlign: "center" }}>Select a Deck</Text>
                {Object.keys(this.state.decks).length > 0 &&
                    this.state.decks.map(deck => (
                        <ListItem
                            key={deck.deck_name}
                            title={(deck.deck_name).toUpperCase()}
                            onPress={() => this.props.navigation.navigate('Deck', { deck: deck, updateDecks: this.updateDecks })}
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
            </View>
        )
    }
}

export default Home