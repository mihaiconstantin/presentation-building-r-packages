'use strict';

// Imports.
import * as utils from './utilities.js';
import { revealConfig } from './config.js';
import store from './store.js';

// Load the template.
const Presentation = httpVueLoader('../content/presentation/Presentation.vue');


// Initialize `vue` instance.
new Vue({
    store: store,


    render: h => h(Presentation),


    beforeCreate() {
        // Inject printing styles.
        utils.injectPrintStyles();
    },


    watch: {
        isReady() {
            this.$nextTick(() => {
                // I start to believe that this timeout is necessary due to `httpVueLoader`...
                setTimeout(() => {
                    Reveal.initialize(revealConfig);
                }, 100);
            });
        }
    },


    computed: {
        isReady() {
            return this.$store.getters.isReady;
        }
    }


}).$mount('#presentation');
