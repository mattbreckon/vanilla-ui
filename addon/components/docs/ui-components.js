import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/docs/ui-components';

export default Component.extend({
  //----------------------------------------
  // Properties
  //----------------------------------------

  layout,

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
