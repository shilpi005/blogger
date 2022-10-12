<template>
  <v-dialog v-model="getAddPost.show" persistent max-width="1000px" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="white--text"
        color="#808080"
        v-bind="attrs"
        v-on="on"
        v-if="accessToken ? true : false"
        @click="addPost({ show: true, id: '', type: 'add' })"
      >
        <v-icon x-small>mdi-plus</v-icon>
        Create Post
      </v-btn>
    </template>
    <v-card style="background-color: #808080">
      <v-card-title class="login-heading">
        <span class="text-h5">Create Blog Post</span>
        <v-spacer></v-spacer>
        <v-btn
          icon
          color="black"
          text
          @click="addPost({ show: false, id: '', type: 'add' })"
        >
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form lazy-validation ref="createPostForm">
          <v-row no-gutters class="py-2">
            <v-col cols="12">
              <span class="white--text font-weight-bold">Title:</span>
              <v-text-field
                background-color="white"
                :rules="[rules.heading]"
                v-model="title"
                placeholder="Your title here"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <span class="white--text font-weight-bold">Body:</span>
              <vue-editor
                v-model="contents"
                class="white"
                :rules="[rules.required]"
              />
              <span class="white--text font-weight-bold"
                >Note: The body must be of 50 character</span
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions style="background-color: #000000">
        <v-spacer></v-spacer>

        <v-btn
          class="mr-9 px-8"
          color="white darken-1"
          text
          @click="submitPost()"
          style="background-color: #808080"
          :loading="loading"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { VueEditor } from "vue2-editor";
import rules from "@/common/fieldRule";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import API_BASE from "../common/api";
import { mapActions, mapGetters } from "vuex";

Vue.use(VueAxios, axios);

export default {
  components: { VueEditor },
  data: () => ({
    dialog: false,
    title: "",
    contents: "",
    rules: rules,
    loading: false,
    API_BASE: API_BASE,
    accessToken: "",
  }),
  computed: {
    ...mapGetters({
      getAddPost: "appManagement/getAddPost",
    }),
    show: {
      get() {
        console.log("abdddc");
        if (this.getAddPost.show) return this.getAddPost.show;
        else return null
      },
      set(value) {
        console.log("abdddc");
        this.addPost({ show: value });
      },
    },
  },
  watch: {
    show(value) {
      if (value) {
        console.log("abc");
        this.openModal();
      } else this.closeModal();
    },
  },
  // watch: {
  //   dialog() {
  //     console.log(this.dialog);
  //     if (this.dialog) this.openModal();
  //     else this.closeModal();
  //   },
  // },
  methods: {
    ...mapActions({
      addPost: "appManagement/addPost",
    }),
    openModal() {
      console.log("modal open", this.getAddPost);
    },
    closeModal() {
      console.log("modal close");
      (this.contents = ""),
        (this.title = ""),
        this.$refs.createPostForm.reset();
    },
    submitPost() {
      if (this.$refs.createPostForm.validate()) {
        console.log("validate");
        this.loading = true;
        const postValue = {
          title: this.title,
          content: this.contents,
        };
        const userAuth = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "multipart/form-data",
          },
        };
        const userid = localStorage.getItem("user_id");
        Vue.axios
          .post(API_BASE + "blog/" + "?user_id=" + userid, postValue, userAuth)
          .then((response) => {
            this.loading = false;
            console.log(response.data);

            this.dialog = false;
          })
          .catch((error) => {
            console.log("Error:::::::::::::", error);
            this.loading = false;
            alert("some error ocurred, please Re-enter information again");
          });
      } else {
        alert("Enter details correctly");
      }
    },
    getPost() {},
    checkStorage() {
      this.accessToken = localStorage.getItem("access_token");
    },
  },
  mounted() {
    this.checkStorage();
    console.log(this.getAddPost);
  },
};
</script>
<style scoped>
.login-heading {
  background-color: #000000;
  padding: 12px;
  color: #fff;
}
</style>