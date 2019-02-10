import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home'
import Deck from './components/Deck'

const Stack = createStackNavigator({
    Home: Home,
    Deck: Deck
  }, {
      // headerTransitionPreset: 'uikit',
      // mode: 'modal',
    }
  );
  
  const Navigation = createAppContainer(Stack)
  
  export default Navigation