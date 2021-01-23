// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/styles.scss'

import Buefy from 'buefy'


import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueMarkdown from 'vue-markdown';

library.add(fas);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('vue-fontawesome', FontAwesomeIcon);
  Vue.component('vue-markdown', VueMarkdown);
  Vue.use(Buefy, {
    defaultIconComponent: "vue-fontawesome",
    defaultIconPack: "fas",
    customIconPacks: {
      fas: {
        sizes: {
          default: "lg",
          "is-small": "1x",
          "is-medium": "2x",
          "is-large": "3x"
        },
        iconPrefix: ""
      }
    }
  });
  Vue.component('Layout', DefaultLayout)
}
