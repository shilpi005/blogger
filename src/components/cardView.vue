<template>
  <div class="main-div primary">
    <v-progress-circular
      :size="70"
      :width="7"
      color="#808080"
      indeterminate
      v-if="sending"
      style="text-align: center; display: block; margin: auto"
    ></v-progress-circular>
    <v-card
      style="background-color: #808080; color: #fff; margin-bottom: 10px"
      class="mx-auto"
      max-width="1400"
      v-for="detail in details"
      :key="detail.id"
    >
      <v-card-title v-model="cardTitle" style="font-size: 30px">{{
        detail.title.substring(0,20)+".." 
      }}</v-card-title>
      <v-card-text class="white--text" v-html='detail.content.substring(0,300)+".." ' style="color:white"> </v-card-text>
      <v-card-actions>
        <v-btn class="seeMore ml-2" @click="showmore(detail.id)" text small color="#fff">
          see More
        </v-btn>
      </v-card-actions>
      <v-card-subtitle class="white--text" style="font-size: 14px">
        created: {{ moment(detail.created).format("MMMM Do YYYY, h:mm:ss a") }}
      </v-card-subtitle>
    </v-card>
    <div
      v-if="details.length"
      v-observe-visibility="handleScrolledToBottom"
    ></div>
  </div>
</template>

  
<script>
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import API_BASE from "../common/api";
import moment from "moment";
import VueLoadmore from "vuejs-loadmore";
Vue.use(VueAxios, axios, VueLoadmore);
export default {
  data: () => ({
    cardTitle: "",
    cardText: "",
    sending: false,
    API_BASE: API_BASE,
    details: [],
    moment: moment,
    page: 1,
    lastPage: 1,
  }),
  mounted() {
    this.getuserPostdata();
  },
  methods: {
    showmore(id) {
      //console.log("id", id)
      this.$router.push({ 
        name: "showMore" ,
        params: {id:id}
      });
    },
    getuserPostdata() {
      this.sending = true;

      const authUser = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      };
      axios
        .get(
          API_BASE +
            "blog/" +
            "?page_number=" +
            this.page ,
          authUser
        )
        .then((response) => {
          this.details.push(...response.data.data);
          this.lastPage = response.data.page_info.page_total;
          this.sending = false;
        });
    },
   
    handleScrolledToBottom(isVisible) {
      if (!isVisible) {
        return;
      }
      if (this.page >= this.lastPage) {
        return;
      }
      //console.log("abc");
      this.page++;
      this.getuserPostdata();
    },
  },
};
</script>
  <style>
.main-div {
  min-height: 100vh;
  padding: 30px 70px;
}
.mypost{
  cursor:pointer;
  text-decoration: underline;
}
.seeMore {
  background-color: #000000;
}
</style>