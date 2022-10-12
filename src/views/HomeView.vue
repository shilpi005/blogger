<template>
  <div>
    <cardView />
  </div>
</template>

<script>
import cardView from "../components/cardView.vue";
export default {
  name: "HomeView",

  components: {
    cardView,
  },
  methods: {
    mode() {
      console.log(localStorage.getItem("darkMode"));
      if (localStorage.getItem("darkMode") == "true") {
        console.log("true");
        // this.$vuetify.theme.dark = true
      } else {
        console.log("false");
      }
    },
  },
};
</script>
