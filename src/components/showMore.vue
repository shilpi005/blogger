<template>
    <div>
    <div style="background-color:#333333;min-height:100vh;padding:30px 70px;">
        <navBar />
        <p style="color:#fff;">Posted By: Shivendra Handysolver on 11/5/2021,6:11:41 PM</p>
        <v-card style="background-color:#808080;color:#fff;"
      class="mx-auto"
      max-width="1400">
            <v-card-title>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</v-card-title>
            <v-card-text class="white--text">lorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem ipsumlorem ipsumlorem <br/>ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem <br/>ipsumlorem 
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem<br/> ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem ipsum
              </v-card-text>
        </v-card>
        <div class="comments">
          <div class="d-flex">
          <p class="white--text comment">Comments:</p>
          <v-spacer></v-spacer>
          <addComment  />
        </div>
          <div>
        <v-card style="background-color:#808080;color:#fff;padding:10px; margin-bottom:10px;" v-for="item in items" :key="item.id">
          <h5>{{ item.commenthead }}</h5>
          <p>{{ item.commenttext }}</p>
          <span style="font-size:13px;">{{ item.commentdetail }}</span>
        </v-card>
        </div>
      </div>
    </div>
      <FooterC />
    </div>
</template>
<script>
import navBar from './navBar.vue';
import addComment from './addComment.vue';
import footerC from './footerC.vue';
import FooterC from './footerC.vue';
export default {
  name:'showMore',
  components:{
    navBar,
    addComment,
    footerC,
    FooterC
},
  data(){
    return{
    items:[
      {id:1, commenthead: 'yuvant says', commenttext: 'this is test comment', commentdetail:'on 11/22/2021, 9:48:21 AM'},
      {id:2, commenthead: 'yuvant says', commenttext: 'this is test comment', commentdetail:'on 11/22/2021, 9:48:21 AM'}
    ]
    }
  },
}
</script>
<style scoped>
.comments{
  padding:15px;
}
.comment{
font-weight:600;
font-size:20px;
}

</style>
