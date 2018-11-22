import { inject as service } from '@ember/service';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const colorPalette = {
  'primary': {
    'name': 'black',
    'base': '#000'
  },
  'white': {
    'name': 'white',
    'base': '#fff'
  },
};

export default FreestyleController.extend({
  //----------------------------------------
  // Dependencies
  //----------------------------------------

  emberFreestyle: service(),

  //----------------------------------------
  // Hooks
  //----------------------------------------

  init() {
    this._super(...arguments);
    this.set('colorPalette', colorPalette);
  },
});
