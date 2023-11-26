import { colors } from './theme.js';
import { properties } from './properties.js';
import BigHead from './components/BigHead.vue';

export default {
  install: (app, options) => {
    app.component('BigHead', BigHead);

    app.config.globalProperties.$bigHeadsExtras = () => {
      return typeof options != 'undefined' ? options : {};
    };
  }
};

export { colors, properties, BigHead };
