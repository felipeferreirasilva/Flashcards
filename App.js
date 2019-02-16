import React from 'react';
import Navigation from './Nagivation'
import { setLocalNotification} from "./utils/notification"


export default class App extends React.Component {
  componentDidMount = async () => {
    setLocalNotification()
  }
  render() {
    return (
      <Navigation />
    );
  }
}
