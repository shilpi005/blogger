<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px" scrollable>
      <template v-slot:activator="{ on, attrs }">
        <Span class="white--text py-3" dark v-bind="attrs" v-on="on">
          Change Password
        </Span>
      </template>
      <v-card>
        <v-card-title class="title">
          <span class="text-h5">Change password</span>
          <v-spacer></v-spacer>
          <v-btn icon color="white" text @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-form lazy-validation ref="changePasswordForm">
          <v-card-text class="pt-5" style="background-color: #808080">
            <v-container>
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                    solo
                    background-color="#fff"
                    v-model="oldPassword"
                    placeholder="Old Password"
                    :type="eye1 ? 'text' : 'password'"
                    :append-icon="eye1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="eye1 = !eye1"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    class="feild"
                    solo
                    background-color="#fff"
                    v-model="newPassword"
                    placeholder="New Password"
                    :type="eye2 ? 'text' : 'password'"
                    :append-icon="eye2 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="eye2 = !eye2"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                  solo
                    background-color="#fff"
                    placeholder="Confirm Password"
                    v-model="confirmPassword"
                    :type="eye3 ? 'text' : 'password'"
                    :append-icon="eye3 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="eye3 = !eye3"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="actions">
            <v-spacer></v-spacer>
            <v-btn class="action-btn mx-4" text @click="submitChangepassword()">
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
import rules from "@/common/fieldRule";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";

import API_BASE from "../common/api";
Vue.use(VueAxios, axios);
export default {
  name: "changePassword",
  data: () => ({
    dialog: false,
    eye2: false,
    eye1: false,
    eye3: false,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    rules: rules,
    API_BASE: API_BASE,
    accessToken: "",
  }),

  watch: {
    dialog() {
      console.log(this.dialog);
      if (this.dialog) this.openModal();
      else this.closeModal();
    },
  },

  // computed:{
  //   buttonToggle(){
  //     console.log('gettingaccessstoken',localStorage.getItem('access_token'))
  //     return(
  //       localStorage.getItem('access_token')
  //     )
  //   }
  // },

  methods: {
    openModal() {
      console.log("modal open");
    },
    closeModal() {
      console.log("modal close");
      this.$refs.changePasswordForm.reset();

      (this.oldPassword = ""),
        (this.newPassword = ""),
        (this.confirmPassword = "");
    },
    submitChangepassword() {
      if (this.$refs.changePasswordForm.validate()) {
        console.log("validate", this.oldPassword);
        console.log("validate", this.newPassword);
        console.log("validate", this.confirmPassword);
        if (this.newPassword != this.confirmPassword) {
          alert("re-enter your new password correctly");
        } else {
          // console.log("not validate");

          const value = {
            password: this.oldPassword,
            new_password: this.newPassword,
          };
          const auth = {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
            // authorization : `Bearer ${localStorage.getItem('access_token')}`
          };
          console.log(auth);
          Vue.axios
            .post(API_BASE + "user/change-password/", value, auth)
            .then((response) => {
              console.log(response.data);
              // localStorage.setItem('access_token',response.data)
              // localStorage.setItem('refresh_token',response.data)

              this.dialog = false;
            });
        }
      }
    },
  },
};
</script>
  
  <style scoped>
.title {
  background-color: #000;
  color: #fff;
}
.actions {
  background-color: #000;
}
.action-btn {
  background-color: #808080;
  color: #fff;
}
.feild label {
  margin-bottom: 20px;
  padding: 20px;
}
</style>