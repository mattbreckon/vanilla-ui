import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/ui-list';

const themes = {
  inline: ['inline', 'inline-block', 'comma'],
  stacked: ['stacked', 'bullet', 'number'],
};

export default Component.extend({
  //----------------------------------------
  // Hooks
  //----------------------------------------

  init() {
    this._super(...arguments);
    this.set('themes', themes);
  },

  //----------------------------------------
  // Properties
  //----------------------------------------

  layout,

  classNameBindings: ['marginClass', 'themeClass'],

  baseClassName: 'ui-list',
  tagName: 'ul',

  theme: undefined,
  margin: undefined,

  //----------------------------------------
  // Computed Properties
  //----------------------------------------

  allThemes: computed.union('themes.inline', 'themes.stacked'),

  marginPrefix: computed('theme', 'themes.stacked', function () {
    if (this.get('themes.stacked').includes(this.get('theme'))) {
      return 'l-mt-';
    }

    return 'l-ml-';
  }),

  marginClass: computed('margin', 'marginPrefix', function () {
    const margin = this.get('margin');

    if (margin % 5 === 0) {
      return `${this.get('marginPrefix')}${margin}`;
    }

    return undefined;
  }),

  themeClass: computed('allThemes', 'theme', function () {
    const theme = this.get('theme');

    if (this.get('allThemes').includes(theme)) {
      return `l-${theme}`;
    }

    return undefined;
  }),
});
