import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: {
                    base: "#333333",
                    // lighten1:''
                },
                secondary: "#000", // black for font
                

                // success:"#3DA922",
                // // success: { base: "#3DA922" },
                // pending: "#1149B7",
                // error: "#CF0404",
            },
            dark: {
                primary: {
                    base: "#333333",
                },
                secondary: "#000",
                orange: "#FF7C1E",
                white: "#ffffff",
                // error: '#b71c1c',
            },
        },
    },

    
});


