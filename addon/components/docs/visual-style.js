import Component from '@ember/component';
import layout from '../../templates/components/docs/visual-style';

const colorPalette = {
  primary: {
    name: 'black',
    base: '#000',
  },
  white: {
    name: 'white',
    base: '#fff',
  },
};

export default Component.extend({
  //----------------------------------------
  // Hooks
  //----------------------------------------

  init() {
    this._super(...arguments);
    this.set('colorPalette', colorPalette);
  },

  //----------------------------------------
  // Properties
  //----------------------------------------

  layout,
});
