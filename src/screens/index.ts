import { Navigation } from 'react-native-navigation'
import RootScreen from './RootScreen'
import MetaMaskScreen from './MetaMaskScreen'

export const registerScreens = function (): void {
  Navigation.registerComponent('nabi.RootScreen', () => RootScreen)
  Navigation.registerComponent('nabi.MetaMaskScreen', () => MetaMaskScreen)
}
