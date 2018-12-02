import { inject as service } from '@ember/service';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

export default FreestyleController.extend({
  //----------------------------------------
  // Dependencies
  //----------------------------------------

  emberFreestyle: service(),
});
