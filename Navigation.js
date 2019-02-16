import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'

const Stack = createStackNavigator({
    Home: Home,
    Deck: Deck,
    AddCard: AddCard,
    AddDeck: AddDeck
  }, {
      headerTransitionPreset: 'fade-in-place',
      mode: 'left'
    }
  );
  
  const Navigation = createAppContainer(Stack)

  export default Navigation