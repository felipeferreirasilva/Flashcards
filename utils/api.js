import { AsyncStorage } from 'react-native'
import { initialCards } from './initialData'

const DECKS_KEY = 'decks'

export const checkInitialData = () => {
    return AsyncStorage.getItem(DECKS_KEY)
}

export const createInitialDeck = () => {
    return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(initialCards))
}

export const updateDeck = (deckName, newCard, updateDecks) => {
    getAllDecks()
        .then(response => {
            let decks = JSON.parse(response)
            for (let i = 0; i < decks.length; i++) {
                
                if (decks[i].deck_name === deckName) {
                    decks[i].cards.push(newCard)
                    return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
                    .then(response => {
                        updateDecks()
                    })
                }
            }
            console.log(false)
        })
}

export const deleteAllData = () => {
    AsyncStorage.clear()
        .then(response => {
            console.log("Banco Deletado")
        })
}

export const getAllDecks = () => {
    return AsyncStorage.getItem(DECKS_KEY)
}