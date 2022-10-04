<template>
    <v-row justify="end" style="padding:10px;">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="1000px" scrollable
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="white--text"
            color="#000"
            
            v-bind="attrs"
            v-on="on">
            <v-icon x-small>mdi-plus</v-icon>
            Add comments
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="login-heading">
            <span class="text-h5">Add Comments</span>
            <v-spacer></v-spacer>
            <v-btn icon color="black" text @click="dialog = false">
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text style="background-color:#808080 ;">
            <v-container>
              <v-row no-gutters>
                
               <v-col cols="12">
                   <span class="white--text font-weight-bold">Comments:</span>
                   <vue-editor v-model="content" class="white"/>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions style="background-color:#000000">
            <v-spacer></v-spacer>
            
            <v-btn color="white darken-1" class="mr-5 px-8" small text @click="dialog = false"
            :disabled="!content.length" style="background-color: #808080;" >
                <v-icon x-small>mdi-plus</v-icon>
              Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

  <script>
    import { VueEditor } from "vue2-editor";
  export default {
    data: () => ({
      dialog: false,
      content: "",
    }),
    watch:{
        dialog(){
          console.log(this.dialog)
          if(this.dialog) this.openModal()
          else this.closeModal()
        }
      } ,
    components: { VueEditor },
    methods:{
      openModal(){
        console.log("modal open")
        

      },
      closeModal(){
        console.log("modal close")
        this.content=""
      }
    }
  }
</script>
<style scoped>
    .login-heading {
  background-color: #000000;
  padding: 12px;
  color: #fff; 
}
</style>