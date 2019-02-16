import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = "flashcards:notification"

export const clearLocalNotification = async () => {
  await AsyncStorage.removeItem(NOTIFICATION_KEY)
  const response = await Notifications.cancelAllScheduledNotificationsAsync()
  return response
}

function createNotification() {
  return {
    title: 'Time to play!',
    body: 'Don\'t forget to test yourself today!',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  }
}

export const setLocalNotification = async () => {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY)
  const isNotificationSet = JSON.parse(data)

  if (isNotificationSet === null) {
    const info = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    const { status } = info

    if (status === "granted") {
      await Notifications.cancelAllScheduledNotificationsAsync()

      let tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(20)
      tomorrow.setMinutes(10)

      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: "day"
      })

      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    }
  }
}

