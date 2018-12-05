'use strict';



;define('dummy/app', ['exports', 'ember-load-initializers', 'dummy/resolver', 'dummy/config/environment'], function (exports, _emberLoadInitializers, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('dummy/components/docs/helper-classes', ['exports', 'dummy/templates/components/docs/helper-classes'], function (exports, _helperClasses) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _helperClasses.default
  });
});
;define('dummy/components/docs/naming-conventions-block', ['exports', 'dummy/templates/components/docs/naming-conventions-block'], function (exports, _namingConventionsBlock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _namingConventionsBlock.default
  });
});
;define('dummy/components/docs/naming-conventions-element', ['exports', 'dummy/templates/components/docs/naming-conventions-element'], function (exports, _namingConventionsElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _namingConventionsElement.default
  });
});
;define('dummy/components/docs/naming-conventions-helper', ['exports', 'dummy/templates/components/docs/naming-conventions-helper'], function (exports, _namingConventionsHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _namingConventionsHelper.default
  });
});
;define('dummy/components/docs/naming-conventions-modifier', ['exports', 'dummy/templates/components/docs/naming-conventions-modifier'], function (exports, _namingConventionsModifier) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _namingConventionsModifier.default
  });
});
;define('dummy/components/docs/naming-conventions-variation', ['exports', 'dummy/templates/components/docs/naming-conventions-variation'], function (exports, _namingConventionsVariation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _namingConventionsVariation.default
  });
});
;define('dummy/components/docs/naming-conventions', ['exports', 'dummy/templates/components/docs/naming-conventions'], function (exports, _namingConventions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _namingConventions.default
  });
});
;define('dummy/components/docs/ui-components', ['exports', 'dummy/templates/components/docs/ui-components'], function (exports, _uiComponents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    //----------------------------------------
    // Properties
    //----------------------------------------

    layout: _uiComponents.default,

    //----------------------------------------
    // Computed Properties
    //----------------------------------------

    dynamicProperties: Ember.computed(function () {
      return {
        theme: {
          value: 'stacked',
          inputType: 'select',
          options: ['stacked', 'bullet', 'number', 'inline', 'inline-block', 'comma']
        },
        margin: {
          value: undefined,
          inputType: 'select',
          options: ['', '0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50']
        }
      };
    })
  });
});
;define('dummy/components/docs/vanilla-ui', ['exports', 'dummy/templates/components/docs/vanilla-ui'], function (exports, _vanillaUi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _vanillaUi.default
  });
});
;define('dummy/components/docs/visual-style', ['exports', 'dummy/templates/components/docs/visual-style'], function (exports, _visualStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const colorPalette = {
    primary: {
      name: 'black',
      base: '#000'
    },
    white: {
      name: 'white',
      base: '#fff'
    }
  };

  exports.default = Ember.Component.extend({
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

    layout: _visualStyle.default
  });
});
;define('dummy/components/freestyle-annotation', ['exports', 'ember-freestyle/components/freestyle-annotation'], function (exports, _freestyleAnnotation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleAnnotation.default;
    }
  });
});
;define('dummy/components/freestyle-collection', ['exports', 'ember-freestyle/components/freestyle-collection'], function (exports, _freestyleCollection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleCollection.default;
    }
  });
});
;define('dummy/components/freestyle-dynamic-input-select-option', ['exports', 'ember-freestyle/components/freestyle-dynamic-input-select-option'], function (exports, _freestyleDynamicInputSelectOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleDynamicInputSelectOption.default;
    }
  });
});
;define('dummy/components/freestyle-dynamic-input', ['exports', 'ember-freestyle/components/freestyle-dynamic-input'], function (exports, _freestyleDynamicInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleDynamicInput.default;
    }
  });
});
;define('dummy/components/freestyle-dynamic', ['exports', 'ember-freestyle/components/freestyle-dynamic'], function (exports, _freestyleDynamic) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleDynamic.default;
    }
  });
});
;define('dummy/components/freestyle-guide', ['exports', 'ember-freestyle/components/freestyle-guide'], function (exports, _freestyleGuide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleGuide.default;
    }
  });
});
;define('dummy/components/freestyle-menu', ['exports', 'ember-freestyle/components/freestyle-menu'], function (exports, _freestyleMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleMenu.default;
    }
  });
});
;define('dummy/components/freestyle-note', ['exports', 'ember-freestyle/components/freestyle-note'], function (exports, _freestyleNote) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleNote.default;
    }
  });
});
;define('dummy/components/freestyle-notes', ['exports', 'ember-freestyle/components/freestyle-notes'], function (exports, _freestyleNotes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleNotes.default;
    }
  });
});
;define('dummy/components/freestyle-palette-item', ['exports', 'ember-freestyle/components/freestyle-palette-item'], function (exports, _freestylePaletteItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestylePaletteItem.default;
    }
  });
});
;define('dummy/components/freestyle-palette', ['exports', 'ember-freestyle/components/freestyle-palette'], function (exports, _freestylePalette) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestylePalette.default;
    }
  });
});
;define('dummy/components/freestyle-section', ['exports', 'ember-freestyle/components/freestyle-section'], function (exports, _freestyleSection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleSection.default;
    }
  });
});
;define('dummy/components/freestyle-showdown-content', ['exports', 'ember-freestyle/components/freestyle-showdown-content'], function (exports, _freestyleShowdownContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleShowdownContent.default;
    }
  });
});
;define('dummy/components/freestyle-snippet', ['exports', 'ember-freestyle/components/freestyle-snippet'], function (exports, _freestyleSnippet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleSnippet.default;
    }
  });
});
;define('dummy/components/freestyle-subsection', ['exports', 'ember-freestyle/components/freestyle-subsection'], function (exports, _freestyleSubsection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleSubsection.default;
    }
  });
});
;define('dummy/components/freestyle-typeface', ['exports', 'ember-freestyle/components/freestyle-typeface'], function (exports, _freestyleTypeface) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleTypeface.default;
    }
  });
});
;define('dummy/components/freestyle-usage-controls', ['exports', 'ember-freestyle/components/freestyle-usage-controls'], function (exports, _freestyleUsageControls) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleUsageControls.default;
    }
  });
});
;define('dummy/components/freestyle-usage', ['exports', 'ember-freestyle/components/freestyle-usage'], function (exports, _freestyleUsage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleUsage.default;
    }
  });
});
;define('dummy/components/freestyle-variant-list', ['exports', 'ember-freestyle/components/freestyle-variant-list'], function (exports, _freestyleVariantList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleVariantList.default;
    }
  });
});
;define('dummy/components/freestyle-variant', ['exports', 'ember-freestyle/components/freestyle-variant'], function (exports, _freestyleVariant) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleVariant.default;
    }
  });
});
;define('dummy/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _markdownToHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markdownToHtml.default;
    }
  });
});
;define('dummy/components/ui-list', ['exports', 'vanilla-ui/components/ui-list'], function (exports, _uiList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiList.default;
    }
  });
});
;define('dummy/controllers/application', ['exports', 'ember-freestyle/controllers/freestyle'], function (exports, _freestyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _freestyle.default.extend({
    //----------------------------------------
    // Dependencies
    //----------------------------------------

    emberFreestyle: Ember.inject.service()
  });
});
;define('dummy/controllers/freestyle', ['exports', 'ember-freestyle/controllers/freestyle'], function (exports, _freestyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyle.default;
    }
  });
});
;define("dummy/freestyle-snippets", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "block--notes.hbs": "          Use `.block` to change an element's `display` property to `block`",
    "block--usage.hbs": "          <span class=\"block\">Hello</span>\n          <span>World</span>",
    "bold--notes.hbs": "          Use `.bold` to change the text style to bold",
    "bold--usage.hbs": "          <div class=\"bold\">Hello world</div>",
    "capitalize--notes.hbs": "          Use `.capitalize` to transform text to capitalize",
    "capitalize--usage.hbs": "          <div class=\"capitalize\">Hello world</div>",
    "center--notes.hbs": "          Use `.text-center` to center align text",
    "center--usage.hbs": "          <div class=\"center\">Hello World</div>",
    "file-organization--notes.hbs": "      Example file organization below.\n\n      ```\n      // Variables & Mixins\n      @import 'partials/modules';\n\n      // Normalize\n      @import 'partials/normalize';\n\n      // Base\n      @import 'partials/base/box-sizing';\n      @import 'partials/base/fonts';\n      @import 'partials/base/typography';\n      @import 'partials/base/lists';\n      @import 'partials/base/flex';\n\n      // Vendor\n      @import 'vendor/my-addon';\n\n      // Components\n      @import 'partials/component/ui-button';\n\n      // Helpers\n      @import 'partials/helpers';\n      ```",
    "fp--usage.hbs": "      {{freestyle-palette\n        colorPalette=colorPalette\n        title=\"Dummy App Color Palette\"\n        description=\"This component displays the color palette specified in freestyle/palette.json\"\n      }}",
    "horizontal-list-spacing--notes.hbs": "      Quickly add horizontal spacing to the items in a list.\n\n      Class names are prefixed with `l-ml-` and followed by a number between 0 and 50 (in increments of 5).\n\n      ```scss\n      .ml-0, .ml-5, .ml-10, ..., .ml-40, .ml-45, .ml-50\n      ```",
    "horizontal-list-spacing--usage.hbs": "      <ul class=\"l-inline l-ml-10\">\n        <li>item 1</li>\n        <li>item 2</li>\n        <li>item 3</li>\n      </ul>",
    "inline--notes.hbs": "          Use `.inline` to change an element's `display` property to `inline`",
    "inline--usage.hbs": "          <div class=\"inline\">Hello</div>\n          <span>World</span>",
    "italic--notes.hbs": "          Use `.italic` to change the text style to italic",
    "italic--usage.hbs": "          <div class=\"italic\">Hello world</div>",
    "left--notes.hbs": "          Use `.text-left` to left align text",
    "left--usage.hbs": "          <div class=\"text-left\">Hello World</div>",
    "list-bullet--usage.hbs": "          <ul class=\"l-bullet\">\n            <li>item 1</li>\n            <li>item 2</li>\n            <li>item 3</li>\n          </ul>",
    "list-comma--usage.hbs": "          <ul class=\"l-comma\">\n            <li>item 1</li>\n            <li>item 2</li>\n            <li>item 3</li>\n          </ul>",
    "list-inline--usage.hbs": "          <ul class=\"l-inline\">\n            <li>item 1</li>\n            <li>item 2</li>\n            <li>item 3</li>\n          </ul>",
    "list-inline-block--usage.hbs": "          <ul class=\"l-inline-block\">\n            <li>item 1</li>\n            <li>item 2</li>\n            <li>item 3</li>\n          </ul>",
    "list-number--usage.hbs": "          <ul class=\"l-number\">\n            <li>item 1</li>\n            <li>item 2</li>\n            <li>item 3</li>\n          </ul>",
    "list-stacked--usage.hbs": "          <ul class=\"l-stacked\">\n            <li>item 1</li>\n            <li>item 2</li>\n            <li>item 3</li>\n          </ul>",
    "lowercase--notes.hbs": "          Use `.lowercase` to transform text to lowercase",
    "lowercase--usage.hbs": "          <div class=\"lowercase\">Hello world</div>",
    "margin-auto--notes.hbs": "          Quickly add auto margin to an element.\n\n          ```scss\n          .m-auto { margin: auto; }\n          .mv-auto { margin: auto 0; }\n          .mh-auto { margin: 0 auto; }\n          ```",
    "margin-auto--usage.hbs": "          <div class=\"mh-auto\" style=\"width: 150px;\">\n            Look at me\n          </div>",
    "margin-bottom--notes.hbs": "          Quickly add a margin to the bottom of an element.\n\n          Class names are prefixed with `mb-` and followed by a number between 0 and 50 (in increments of 5).\n\n          ```scss\n          .mb-0, .mb-5, .mb-10, ..., .mb-40, .mb-45, .mb-50\n          ```",
    "margin-bottom--usage.hbs": "          <ul class=\"l-stacked\">\n            <li>Look</li>\n            <li class=\"mb-10\">at</li>\n            <li>me</li>\n          </ul>",
    "margin-horz--notes.hbs": "          Quickly add horizontal margin to an element.\n\n          Class names are prefixed with `mh-` and followed by a number between 0 and 50 (in increments of 5).\n\n          ```scss\n          .mh-0, .mh-5, .mh-10, ..., .mh-40, .mh-45, .mh-50\n          ```",
    "margin-horz--usage.hbs": "          <ul class=\"l-inline\">\n            <li>Look</li>\n            <li class=\"mh-10\">at</li>\n            <li>me</li>\n          </ul>",
    "margin-left--notes.hbs": "          Quickly add a margin to the left of an element.\n\n          Class names are prefixed with `ml-` and followed by a number between 0 and 50 (in increments of 5).\n\n          ```scss\n          .ml-0, .ml-5, .ml-10, ..., .ml-40, .ml-45, .ml-50\n          ```",
    "margin-left--usage.hbs": "          <ul class=\"l-inline\">\n            <li>Look</li>\n            <li class=\"ml-10\">at</li>\n            <li>me</li>\n          </ul>",
    "margin-right--notes.hbs": "          Quickly add a margin to the right of an element.\n\n          Class names are prefixed with `mr-` and followed by a number between 0 and 50 (in increments of 5).\n\n          ```scss\n          .mr-0, .mr-5, .mr-10, ..., .mr-40, .mr-45, .mr-50\n          ```",
    "margin-right--usage.hbs": "          <ul class=\"l-inline\">\n            <li>Look</li>\n            <li class=\"mr-10\">at</li>\n            <li>me</li>\n          </ul>",
    "margin-top--notes.hbs": "          Quickly add a margin to the top of an element.\n\n          Class names are prefixed with `mt-` and followed by a number between 0 and 50 (in increments of 5).\n\n          ```scss\n          .mt-0, .mt-5, .mt-10, ..., .mt-40, .mt-45, .mt-50\n          ```",
    "margin-top--usage.hbs": "          <ul class=\"l-stacked\">\n            <li>Look</li>\n            <li class=\"mt-10\">at</li>\n            <li>me</li>\n          </ul>",
    "margin-vert--notes.hbs": "          Quickly add vertical margin to an element.\n\n          Class names are prefixed with `mv-` and followed by a number between 0 and 50 (in increments of 5).\n\n          ```scss\n          .mv-0, .mv-5, .mv-10, ..., .mv-40, .mv-45, .mv-50\n          ```",
    "margin-vert--usage.hbs": "          <ul class=\"l-stacked\">\n            <li>Look</li>\n            <li class=\"mv-10\">at</li>\n            <li>me</li>\n          </ul>",
    "naming-block--notes.hbs": "    #### Naming Convention\n    `.class-name`\n\n    #### Purpose\n    Add styles to an element\n\n    #### Example\n\n    ```\n    .ui-btn {\n      display: inline-block;\n      background-color: #3498db;\n      padding: 10px 25px;\n      border: 1px solid #2980b9;\n      border-radius: 3px;\n      user-select: none;\n\n      font-size: 14px;\n      text-align: center;\n      text-transform: capitalize;\n      cursor: pointer;\n      color: #fff;\n    }\n    ```",
    "naming-block--usage.hbs": "    <button class=\"ui-btn\">Button</button>",
    "naming-element--notes.hbs": "    `.class-name__element`\n\n    #### Purpose\n    Add styles to a child element of another `block` class.\n\n    #### When to Use\n    You are creating a class that is both a child of and contextually related to another `block` element.\n\n    Following this pattern you can see how `nav` and `nav__item` helps describe what the markup looks like and the context and relationship between the classes.\n\n    #### Example\n\n    ```\n    .ui-btn {\n      display: inline-block;\n      background-color: #3498db;\n      // ...\n\n      &__subtext {\n        margin: 5px;\n        font-size: 8px;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n      }\n    }\n\n    /* css */\n    .ui-btn {\n      display: inline-block;\n      background-color: #3498db;\n      // ...\n    }\n\n    .ui-btn__subtext {\n      margin: 5px;\n      font-size: 8px;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n    }\n    ```",
    "naming-element--usage.hbs": "    <button class=\"ui-btn\">\n      Button\n      <div class=\"ui-btn__subtext\">Subtext</div>\n    </button>",
    "naming-helper-class--notes.hbs": "    `.helper-name`\n\n    #### Purpose\n    Atomic helper classes that can be used to adds/modifies properties of another `block` or `modifier` class.\n\n    #### When to Use\n    Helpers are super generic variation classes. That can be used to add specific properties to any other class.\n\n    A good example of helper-class classes would be when you want to style helper-classs in size or state.\n\n    For example while it might make sense to have the classes `\"ui-btn\"` and `\"ui-btn--success\"` it would make much less sense to start creating classes like this `\"ui-btn\"`, `\"ui-btn--success\"`, `\"ui-btn--small\"`, `\"ui-btn--success--small\"`.\n\n    Instead we can create atomic classes that are related to and modify the `block` or `modifier` class.\n\n    #### Example\n\n    ```\n    .bold {\n      text-transform: uppercase;\n    }\n\n    .invisible {\n      visibility: hidden;\n    }\n    ```",
    "naming-helper-class--usage.hbs": "    <button class=\"ui-btn bold\">Default Button</button>\n    <button class=\"ui-btn invisible\">Default Button</button>",
    "naming-modifier--notes.hbs": "    `.class-name--modifier`\n\n    #### Purpose\n    A class that inherits and modifies the properties of a `block` class.\n\n    #### When to Use\n    You want to create a new `block` that is a variation of another `block` class.\n\n    #### Example\n\n    ```\n    .ui-btn {\n      display: inline-block;\n      background-color: #3498db;\n      // ...\n\n      &--outline {\n        @extend .ui-btn;\n        background-color: initial;\n        color: #2980b9;\n      }\n    }\n\n    /* css */\n    .ui-btn,\n    .ui-btn--outline {\n      display: inline-block;\n      background-color: #3498db;\n      // ...\n    }\n\n    .ui-btn--outline {\n      background-color: initial;\n      color: #2980b9;\n    }\n    ```",
    "naming-modifier--usage.hbs": "    <button class=\"ui-btn--outline\">Outline</button>",
    "naming-variation--notes.hbs": "    `.class-name-variation`\n\n    #### Purpose\n    A class that adds/modifies properties to other `block` and `modifier` classes.\n\n    #### When to Use\n    Variations are more generic than `modifier` classes. You should think of them like atomic classes or a mixin that relates to specific `block` and `modifier` classes.\n\n    A good example of variation classes would be when you want to style variations in size or state.\n\n    For example while it might make sense to have the classes `\"ui-btn\"` and `\"ui-btn--success\"` it would make much less sense to start creating classes like this `\"ui-btn\"`, `\"ui-btn--success\"`, `\"ui-btn--small\"`, `\"ui-btn--success--small\"`.\n\n    Instead we can create atomic classes that are related to and modify the `block` or `modifier` class.\n\n    #### Example\n\n    ```\n    .ui-btn-small {\n      font-size: 10px;\n    }\n\n    .ui-btn-disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n    ```",
    "naming-variation--usage.hbs": "    <button class=\"ui-btn\">Default Button</button>\n    <button class=\"ui-btn ui-btn-small\">Small Default Button</button>\n\n    <button class=\"ui-btn--outline ui-btn-small\">Small Outline Button</button>\n    <button class=\"ui-btn--outline ui-btn-small ui-btn-disabled\" disabled>Small Disabled Outline Button</button>",
    "oblique--notes.hbs": "          Use `.oblique` to change the text style to oblique",
    "oblique--usage.hbs": "          <div class=\"oblique\">Hello world</div>",
    "padding-bottom--notes.hbs": "          Quickly add a padding to the bottom of an element.\n\n          Class names are prefixed with `pb-` and followed by a number between 0 and 50 (in increments of 5).\n\n          ```scss\n          .pb-0, .pb-5, .pb-10, ..., .pb-40, .pb-45, .pb-50\n          ```",
    "padding-bottom--usage.hbs": "          <ul class=\"l-stacked\">\n            <li>Look</li>\n            <li class=\"pb-10\">at</li>\n            <li>me</li>\n          </ul>",
    "padding-left--notes.hbs": "          Quickly add a padding to the left of an element.\n\n          Class names are prefixed with `pl-` and followed by a number between 0 and 50 (in increments of 5).\n\n          ```scss\n          .pl-0, .pl-5, .pl-10, ..., .pl-40, .pl-45, .pl-50\n          ```",
    "padding-left--usage.hbs": "          <ul class=\"l-inline\">\n            <li>Look</li>\n            <li class=\"pl-10\">at</li>\n            <li>me</li>\n          </ul>",
    "padding-right--notes.hbs": "          Quickly add a padding to the right of an element.\n\n          Class names are prefixed with `pr-` and followed by a number between 0 and 50 (in increments of 5).\n\n          ```scss\n          .pr-0, .pr-5, .pr-10, ..., .pr-40, .pr-45, .pr-50\n          ```",
    "padding-right--usage.hbs": "          <ul class=\"l-inline\">\n            <li>Look</li>\n            <li class=\"pr-10\">at</li>\n            <li>me</li>\n          </ul>",
    "padding-top--notes.hbs": "          Quickly add a padding to the top of an element.\n\n          Class names are prefixed with `pt-` and followed by a number between 0 and 50 (in increments of 5).\n\n          ```scss\n          .pt-0, .pt-5, .pt-10, ..., .pt-40, .pt-45, .pt-50\n          ```",
    "padding-top--usage.hbs": "          <ul class=\"l-stacked\">\n            <li>Look</li>\n            <li class=\"pt-10\">at</li>\n            <li>me</li>\n          </ul>",
    "pull-left--notes.hbs": "          Use `.pull-left` to add a left float to an element",
    "pull-left--usage.hbs": "          <div class=\"pull-left\">Hello</div>\n          <div>World</div>",
    "pull-right--notes.hbs": "          Use `.pull-right` to add a right float to an element",
    "pull-right--usage.hbs": "          <div class=\"pull-right\">Hello</div>\n          <div>World</div>",
    "right--notes.hbs": "          Use `.text-right` to right align text",
    "right--usage.hbs": "          <div class=\"right\">Hello World</div>",
    "uppercase--notes.hbs": "          Use `.uppercase` to transform text to uppercase",
    "uppercase--usage.hbs": "          <div class=\"uppercase\">Hello world</div>",
    "vertical-list-spacing--notes.hbs": "      Quickly add vetical spacing to the items in a list.\n\n      Class names are prefixed with `l-mt-` and followed by a number between 0 and 50 (in increments of 5).\n\n      ```scss\n      .mt-0, .mt-5, .mt-10, ..., .mt-40, .mt-45, .mt-50\n      ```",
    "vertical-list-spacing--usage.hbs": "      <ul class=\"l-stacked l-mt-10\">\n        <li>item 1</li>\n        <li>item 2</li>\n        <li>item 3</li>\n      </ul>",
    "visibility--notes.hbs": "      Helpers to hide/show elements.\n\n      ```scss\n      // visibility\n      .invisible { visibility: hidden; }\n      .visibile { visibility: visible; }\n\n      // display\n      .hide { display: none; }\n      .show { display: initial; }\n      ```",
    "visibility--usage.hbs": "      <span class=\"invisible\">Hey!</span>\n      <span class=\"visible\">Look</span>\n      <span class=\"hide\">at</span>\n      <span class=\"show\">me</span>",
    "visibility-important--notes.hbs": "      Helpers to hide/show elements.\n\n      ```scss\n      // display !important\n      .hide-i { display: none !important; }\n      .show-i { display: initial !important; }\n      ```",
    "visibility-important--usage.hbs": "      <span class=\"hide\" style=\"display: inline;\">Look at</span>\n      <span class=\"show\" style=\"display: none;\">me</span>\n\n      <div class=\"mt-10\">\n        <span class=\"hide-i\" style=\"display: inline;\">Check this</span>\n        <span class=\"show-i\" style=\"display: none;\">out</span>\n      </div>"
  };
});
;define('dummy/helpers/variant-eq', ['exports', 'ember-freestyle/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Helper.helper(_equal.equalHelper);
});
;define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('dummy/initializers/ember-freestyle', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function initialize() {
    const application = arguments[1] || arguments[0];
    let prefix = _environment.default.modulePrefix;

    let freestyleModuleRegExp = new RegExp(`^${prefix}/(freestyle-snippets)`);

    Object.keys(requirejs.entries).filter(function (key) {
      return freestyleModuleRegExp.test(key);
    }).forEach(function (moduleName) {
      let module = require(moduleName, null, null, true);
      let freestyleModule = module['default'];
      let moduleKey = moduleName.split('/').reverse()[0];
      let registryKey = `config:ember-freestyle-${moduleKey}`;
      application.register(registryKey, freestyleModule, { instantiate: false });
      application.inject('service:ember-freestyle', moduleKey, registryKey);
    });
  } /* global requirejs, require */
  exports.default = {
    name: 'ember-freestyle',
    initialize: initialize
  };
});
;define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    // eslint-disable-line array-callback-return
    this.route('freestyle');
  });

  exports.default = Router;
});
;define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('dummy/services/ember-freestyle', ['exports', 'ember-freestyle/services/ember-freestyle'], function (exports, _emberFreestyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberFreestyle.default;
    }
  });
});
;define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "daFhvVu2", "block": "{\"symbols\":[],\"statements\":[[4,\"freestyle-guide\",null,[[\"title\",\"subtitle\"],[\"Vanilla UI\",\"Living Style Guide\"]],{\"statements\":[[0,\"  \"],[1,[21,\"docs/vanilla-ui\"],false],[0,\"\\n  \"],[1,[21,\"docs/ui-components\"],false],[0,\"\\n  \"],[1,[21,\"docs/helper-classes\"],false],[0,\"\\n  \"],[1,[21,\"docs/visual-style\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
;define("dummy/templates/components/docs/helper-classes", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CDvVA5+w", "block": "{\"symbols\":[\"section\",\"collection\",\"collection\",\"collection\",\"collection\",\"collection\",\"collection\",\"collection\",\"collection\"],\"statements\":[[4,\"freestyle-section\",null,[[\"name\"],[\"Helper Classes\"]],{\"statements\":[[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Layout\"]],{\"statements\":[[4,\"freestyle-collection\",null,[[\"defaultKey\"],[\"all\"]],{\"statements\":[[4,\"component\",[[22,9,[\"variant\"]]],[[\"key\"],[\"pull-left\"]],{\"statements\":[[4,\"freestyle-note\",[\"pull-left--notes\"],null,{\"statements\":[[0,\"          Use `.pull-left` to add a left float to an element\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"pull-left\"],[[\"title\"],[\"Float Left\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"pull-left\"],[9],[0,\"Hello\"],[10],[0,\"\\n          \"],[7,\"div\"],[9],[0,\"World\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,9,[\"variant\"]]],[[\"key\"],[\"pull-right\"]],{\"statements\":[[4,\"freestyle-note\",[\"pull-right--notes\"],null,{\"statements\":[[0,\"          Use `.pull-right` to add a right float to an element\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"pull-right\"],[[\"title\"],[\"Float Right\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"Hello\"],[10],[0,\"\\n          \"],[7,\"div\"],[9],[0,\"World\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,9,[\"variant\"]]],[[\"key\"],[\"inline\"]],{\"statements\":[[4,\"freestyle-note\",[\"inline--notes\"],null,{\"statements\":[[0,\"          Use `.inline` to change an element's `display` property to `inline`\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"inline\"],[[\"title\"],[\"Inline\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"inline\"],[9],[0,\"Hello\"],[10],[0,\"\\n          \"],[7,\"span\"],[9],[0,\"World\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,9,[\"variant\"]]],[[\"key\"],[\"block\"]],{\"statements\":[[4,\"freestyle-note\",[\"block--notes\"],null,{\"statements\":[[0,\"          Use `.block` to change an element's `display` property to `block`\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"block\"],[[\"title\"],[\"Block\"]],{\"statements\":[[0,\"          \"],[7,\"span\"],[11,\"class\",\"block\"],[9],[0,\"Hello\"],[10],[0,\"\\n          \"],[7,\"span\"],[9],[0,\"World\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[9]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Visibility\"]],{\"statements\":[[4,\"freestyle-note\",[\"visibility--notes\"],null,{\"statements\":[[0,\"      Helpers to hide/show elements.\\n\\n      ```scss\\n      // visibility\\n      .invisible { visibility: hidden; }\\n      .visibile { visibility: visible; }\\n\\n      // display\\n      .hide { display: none; }\\n      .show { display: initial; }\\n      ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"visibility\"],[[\"usageTitle\"],[\"Usage\"]],{\"statements\":[[0,\"      \"],[7,\"span\"],[11,\"class\",\"invisible\"],[9],[0,\"Hey!\"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"visible\"],[9],[0,\"Look\"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"hide\"],[9],[0,\"at\"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"show\"],[9],[0,\"me\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-note\",[\"visibility-important--notes\"],null,{\"statements\":[[0,\"      Helpers to hide/show elements.\\n\\n      ```scss\\n      // display !important\\n      .hide-i { display: none !important; }\\n      .show-i { display: initial !important; }\\n      ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"visibility-important\"],[[\"usageTitle\"],[\"Usage\"]],{\"statements\":[[0,\"      \"],[7,\"span\"],[11,\"class\",\"hide\"],[11,\"style\",\"display: inline;\"],[9],[0,\"Look at\"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"show\"],[11,\"style\",\"display: none;\"],[9],[0,\"me\"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"mt-10\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"hide-i\"],[11,\"style\",\"display: inline;\"],[9],[0,\"Check this\"],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"show-i\"],[11,\"style\",\"display: none;\"],[9],[0,\"out\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Text Alignment\"]],{\"statements\":[[4,\"freestyle-collection\",null,[[\"defaultKey\"],[\"all\"]],{\"statements\":[[4,\"component\",[[22,8,[\"variant\"]]],[[\"key\"],[\"left\"]],{\"statements\":[[4,\"freestyle-note\",[\"left--notes\"],null,{\"statements\":[[0,\"          Use `.text-left` to left align text\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"left\"],[[\"title\"],[\"Left\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"text-left\"],[9],[0,\"Hello World\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,8,[\"variant\"]]],[[\"key\"],[\"center\"]],{\"statements\":[[4,\"freestyle-note\",[\"center--notes\"],null,{\"statements\":[[0,\"          Use `.text-center` to center align text\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"center\"],[[\"title\"],[\"Center\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"center\"],[9],[0,\"Hello World\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,8,[\"variant\"]]],[[\"key\"],[\"right\"]],{\"statements\":[[4,\"freestyle-note\",[\"right--notes\"],null,{\"statements\":[[0,\"          Use `.text-right` to right align text\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"right\"],[[\"title\"],[\"Right\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"right\"],[9],[0,\"Hello World\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[8]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Text Transform\"]],{\"statements\":[[4,\"freestyle-collection\",null,[[\"defaultKey\"],[\"all\"]],{\"statements\":[[4,\"component\",[[22,7,[\"variant\"]]],[[\"key\"],[\"uppercase\"]],{\"statements\":[[4,\"freestyle-note\",[\"uppercase--notes\"],null,{\"statements\":[[0,\"          Use `.uppercase` to transform text to uppercase\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"uppercase\"],[[\"title\"],[\"Uppercase\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"uppercase\"],[9],[0,\"Hello world\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,7,[\"variant\"]]],[[\"key\"],[\"lowercase\"]],{\"statements\":[[4,\"freestyle-note\",[\"lowercase--notes\"],null,{\"statements\":[[0,\"          Use `.lowercase` to transform text to lowercase\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"lowercase\"],[[\"title\"],[\"Lowercase\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"lowercase\"],[9],[0,\"Hello world\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,7,[\"variant\"]]],[[\"key\"],[\"capitalize\"]],{\"statements\":[[4,\"freestyle-note\",[\"capitalize--notes\"],null,{\"statements\":[[0,\"          Use `.capitalize` to transform text to capitalize\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"capitalize\"],[[\"title\"],[\"Capitalize\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"capitalize\"],[9],[0,\"Hello world\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[7]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Text Style\"]],{\"statements\":[[4,\"freestyle-collection\",null,[[\"defaultKey\"],[\"all\"]],{\"statements\":[[4,\"component\",[[22,6,[\"variant\"]]],[[\"key\"],[\"bold\"]],{\"statements\":[[4,\"freestyle-note\",[\"bold--notes\"],null,{\"statements\":[[0,\"          Use `.bold` to change the text style to bold\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"bold\"],[[\"title\"],[\"Bold\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"bold\"],[9],[0,\"Hello world\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,6,[\"variant\"]]],[[\"key\"],[\"italic\"]],{\"statements\":[[4,\"freestyle-note\",[\"italic--notes\"],null,{\"statements\":[[0,\"          Use `.italic` to change the text style to italic\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"italic\"],[[\"title\"],[\"Italic\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"italic\"],[9],[0,\"Hello world\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,6,[\"variant\"]]],[[\"key\"],[\"oblique\"]],{\"statements\":[[4,\"freestyle-note\",[\"oblique--notes\"],null,{\"statements\":[[0,\"          Use `.oblique` to change the text style to oblique\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"oblique\"],[[\"title\"],[\"Oblique\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"oblique\"],[9],[0,\"Hello world\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[6]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Lists\"]],{\"statements\":[[4,\"freestyle-collection\",null,[[\"title\",\"defaultKey\"],[\"Inline Lists\",\"all\"]],{\"statements\":[[4,\"component\",[[22,5,[\"variant\"]]],[[\"key\"],[\"inline\"]],{\"statements\":[[4,\"freestyle-usage\",[\"list-inline\"],[[\"title\"],[\"Inline\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-inline\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 1\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 2\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 3\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,5,[\"variant\"]]],[[\"key\"],[\"inline-block\"]],{\"statements\":[[4,\"freestyle-usage\",[\"list-inline-block\"],[[\"title\"],[\"Inline Block\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-inline-block\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 1\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 2\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 3\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,5,[\"variant\"]]],[[\"key\"],[\"comma\"]],{\"statements\":[[4,\"freestyle-usage\",[\"list-comma\"],[[\"title\"],[\"Comma Separated\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-comma\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 1\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 2\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 3\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[5]},null],[0,\"\\n\"],[4,\"freestyle-collection\",null,[[\"title\",\"defaultKey\"],[\"Stacked Lists\",\"all\"]],{\"statements\":[[4,\"component\",[[22,4,[\"variant\"]]],[[\"key\"],[\"stacked\"]],{\"statements\":[[4,\"freestyle-usage\",[\"list-stacked\"],[[\"title\"],[\"Stacked\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-stacked\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 1\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 2\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 3\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,4,[\"variant\"]]],[[\"key\"],[\"bullet\"]],{\"statements\":[[4,\"freestyle-usage\",[\"list-bullet\"],[[\"title\"],[\"Bullet\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-bullet\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 1\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 2\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 3\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,4,[\"variant\"]]],[[\"key\"],[\"number\"]],{\"statements\":[[4,\"freestyle-usage\",[\"list-number\"],[[\"title\"],[\"Numbered\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-number\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 1\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 2\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"item 3\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[4]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"List Spacing\"]],{\"statements\":[[4,\"freestyle-note\",[\"vertical-list-spacing--notes\"],null,{\"statements\":[[0,\"      Quickly add vetical spacing to the items in a list.\\n\\n      Class names are prefixed with `l-mt-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n      ```scss\\n      .mt-0, .mt-5, .mt-10, ..., .mt-40, .mt-45, .mt-50\\n      ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"vertical-list-spacing\"],[[\"title\"],[\"Vertical\"]],{\"statements\":[[0,\"      \"],[7,\"ul\"],[11,\"class\",\"l-stacked l-mt-10\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"item 1\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"item 2\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"item 3\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-note\",[\"horizontal-list-spacing--notes\"],null,{\"statements\":[[0,\"      Quickly add horizontal spacing to the items in a list.\\n\\n      Class names are prefixed with `l-ml-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n      ```scss\\n      .ml-0, .ml-5, .ml-10, ..., .ml-40, .ml-45, .ml-50\\n      ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"horizontal-list-spacing\"],[[\"title\"],[\"Horizontal\"]],{\"statements\":[[0,\"      \"],[7,\"ul\"],[11,\"class\",\"l-inline l-ml-10\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"item 1\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"item 2\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"item 3\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Margin\"]],{\"statements\":[[4,\"freestyle-collection\",null,[[\"defaultKey\"],[\"all\"]],{\"statements\":[[4,\"component\",[[22,3,[\"variant\"]]],[[\"key\"],[\"top\"]],{\"statements\":[[4,\"freestyle-note\",[\"margin-top--notes\"],null,{\"statements\":[[0,\"          Quickly add a margin to the top of an element.\\n\\n          Class names are prefixed with `mt-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n          ```scss\\n          .mt-0, .mt-5, .mt-10, ..., .mt-40, .mt-45, .mt-50\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"margin-top\"],[[\"title\",\"usageTitle\"],[\"Margin Top\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-stacked\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Look\"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"mt-10\"],[9],[0,\"at\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"me\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,3,[\"variant\"]]],[[\"key\"],[\"right\"]],{\"statements\":[[4,\"freestyle-note\",[\"margin-right--notes\"],null,{\"statements\":[[0,\"          Quickly add a margin to the right of an element.\\n\\n          Class names are prefixed with `mr-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n          ```scss\\n          .mr-0, .mr-5, .mr-10, ..., .mr-40, .mr-45, .mr-50\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"margin-right\"],[[\"title\",\"usageTitle\"],[\"Margin Right\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-inline\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Look\"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"mr-10\"],[9],[0,\"at\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"me\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,3,[\"variant\"]]],[[\"key\"],[\"bottom\"]],{\"statements\":[[4,\"freestyle-note\",[\"margin-bottom--notes\"],null,{\"statements\":[[0,\"          Quickly add a margin to the bottom of an element.\\n\\n          Class names are prefixed with `mb-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n          ```scss\\n          .mb-0, .mb-5, .mb-10, ..., .mb-40, .mb-45, .mb-50\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"margin-bottom\"],[[\"title\",\"usageTitle\"],[\"Margin Bottom\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-stacked\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Look\"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"mb-10\"],[9],[0,\"at\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"me\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,3,[\"variant\"]]],[[\"key\"],[\"left\"]],{\"statements\":[[4,\"freestyle-note\",[\"margin-left--notes\"],null,{\"statements\":[[0,\"          Quickly add a margin to the left of an element.\\n\\n          Class names are prefixed with `ml-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n          ```scss\\n          .ml-0, .ml-5, .ml-10, ..., .ml-40, .ml-45, .ml-50\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"margin-left\"],[[\"title\",\"usageTitle\"],[\"Margin Left\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-inline\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Look\"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"ml-10\"],[9],[0,\"at\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"me\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,3,[\"variant\"]]],[[\"key\"],[\"other\"]],{\"statements\":[[4,\"freestyle-note\",[\"margin-horz--notes\"],null,{\"statements\":[[0,\"          Quickly add horizontal margin to an element.\\n\\n          Class names are prefixed with `mh-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n          ```scss\\n          .mh-0, .mh-5, .mh-10, ..., .mh-40, .mh-45, .mh-50\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"margin-horz\"],[[\"title\",\"usageTitle\"],[\"Horizontal\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-inline\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Look\"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"mh-10\"],[9],[0,\"at\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"me\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-note\",[\"margin-vert--notes\"],null,{\"statements\":[[0,\"          Quickly add vertical margin to an element.\\n\\n          Class names are prefixed with `mv-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n          ```scss\\n          .mv-0, .mv-5, .mv-10, ..., .mv-40, .mv-45, .mv-50\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"margin-vert\"],[[\"title\",\"usageTitle\"],[\"Vertical\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-stacked\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Look\"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"mv-10\"],[9],[0,\"at\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"me\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-note\",[\"margin-auto--notes\"],null,{\"statements\":[[0,\"          Quickly add auto margin to an element.\\n\\n          ```scss\\n          .m-auto { margin: auto; }\\n          .mv-auto { margin: auto 0; }\\n          .mh-auto { margin: 0 auto; }\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"margin-auto\"],[[\"title\",\"usageTitle\"],[\"Auto\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"mh-auto\"],[11,\"style\",\"width: 150px;\"],[9],[0,\"\\n            Look at me\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[3]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Padding\"]],{\"statements\":[[4,\"freestyle-collection\",null,[[\"defaultKey\"],[\"all\"]],{\"statements\":[[4,\"component\",[[22,2,[\"variant\"]]],[[\"key\"],[\"top\"]],{\"statements\":[[4,\"freestyle-note\",[\"padding-top--notes\"],null,{\"statements\":[[0,\"          Quickly add a padding to the top of an element.\\n\\n          Class names are prefixed with `pt-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n          ```scss\\n          .pt-0, .pt-5, .pt-10, ..., .pt-40, .pt-45, .pt-50\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"padding-top\"],[[\"title\",\"usageTitle\"],[\"Padding Top\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-stacked\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Look\"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"pt-10\"],[9],[0,\"at\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"me\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,2,[\"variant\"]]],[[\"key\"],[\"right\"]],{\"statements\":[[4,\"freestyle-note\",[\"padding-right--notes\"],null,{\"statements\":[[0,\"          Quickly add a padding to the right of an element.\\n\\n          Class names are prefixed with `pr-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n          ```scss\\n          .pr-0, .pr-5, .pr-10, ..., .pr-40, .pr-45, .pr-50\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"padding-right\"],[[\"title\",\"usageTitle\"],[\"Padding Right\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-inline\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Look\"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"pr-10\"],[9],[0,\"at\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"me\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,2,[\"variant\"]]],[[\"key\"],[\"bottom\"]],{\"statements\":[[4,\"freestyle-note\",[\"padding-bottom--notes\"],null,{\"statements\":[[0,\"          Quickly add a padding to the bottom of an element.\\n\\n          Class names are prefixed with `pb-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n          ```scss\\n          .pb-0, .pb-5, .pb-10, ..., .pb-40, .pb-45, .pb-50\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"padding-bottom\"],[[\"title\",\"usageTitle\"],[\"Padding Bottom\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-stacked\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Look\"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"pb-10\"],[9],[0,\"at\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"me\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,2,[\"variant\"]]],[[\"key\"],[\"left\"]],{\"statements\":[[4,\"freestyle-note\",[\"padding-left--notes\"],null,{\"statements\":[[0,\"          Quickly add a padding to the left of an element.\\n\\n          Class names are prefixed with `pl-` and followed by a number between 0 and 50 (in increments of 5).\\n\\n          ```scss\\n          .pl-0, .pl-5, .pl-10, ..., .pl-40, .pl-45, .pl-50\\n          ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"padding-left\"],[[\"title\",\"usageTitle\"],[\"Padding Left\",\"Usage\"]],{\"statements\":[[0,\"          \"],[7,\"ul\"],[11,\"class\",\"l-inline\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Look\"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"pl-10\"],[9],[0,\"at\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"me\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/helper-classes.hbs" } });
});
;define("dummy/templates/components/docs/naming-conventions-block", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RRL5MGd0", "block": "{\"symbols\":[],\"statements\":[[4,\"component\",[[23,[\"section\",\"subsection\"]]],[[\"name\"],[\"Block\"]],{\"statements\":[[4,\"freestyle-note\",[\"naming-block--notes\"],null,{\"statements\":[[0,\"    #### Naming Convention\\n    `.class-name`\\n\\n    #### Purpose\\n    Add styles to an element\\n\\n    #### Example\\n\\n    ```\\n    .ui-btn {\\n      display: inline-block;\\n      background-color: #3498db;\\n      padding: 10px 25px;\\n      border: 1px solid #2980b9;\\n      border-radius: 3px;\\n      user-select: none;\\n\\n      font-size: 14px;\\n      text-align: center;\\n      text-transform: capitalize;\\n      cursor: pointer;\\n      color: #fff;\\n    }\\n    ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"naming-block\"],[[\"title\",\"usageTitle\"],[\"Block\",\"usage\"]],{\"statements\":[[0,\"    \"],[7,\"button\"],[11,\"class\",\"ui-btn\"],[9],[0,\"Button\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/naming-conventions-block.hbs" } });
});
;define("dummy/templates/components/docs/naming-conventions-element", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VxrTrmn6", "block": "{\"symbols\":[],\"statements\":[[4,\"component\",[[23,[\"section\",\"subsection\"]]],[[\"name\"],[\"Element\"]],{\"statements\":[[4,\"freestyle-note\",[\"naming-element--notes\"],null,{\"statements\":[[0,\"    `.class-name__element`\\n\\n    #### Purpose\\n    Add styles to a child element of another `block` class.\\n\\n    #### When to Use\\n    You are creating a class that is both a child of and contextually related to another `block` element.\\n\\n    Following this pattern you can see how `nav` and `nav__item` helps describe what the markup looks like and the context and relationship between the classes.\\n\\n    #### Example\\n\\n    ```\\n    .ui-btn {\\n      display: inline-block;\\n      background-color: #3498db;\\n      // ...\\n\\n      &__subtext {\\n        margin: 5px;\\n        font-size: 8px;\\n        text-transform: uppercase;\\n        letter-spacing: 1px;\\n      }\\n    }\\n\\n    /* css */\\n    .ui-btn {\\n      display: inline-block;\\n      background-color: #3498db;\\n      // ...\\n    }\\n\\n    .ui-btn__subtext {\\n      margin: 5px;\\n      font-size: 8px;\\n      text-transform: uppercase;\\n      letter-spacing: 1px;\\n    }\\n    ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"naming-element\"],[[\"title\",\"usageTitle\"],[\"Element\",\"usage\"]],{\"statements\":[[0,\"    \"],[7,\"button\"],[11,\"class\",\"ui-btn\"],[9],[0,\"\\n      Button\\n      \"],[7,\"div\"],[11,\"class\",\"ui-btn__subtext\"],[9],[0,\"Subtext\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/naming-conventions-element.hbs" } });
});
;define("dummy/templates/components/docs/naming-conventions-helper", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dvp+R+95", "block": "{\"symbols\":[],\"statements\":[[4,\"component\",[[23,[\"section\",\"subsection\"]]],[[\"name\"],[\"Helper\"]],{\"statements\":[[4,\"freestyle-note\",[\"naming-helper-class--notes\"],null,{\"statements\":[[0,\"    `.helper-name`\\n\\n    #### Purpose\\n    Atomic helper classes that can be used to adds/modifies properties of another `block` or `modifier` class.\\n\\n    #### When to Use\\n    Helpers are super generic variation classes. That can be used to add specific properties to any other class.\\n\\n    A good example of helper-class classes would be when you want to style helper-classs in size or state.\\n\\n    For example while it might make sense to have the classes `\\\"ui-btn\\\"` and `\\\"ui-btn--success\\\"` it would make much less sense to start creating classes like this `\\\"ui-btn\\\"`, `\\\"ui-btn--success\\\"`, `\\\"ui-btn--small\\\"`, `\\\"ui-btn--success--small\\\"`.\\n\\n    Instead we can create atomic classes that are related to and modify the `block` or `modifier` class.\\n\\n    #### Example\\n\\n    ```\\n    .bold {\\n      text-transform: uppercase;\\n    }\\n\\n    .invisible {\\n      visibility: hidden;\\n    }\\n    ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"naming-helper-class\"],[[\"title\",\"usageTitle\"],[\"Helper\",\"usage\"]],{\"statements\":[[0,\"    \"],[7,\"button\"],[11,\"class\",\"ui-btn bold\"],[9],[0,\"Default Button\"],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"ui-btn invisible\"],[9],[0,\"Default Button\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/naming-conventions-helper.hbs" } });
});
;define("dummy/templates/components/docs/naming-conventions-modifier", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EqDePpZe", "block": "{\"symbols\":[],\"statements\":[[4,\"component\",[[23,[\"section\",\"subsection\"]]],[[\"name\"],[\"Modifier\"]],{\"statements\":[[4,\"freestyle-note\",[\"naming-modifier--notes\"],null,{\"statements\":[[0,\"    `.class-name--modifier`\\n\\n    #### Purpose\\n    A class that inherits and modifies the properties of a `block` class.\\n\\n    #### When to Use\\n    You want to create a new `block` that is a variation of another `block` class.\\n\\n    #### Example\\n\\n    ```\\n    .ui-btn {\\n      display: inline-block;\\n      background-color: #3498db;\\n      // ...\\n\\n      &--outline {\\n        @extend .ui-btn;\\n        background-color: initial;\\n        color: #2980b9;\\n      }\\n    }\\n\\n    /* css */\\n    .ui-btn,\\n    .ui-btn--outline {\\n      display: inline-block;\\n      background-color: #3498db;\\n      // ...\\n    }\\n\\n    .ui-btn--outline {\\n      background-color: initial;\\n      color: #2980b9;\\n    }\\n    ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"naming-modifier\"],[[\"title\",\"usageTitle\"],[\"Modifier\",\"usage\"]],{\"statements\":[[0,\"    \"],[7,\"button\"],[11,\"class\",\"ui-btn--outline\"],[9],[0,\"Outline\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/naming-conventions-modifier.hbs" } });
});
;define("dummy/templates/components/docs/naming-conventions-variation", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PM8aOuii", "block": "{\"symbols\":[],\"statements\":[[4,\"component\",[[23,[\"section\",\"subsection\"]]],[[\"name\"],[\"Variation\"]],{\"statements\":[[4,\"freestyle-note\",[\"naming-variation--notes\"],null,{\"statements\":[[0,\"    `.class-name-variation`\\n\\n    #### Purpose\\n    A class that adds/modifies properties to other `block` and `modifier` classes.\\n\\n    #### When to Use\\n    Variations are more generic than `modifier` classes. You should think of them like atomic classes or a mixin that relates to specific `block` and `modifier` classes.\\n\\n    A good example of variation classes would be when you want to style variations in size or state.\\n\\n    For example while it might make sense to have the classes `\\\"ui-btn\\\"` and `\\\"ui-btn--success\\\"` it would make much less sense to start creating classes like this `\\\"ui-btn\\\"`, `\\\"ui-btn--success\\\"`, `\\\"ui-btn--small\\\"`, `\\\"ui-btn--success--small\\\"`.\\n\\n    Instead we can create atomic classes that are related to and modify the `block` or `modifier` class.\\n\\n    #### Example\\n\\n    ```\\n    .ui-btn-small {\\n      font-size: 10px;\\n    }\\n\\n    .ui-btn-disabled {\\n      opacity: 0.5;\\n      cursor: not-allowed;\\n    }\\n    ```\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"freestyle-usage\",[\"naming-variation\"],[[\"title\",\"usageTitle\"],[\"Variation\",\"usage\"]],{\"statements\":[[0,\"    \"],[7,\"button\"],[11,\"class\",\"ui-btn\"],[9],[0,\"Default Button\"],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"ui-btn ui-btn-small\"],[9],[0,\"Small Default Button\"],[10],[0,\"\\n\\n    \"],[7,\"button\"],[11,\"class\",\"ui-btn--outline ui-btn-small\"],[9],[0,\"Small Outline Button\"],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"ui-btn--outline ui-btn-small ui-btn-disabled\"],[11,\"disabled\",\"\"],[9],[0,\"Small Disabled Outline Button\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/naming-conventions-variation.hbs" } });
});
;define("dummy/templates/components/docs/naming-conventions", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "X03y65Z/", "block": "{\"symbols\":[\"section\"],\"statements\":[[4,\"freestyle-section\",null,[[\"name\"],[\"Naming Conventions\"]],{\"statements\":[[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Overview\"]],{\"statements\":[[4,\"freestyle-annotation\",null,null,{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[0,\"Vanilla UI mostly follows a BEM (block, element, modifier) pattern with atomic variations and helper classes.\"],[10],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\"The naming convention allows developers to understand the relationship between elements and/or the purpose of a specific class from the class name alone.\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"docs/naming-conventions-block\",null,[[\"section\"],[[22,1,[]]]]],false],[0,\"\\n  \"],[1,[27,\"docs/naming-conventions-element\",null,[[\"section\"],[[22,1,[]]]]],false],[0,\"\\n  \"],[1,[27,\"docs/naming-conventions-modifier\",null,[[\"section\"],[[22,1,[]]]]],false],[0,\"\\n  \"],[1,[27,\"docs/naming-conventions-variation\",null,[[\"section\"],[[22,1,[]]]]],false],[0,\"\\n  \"],[1,[27,\"docs/naming-conventions-helper\",null,[[\"section\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[7,\"style\"],[9],[0,\"\\n  .ui-btn,\\n  .ui-btn--outline {\\n    display: inline-block;\\n    background-color: #3498db;\\n    padding: 10px 25px;\\n    border: 1px solid #2980b9;\\n    border-radius: 3px;\\n    user-select: none;\\n\\n    font-size: 14px;\\n    text-align: center;\\n    text-transform: capitalize;\\n    cursor: pointer;\\n    color: #fff;\\n  }\\n\\n  .ui-btn--outline {\\n    background-color: initial;\\n    color: #2980b9;\\n  }\\n\\n  .ui-btn-small {\\n    font-size: 10px;\\n  }\\n\\n  .ui-btn-disabled {\\n    opacity: 0.5;\\n    cursor: not-allowed;\\n  }\\n\\n  .ui-btn__subtext {\\n    margin-top: 5px;\\n    font-size: 8px;\\n    text-transform: uppercase;\\n    letter-spacing: 1px;\\n  }\\n\\n  p code {\\n    color: #9b59b6;\\n  }\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/naming-conventions.hbs" } });
});
;define("dummy/templates/components/docs/ui-components", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UYa9PVvF", "block": "{\"symbols\":[\"section\",\"dynamic\"],\"statements\":[[4,\"freestyle-section\",null,[[\"name\"],[\"Components\"]],{\"statements\":[[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Lists\"]],{\"statements\":[[4,\"freestyle-dynamic\",[\"ui-list\"],[[\"dynamicProperties\",\"title\",\"componentName\"],[[23,[\"dynamicProperties\"]],\"ui-list\",\"ui-list\"]],{\"statements\":[[4,\"ui-list\",null,[[\"theme\",\"margin\"],[[22,2,[\"theme\"]],[22,2,[\"margin\"]]]],{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[0,\"item 1\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"item 2\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"item 3\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"item 4\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/ui-components.hbs" } });
});
;define("dummy/templates/components/docs/vanilla-ui", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DUcIsD5L", "block": "{\"symbols\":[\"section\"],\"statements\":[[4,\"freestyle-section\",null,[[\"name\"],[\"Vanilla UI\"]],{\"statements\":[[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Overview\"]],{\"statements\":[[4,\"freestyle-annotation\",null,null,{\"statements\":[[0,\"      \"],[7,\"code\"],[9],[0,\"vanilla-ui\"],[10],[0,\" follows a BEM \"],[7,\"strong\"],[9],[0,\"block\"],[10],[0,\", \"],[7,\"strong\"],[9],[0,\"element\"],[10],[0,\", \"],[7,\"strong\"],[9],[0,\"modifier\"],[10],[0,\" pattern with \"],[7,\"strong\"],[9],[0,\"variations\"],[10],[0,\".\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"File Organization\"]],{\"statements\":[[4,\"freestyle-note\",[\"file-organization--notes\"],null,{\"statements\":[[0,\"      Example file organization below.\\n\\n      ```\\n      // Variables & Mixins\\n      @import 'partials/modules';\\n\\n      // Normalize\\n      @import 'partials/normalize';\\n\\n      // Base\\n      @import 'partials/base/box-sizing';\\n      @import 'partials/base/fonts';\\n      @import 'partials/base/typography';\\n      @import 'partials/base/lists';\\n      @import 'partials/base/flex';\\n\\n      // Vendor\\n      @import 'vendor/my-addon';\\n\\n      // Components\\n      @import 'partials/component/ui-button';\\n\\n      // Helpers\\n      @import 'partials/helpers';\\n      ```\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"freestyle-usage\",[\"file-organization\"],[[\"title\"],[\"Files\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n\"],[1,[21,\"docs/naming-conventions\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/vanilla-ui.hbs" } });
});
;define("dummy/templates/components/docs/visual-style", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iOOuFWni", "block": "{\"symbols\":[\"section\"],\"statements\":[[4,\"freestyle-section\",null,[[\"name\"],[\"Visual Style\"]],{\"statements\":[[4,\"component\",[[22,1,[\"subsection\"]]],[[\"name\"],[\"Color\"]],{\"statements\":[[4,\"freestyle-usage\",[\"fp\"],[[\"title\",\"usageTitle\"],[\"Freestyle Palette\",\"Usage\"]],{\"statements\":[[0,\"      \"],[1,[27,\"freestyle-palette\",null,[[\"colorPalette\",\"title\",\"description\"],[[23,[\"colorPalette\"]],\"Dummy App Color Palette\",\"This component displays the color palette specified in freestyle/palette.json\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/visual-style.hbs" } });
});
;define('dummy/templates/components/freestyle-collection', ['exports', 'ember-freestyle/templates/components/freestyle-collection'], function (exports, _freestyleCollection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleCollection.default;
    }
  });
});
;define('dummy/templates/components/freestyle-guide', ['exports', 'ember-freestyle/templates/components/freestyle-guide'], function (exports, _freestyleGuide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleGuide.default;
    }
  });
});
;define('dummy/templates/components/freestyle-menu', ['exports', 'ember-freestyle/templates/components/freestyle-menu'], function (exports, _freestyleMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleMenu.default;
    }
  });
});
;define('dummy/templates/components/freestyle-notes', ['exports', 'ember-freestyle/templates/components/freestyle-notes'], function (exports, _freestyleNotes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleNotes.default;
    }
  });
});
;define('dummy/templates/components/freestyle-palette-item', ['exports', 'ember-freestyle/templates/components/freestyle-palette-item'], function (exports, _freestylePaletteItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestylePaletteItem.default;
    }
  });
});
;define('dummy/templates/components/freestyle-palette', ['exports', 'ember-freestyle/templates/components/freestyle-palette'], function (exports, _freestylePalette) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestylePalette.default;
    }
  });
});
;define('dummy/templates/components/freestyle-section', ['exports', 'ember-freestyle/templates/components/freestyle-section'], function (exports, _freestyleSection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleSection.default;
    }
  });
});
;define('dummy/templates/components/freestyle-snippet', ['exports', 'ember-freestyle/templates/components/freestyle-snippet'], function (exports, _freestyleSnippet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleSnippet.default;
    }
  });
});
;define('dummy/templates/components/freestyle-subsection', ['exports', 'ember-freestyle/templates/components/freestyle-subsection'], function (exports, _freestyleSubsection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleSubsection.default;
    }
  });
});
;define('dummy/templates/components/freestyle-usage-controls', ['exports', 'ember-freestyle/templates/components/freestyle-usage-controls'], function (exports, _freestyleUsageControls) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleUsageControls.default;
    }
  });
});
;define('dummy/templates/components/freestyle-usage', ['exports', 'ember-freestyle/templates/components/freestyle-usage'], function (exports, _freestyleUsage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleUsage.default;
    }
  });
});
;define('dummy/templates/components/freestyle-variant-list', ['exports', 'ember-freestyle/templates/components/freestyle-variant-list'], function (exports, _freestyleVariantList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleVariantList.default;
    }
  });
});
;define('dummy/templates/components/freestyle-variant', ['exports', 'ember-freestyle/templates/components/freestyle-variant'], function (exports, _freestyleVariant) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _freestyleVariant.default;
    }
  });
});
;define('dummy/vanilla-ui/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/ui-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-list.js should pass ESLint\n\n');
  });
});
;define('dummy/vanilla-ui/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/ui-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-list.js should pass ESLint\n\n');
  });
});
;define('dummy/vanilla-ui/tests/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('addon/templates/components/ui-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/ui-list.hbs should pass TemplateLint.\n\n');
  });
});
;

;define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("dummy/app")["default"].create({});
          }
        
//# sourceMappingURL=dummy.map
