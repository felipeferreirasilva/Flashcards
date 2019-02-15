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
        points: 0
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

    onShowNextQuestion = event => {
        console.log(event)
        let nextQuestion = this.state.questionNumber
        nextQuestion++
        this.setState({
            questionNumber: nextQuestion,
            showAnswer: false
        })
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

    render() {
        console.log(this.state)
        return (
            <View>
                <Text h3 style={{ margin: 15, textAlign: "center" }}>{(this.state.deck.deck_name).toUpperCase()}</Text>
                {

                    this.state.showAddCard === false ? (
                        this.state.startQuiz === true ? (
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
                                        <Button style={style.button} icon={{ name: "thumb-up", size: 30, color: "green" }} type="outline" title="Correct" value="correct" onPress={() => this.onShowNextQuestion('correct')} />
                                        <Button style={style.button} icon={{ name: "thumb-down", size: 30, color: "red" }} type="outline" title="Wrong" value="wrong" onPress={(event) => this.onShowNextQuestion('wrong')} />
                                    </Card>
                                )
                        ) : (
                                <View>
                                    <Text style={{ margin: 10, textAlign: "center" }}>Questions: {this.state.deck.cards.length} </Text>
                                    <Button title="Start Quiz" onPress={this.onPressStartQuiz} style={style.button}></Button>
                                    <Button title="Add Card" style={style.button} onPress={this.onPressAddCard}></Button>
                                </View>
                            )
                    ) : (
                            <AddCard style={style.card} deck={this.state.deck} updateDecks={this.props.navigation.getParam('updateDecks')}></AddCard>
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