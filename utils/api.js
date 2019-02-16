import { AsyncStorage } from 'react-native'
import { initialCards } from './initialData'

export const DECKS_KEY = 'decks'

export const checkInitialData = () => {
    return AsyncStorage.getItem(DECKS_KEY)
}

export const createInitialDeck = () => {
    return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(initialCards))
}

export const createNewDeck = (title, updateDecks) => {
    return getAllDecks()
        
}

export const updateDeck = (deckName, newCard, updateDecks) => {
    getAllDecks()
        .then(response => {
            let decks = JSON.parse(response)
            for (let i = 0; i < decks.length; i++) {

                if (decks[i].deck_name === deckName) {
                    decks[i].cards.push(newCard)
                    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
                        .then(() => {
                            updateDecks()
                        })
                }
            }
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