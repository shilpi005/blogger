<template>
  <!-- <v-row justify="end" class="text-right"> -->
  <v-dialog v-model="dialog" persistent max-width="600px" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="#808080" class="mr-3" dark v-bind="attrs" v-on="on" v-if="buttonToggle? false:true">
        Login/signup
      </v-btn>
    </template>
    <v-card v-if="show">
      <v-card-title class="text-h5 login-heading">
        <span>Login</span>
        <v-spacer></v-spacer>
        <v-btn icon color="black" text @click="dialog = false">
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-form lazy-validation ref="loginForm">
        <v-card-text class="form-card px-4">
          <v-row no-gutters>
            <v-col cols="12" sm="12">
              <span class="white--text">Email</span>
              <v-text-field
                type="email"
                v-model="email"
                label="E.g. abc@xyz.co.in"
                single-line
                solo
                flat
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <span class="white--text">Password</span>
              <v-text-field
                v-model="password"
                :rules="[rules.required]"
                label=""
                :type="eye ? 'text' : 'password'"
                single-line
                solo
                flat
                :append-icon="eye ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="toggleMarker"
              ></v-text-field>
            </v-col>
          </v-row>
          <span class="white--text signup-btn" @click="show = false"
            >Not a member? Signup here
            <v-icon color="#fff" size="20">mdi-arrow-right</v-icon></span
          >
        </v-card-text>

        <v-card-actions style="background-color: #000000">
          <v-spacer></v-spacer>

          <v-btn
            class="white--text mr-4"
            @click="submit()"
            justify-left
            color="#808080"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>

    <v-card v-else>
      <v-card-title class="text-h5 login-heading">
        <span @click="show = true"
          ><v-icon color="#fff" class="mr-2">mdi-arrow-left</v-icon>Signup</span
        >
        <v-spacer></v-spacer>
        <v-btn icon color="black" text @click="dialog = false">
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-form lazy-validation ref="signupForm">
        <v-card-text class="form-card py-4">
          <v-row no-gutters>
            <v-col cols="12" sm="12">
              <span class="white--text">Name</span>
              <v-text-field
                :rules="[rules.required]"
                v-model="name"
                label="E.g. Neha Kumari"
                single-line
                solo
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <span class="white--text">Email</span>
              <v-text-field
                type="email"
                label="E.g. abc@xyz.co.in"
                :rules="[rules.email]"
                v-model="mail"
                single-line
                solo
                flat
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <span class="white--text">Password</span>
              <v-text-field
                v-model="pass"
                :rules="[rules.required]"
                label=""
                :type="eye1 ? 'text' : 'password'"
                single-line
                solo
                flat
                :append-icon="eye1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="eye1 = !eye1"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <span class="white--text">Confirm Password</span>
              <v-text-field
                v-model="conpass"
                :rules="[rules.required]"
                label=""
                :type="eye ? 'text' : 'password'"
                single-line
                solo
                flat
                :append-icon="eye ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="eye = !eye"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <!-- <v-divider></v-divider> -->
        <v-card-actions style="background-color: #000000">
          <v-spacer></v-spacer>

          <v-btn class="white--text" color="#808080" @click="submitSignup()">
            Signup
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
  <!-- </v-row> -->
</template>
  
<script>
import rules from "@/common/fieldRule";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";

import API_BASE from "../common/api";
// import setAuthHeader from '../utils/setAuthHeader';
Vue.use(VueAxios,axios)
export default {
  name: "logIn",

  data: () => ({
    eye1: false,
    dialog: false,
    eye: false,
    show: true,
    email: "",
    password: "",
    name: "",
    mail: "",
    pass: "",
    conpass: "",
    rules: rules,
    API_BASE: API_BASE,
    accessToken:''
  }),
  watch: {
    dialog() {
      console.log(this.dialog);
      if (this.dialog) this.openModal();
      else this.closeModal();
    },
  },
  computed:{
    buttonToggle(){
      console.log('jsjsj',localStorage.getItem('access_token'))
      return(
        localStorage.getItem('access_token')
      )
    }
  },
  methods: {
    toggleMarker() {
      this.eye = !this.eye;
    },
    clicked() {
      // this.show=!this.show
      this.show = false;
    },
    openModal() {
      console.log("modal open");
    },
    closeModal() {
      console.log("modal close");
      if (this.show) {
        console.log("ckecked");
        this.$refs.loginForm.reset();
      }
      (this.email = ""),
        (this.password = ""),
        (this.name = ""),
        (this.mail = ""),
        (this.pass = ""),
        (this.conpass = ""),
        (this.show = true);
    },
    submit() {
      if (this.$refs.loginForm.validate()) {
        console.log("validate");
        
        const body = {
            email: this.email,
            password: this.password,
          };

          Vue.axios
            .post(API_BASE + "user/login/", body)
            .then((response) => {
              console.log(response.data.data.access_token);
              localStorage.setItem('access_token',response.data.data.access_token)
              localStorage.setItem('refresh_token',response.data.data.refresh_token)
                console.log(response)
              this.dialog=false
            })
            .catch((error) => {
              console.log("Error:::::::::::::", error);
              // this.signupLoader = false;
            });


      } else {
        console.log("not validtae");
      }
    },
    submitSignup() {
      if (this.$refs.signupForm.validate()) {
        console.log("validate", this.mail);
        console.log("validate", this.pass);
        if (this.pass != this.conpass) {
          alert("Re-enter your password correctly");
        } else {
          // let result = axios.post(
          //   "https://djangomock.pythonanywhere.com/user/register/",
          //   {
          //     email: this.mail,
          //     password: this.pass,
          //   }

          // );
          // console.log(result)
          const body = {
            email: this.mail,
            password: this.pass,
          };

          Vue.axios
            .post(API_BASE + "user/register/", body)
            .then((response) => {
              console.log(response.data.data.access_token);
              localStorage.setItem('access_token',response.data.data.access_token)
              localStorage.setItem('refresh_token',response.data.data.refresh_token)

              this.dialog=false
            })
            .catch((error) => {
              console.log("Error:::::::::::::", error);
              // this.signupLoader = false;
            });
          // this.rules;
        }
      }
    },
    checkStorage(){
      this.accessToken = localStorage.getItem('access_token')
    },
  },
  mounted(){
    this.checkStorage()
   
    console.log(this.accessToken)
  }
};
</script>

  <style>
.login-heading {
  background-color: #000000;
  padding: 12px;
  color: #fff;
}
.form-card {
  background-color: #808080;
}
.signup-btn {
  cursor: pointer;
}
</style>