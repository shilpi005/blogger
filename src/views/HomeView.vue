<template>
  <div>
    <navBar @reload="mode()"/>
    <cardView />
    <!-- <logIn /> -->
    <!-- <createPost /> -->
    <!-- <addComment /> -->
  </div>
</template>

<script>
  import navBar from '../components/navBar.vue'
  import cardView from '../components/cardView.vue'
  // import logIn from '../components/logIn.vue'
  // import createPost from '../components/createPost.vue'
  // import addComment from '../components/addComment.vue'
  export default {
    name: 'HomeView',

    components: {
      navBar,
      cardView,
      // logIn
      // createPost,
      // addComment,
    },
    mounted(){
      // this.$vuetify.theme.dark = true
      // localStorage.setItem("darkMode", "false")
      this.mode()
    },
    methods:{
      mode(){
        console.log(localStorage.getItem('darkMode'));
        if(localStorage.getItem('darkMode')=='true'){
          console.log('true');
          // this.$vuetify.theme.dark = true
        } else {
          console.log('false');
          // this.$vuetify.theme.dark = false
        }
        // this.$vuetify.theme.dark = localStorage.getItem('darkMode')
      }
    }
  }
</script>
