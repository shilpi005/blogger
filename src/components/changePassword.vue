<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Change password</span>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                    <v-text-field
            outlined
            label="Old Password"
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
            outlined
            label="New Password"
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
            outlined
            label="Confirm Password"
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>


<script>
    export default {
      data: () => ({
        dialog: false,
      }),
    }
  </script>