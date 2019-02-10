import { AsyncStorage } from 'react-native'
import { initialCards } from './initialData'

const DECKS_KEY = 'decks'

export const checkInitialData = () => {
    return AsyncStorage.getItem(DECKS_KEY)
}

export const createInitialDeck = () => {
    return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(initialCards))
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