<template>
  <div>
    <div
      style="background-color: #333333; min-height: 100vh; padding: 30px 70px"
    >
      <div class="action-div pb-3" v-if="userid == userId ? true : false">
        <v-btn
          class="edit-btn white--text mr-2"
          color="#000"
          small
          depressed
          @click="addPost({show:true,id:'',type:'edit'})"

          ><v-icon size="18">mdi-square-edit-outline</v-icon>Edit</v-btn
        >
        <v-btn
          class="dlt-btn white--text mr-2"
          color="#000"
          small
          depressed
          @click="dlt()"
          ><v-icon size="18">mdi-trash-can-outline</v-icon>Delete</v-btn
        >
      </div>
      <v-card
        style="background-color: #808080; color: #fff"
        class="mx-auto"
        max-width="1400"
      >
        <v-skeleton-loader
          dark
          class="mx-auto"
          max-width="1400"
          max-height="200"
          type="article"
          v-if="loading"
        ></v-skeleton-loader>
        <span v-else>
          <v-card-title>{{ details.title }}</v-card-title>
          <v-card-text class="white--text" v-html="details.content">
          </v-card-text>
        </span>
      </v-card>
      <div class="comments">
        <div class="d-flex">
          <p class="white--text comment">Comments:</p>
          <v-spacer></v-spacer>
          <addComment />
        </div>
        <div>
          <v-card
            style="
              background-color: #808080;
              color: #fff;
              padding: 10px;
              margin-bottom: 10px;
            "
            v-for="item in items"
            :key="item.id"
          >
            <h5>{{ item.commenthead }}</h5>
            <p>{{ item.commenttext }}</p>
            <span style="font-size: 13px">{{ item.commentdetail }}</span>
          </v-card>
        </div>
      </div>
    </div>
    <footerC />
  </div>
</template>
<script>
import addComment from "./addComment.vue";
import footerC from "./footerC.vue";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import API_BASE from "../common/api";
import { mapActions } from "vuex";
Vue.use(VueAxios, axios);
export default {
  name: "showMore",
  components: {
    addComment,
    footerC,
  },
  data() {
    return {
      loading: false,
      API_BASE: API_BASE,
      userid: "",
      details: [],
      userId: "",
      items: [
        {
          id: 1,
          commenthead: "yuvant says",
          commenttext: "this is test comment",
          commentdetail: "on 11/22/2021, 9:48:21 AM",
        },
        {
          id: 2,
          commenthead: "yuvant says",
          commenttext: "this is test comment",
          commentdetail: "on 11/22/2021, 9:48:21 AM",
        },
      ],
    };
  },

  mounted() {
    this.getdata();
  },
  methods: {
    ...mapActions({
            addPost: "appManagement/addPost",
        }),
        openModal() {
          console.log("modal open", this.getAddPost);
        },
    getdata() {
      this.loading = true;
      const authUser = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      };
      this.userid = localStorage.getItem("user_id");

      axios
        .get(API_BASE + "blog/" + "?blog_id=" + this.$route.params.id, authUser)
        .then((response) => {
          this.details = response.data.data;
          this.userId = this.details.user.id;
          this.loading = false;
        });
    },
    dlt() {
      const authUser = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      };

      axios
        .delete(
          API_BASE + "blog/" + "?blog_id=" + this.$route.params.id,
          authUser
        )
        .then(() => {
          this.$router.push({ name: "homeView" });
        });
    },
    // edit(){
    //   const authUser = {
    //       headers: {
    //         Authorization: "Bearer " + localStorage.getItem("access_token"),
    //       },
    //   }
    //   axios.put( API_BASE + "blog/" + "?blog_id=" + this.$route.params.id , authUser).then(()=> {
    //     console.log('abc');
    //   });
    // },
  },
};
</script>
<style scoped>
.action-div {
  text-align: end;
}
.edit-btn {
  border-color: #fff;
}
.comments {
  padding: 15px;
}
.comment {
  font-weight: 600;
  font-size: 20px;
}
</style>
