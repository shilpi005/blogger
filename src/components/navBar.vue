<template>
  <div>
    <v-app-bar class="px-11 secondary" elevation="0" app>
      <v-row no-gutters>
        <v-col cols="4">
          <v-img
            class="head-image"
            src="@/assets/image1.png"
            max-width="150px"
            max-heigth="250px"
            @click="image"
          />
        </v-col>
        <v-col cols="8" class="text-right d-flex justify-end">
          <logIn v-if="!accessToken ? true : false" />
          <createPost class="mt-0" v-if="accessToken ? true : false" />
          <v-menu offset-y class="px-5" v-if="accessToken ? true : false">
            <template v-slot:activator="{ on, attrs }">
              <span class="mx-4 mt-2 white--text" v-bind="attrs" v-on="on">
                Hi Test <v-icon color="white">mdi-chevron-down</v-icon>
              </span>
            </template>
            <div class="drpdwn">
              <v-avatar color="#000" size="45" class="avtr" text--center
                >T</v-avatar
              ><br />
              <span style="font-size: 14px" class="py-1">test123@test.com</span>
              <v-divider class="white mt-2 mb-3"></v-divider>
              <ChangePassword />
              <span class="drpdwn-text font-weight-medium" @click="logout"
                >Logout</span
              >
            </div>
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import logIn from "./logIn.vue";
import createPost from "./createPost.vue";
import changePassword from "./changePassword.vue";
import { eventBus } from "../main";
import ChangePassword from "./changePassword.vue";
export default {
  name: "navBar",
  components: {
    logIn,
    createPost,
    changePassword,
    ChangePassword,
  },

  data() {
    return {
      accessToken: "",
    };
  },
  mounted() {
    if (localStorage.getItem("darkMode") == "true") {
      this.switch1 = !true;
    } else {
      this.switch1 = !false;
    }
    eventBus.$on("logged_out", () => {
      this.checkStorage();
    });
    this.checkStorage();
  },
  methods: {
    image() {
      this.$router.push({ name: "homeView" });
    },
    logout() {
      localStorage.clear();
      eventBus.$emit("logged_out");
    },
    checkStorage() {
      this.accessToken = localStorage.getItem("access_token");
    },
  },
};
</script>


<style scoped>
.login-btn {
  padding: 20px;
}
.profile {
  cursor: pointer;
}
.drp-btn {
  margin-right: 20px;
}
.drpdwn {
  background-color: #808080;
  color: #fff;
  padding: 15px;
  text-align: center;
  display: block;
}
.avtr {
  background-color: #000;
}
.drpdwn-text {
  font-size: 15px;
  cursor: pointer;
}
.head-image {
  cursor: pointer;
}
</style>
