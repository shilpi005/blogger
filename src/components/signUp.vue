<template>
    <v-row justify="start" class="text-right mr-2">
      <v-dialog v-model="dialog" persistent max-width="600px" scrollable>
        <template v-slot:activator="{ on, attrs }">
          
          <span class="white--text cursor-pointer" v-bind="attrs" v-on="on">Not a member? Signup here <v-icon color="#fff" size="20">mdi-arrow-right</v-icon></span>
        </template>
        <v-card>
          <v-card-title class="text-h5 login-heading" >
            <span>signup</span>
            <v-spacer></v-spacer>
            <v-btn icon color="black" text @click="dialog = false">
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
          </v-card-title>
  
          <!-- <v-form> -->
          <v-card-text class="form-card">
            <v-row no-gutters>
                <v-col
          cols="12"
          sm="12"
        >
        <span class="white--text">Name</span>
          <v-text-field
            label="E.g. Neha Kumari"
            single-line
            solo flat
          ></v-text-field>
        </v-col>
              <v-col
          cols="12"
          sm="12"
        >
        <span class="white--text">Email</span>
          <v-text-field
            label="E.g. abc@xyz.co.in"
            single-line
            solo flat
          ></v-text-field>
        </v-col>
              <v-col cols="12" sm="12" md="12">
                <span class="white--text">Password</span>
                <v-text-field label="" :type="eye?'text':'password'" single-line solo flat :append-icon="eye ? 'mdi-eye' : 'mdi-eye-off'"   @click:append="toggleMarker"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <span class="white--text">Confirm Password</span>
                <v-text-field label="" :type="eye?'text':'password'" single-line solo flat :append-icon="eye ? 'mdi-eye' : 'mdi-eye-off'"   @click:append="toggleMarker"></v-text-field>
              </v-col>
          
            </v-row>
          </v-card-text>
          
          <!-- </v-form> -->
            <!-- <v-divider></v-divider> -->
          <v-card-actions style="background-color:#000000">
            <v-spacer></v-spacer>
  
            <v-btn class="white--text" color="#808080">
             Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      
    </v-row>
  </template>

<script>
    export default {
      name: "",
      data: () => ({
        dialog: false,
        eye: false,
      }),   
      methods: {
        toggleMarker () {
          this.eye = !this.eye
        },
      },
    };
    </script>
  
    <style>
  .login-heading {
    background-color: #000000;
    padding: 12px;
    color: #fff; 
  }
  .form-card{
    background-color:#808080;
    padding:20px 0;
  }
  
  
    </style>