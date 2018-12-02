import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

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

  //----------------------------------------
  // Computed Properties
  //----------------------------------------

  dynamicProperties: computed(function () {
    return {
      theme: {
        value: 'stacked',
        inputType: 'select',
        options: [
          'stacked',
          'bullet',
          'number',
          'inline',
          'inline-block',
          'comma',
        ],
      },
      margin: {
        value: undefined,
        inputType: 'select',
        options: [
          '', '0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50',
        ],
      },
    };
  }),
});
