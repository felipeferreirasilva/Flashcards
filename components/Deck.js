import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Card, Header} from 'react-native-elements';

class Deck extends Component {
    state = {
        deck: {}
    }

    componentDidMount() {
        this.setState({
            deck: this.props.navigation.getParam('deck')
        })
    }

    static navigationOptions = () => {
        return {
            headerTitle: 'Deck',
        }
    }

    render() {
        console.log(this.state.deck)
        return (
            <View>
                {Object.keys(this.state.deck).length > 0 &&
                    <Card title={this.state.deck.cards[0].question}>
                        <Button title='Show Answer'></Button>
                    </Card>
                }
            </View>
        )
    }
}

export default Deck