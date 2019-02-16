import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Card, Text, Icon } from 'react-native-elements';
import AddCard from './AddCard'

class Deck extends Component {
    state = {
        deck: {},
        startQuiz: false,
        showAnswer: false,
        showAddCard: false,
        questionNumber: 0,
        gameFinished: false,
        score: 0
    }

    componentWillMount() {
        this.setState({
            deck: this.props.navigation.getParam('deck')
        })
    }

    static navigationOptions = () => {
        return {
            headerTitle: 'Deck',
        }
    }

    onPressShowAnswer = () => {
        this.setState({
            showAnswer: true
        })
    }

    onShowNextQuestion = status => {
        this.updateScore(status)
        if (this.state.questionNumber < this.state.deck.cards.length) {
            if (this.state.questionNumber === this.state.deck.cards.length - 1) {
                this.setState({
                    gameFinished: true
                })
            } else {
                let nextQuestion = this.state.questionNumber
                nextQuestion++
                this.setState({
                    questionNumber: nextQuestion,
                    showAnswer: false
                })
            }

        }
    }

    onPressStartQuiz = () => {
        this.setState({
            startQuiz: true
        })
    }

    onPressAddCard = () => {
        this.setState({
            showAddCard: true
        })
    }

    updateScore = status => {
        if (status === 'correct') {
            this.setState({
                score: this.state.score + 1
            })
        }
    }

    render() {
        return (
            <View>
                <Text h3 style={{ margin: 15, textAlign: "center" }}>{(this.state.deck.deck_name).toUpperCase()}</Text>
                {
                    // Verifica se o jogo finalizou antes de renderizar
                    this.state.gameFinished === false ? (
                        // Verificar se o botao Add card foi clicado para exibir form de add card
                        this.state.showAddCard === false ? (
                            // Verifica se o botao Start quiz foi clicado para exibir a primeira pergunta
                            this.state.startQuiz === true ? (
                                // Verifica se o botao ShowAnswer foi clicado para exibir a resposta da pergunta atual
                                this.state.showAnswer === false ? (
                                    <View>
                                        <Text style={{ textAlign: "center" }}>Question: {(this.state.questionNumber + 1)} of {this.state.deck.cards.length}</Text>
                                        <Card title={this.state.deck.cards[this.state.questionNumber].question}>
                                            <Button title='Show Answer' onPress={this.onPressShowAnswer}></Button>
                                        </Card>
                                    </View>
                                ) : (
                                        <Card title={this.state.deck.cards[this.state.questionNumber].question}>
                                            <Text style={{ marginBottom: 10 }}>{this.state.deck.cards[this.state.questionNumber].answer}</Text>
                                            <Button style={style.button} icon={{ name: "thumb-up", size: 30, color: "green" }} type="outline" title="Correct" onPress={() => this.onShowNextQuestion('correct')} />
                                            <Button style={style.button} icon={{ name: "thumb-down", size: 30, color: "red" }} type="outline" title="Wrong" onPress={() => this.onShowNextQuestion('wrong')} />
                                        </Card>
                                    )
                            ) : (
                                    this.state.deck.cards.length > 0 ? (
                                        <View>
                                            <Text style={{ margin: 10, textAlign: "center" }}>Questions: {this.state.deck.cards.length} </Text>
                                            <Button title="Start Quiz" onPress={this.onPressStartQuiz} style={style.button}></Button>
                                            <Button title="Add Card" style={style.button} onPress={this.onPressAddCard}></Button>
                                        </View>
                                    ) : (
                                        <Text h4 style={{ textAlign: 'center', margin: 10 }}>Please, add cards to this deck.</Text>
                                    )
                                )
                        ) : (
                                <AddCard style={style.card} deck={this.state.deck} updateDecks={this.props.navigation.getParam('updateDecks')}></AddCard>
                            )
                    ) : (
                            <View>
                                <Text h2 style={{ textAlign: 'center', margin: 10 }}>Quiz Finished</Text>
                                <Text h4 style={{ textAlign: 'center' }}>Score: {this.state.score} of {this.state.deck.cards.length}</Text>
                                <Text h4 style={{ textAlign: 'center', margin: 10 }}>{(this.state.score * 100) / this.state.deck.cards.length} %</Text>
                            </View>
                        )
                }

            </View>
        )
    }
}

const style = StyleSheet.create({
    button: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20
    },
    card: {
        margin: 10
    }
})

export default Deck