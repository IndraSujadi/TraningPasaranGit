import { Component } from 'react';
// import OpenSans from './assets/fonts/OpenSans-Bold.ttf';
import { Font } from 'expo';

export default class LoadFont extends Component {
  componentDidMount() {
    this._loadFonts();
  }
  async _loadFonts() {
    await Font.loadAsync({
      // 'open-sans': OpenSans,
    });

    this.setState(() => ({
      fontsLoaded: true,
    }));
  }
}
