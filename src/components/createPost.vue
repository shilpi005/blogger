<template>
    <!-- <v-row justify="end"> -->
      <v-dialog
        v-model="dialog"
        persistent
        max-width="1000px" scrollable
      >
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          > -->
          <v-btn class="white--text" color="#808080" 
           v-bind="attrs"
            v-on="on">
          <v-icon x-small>mdi-plus</v-icon>
          Create Post
        </v-btn>
            
          
        </template>
        
        <v-card scrollable>
          <v-card-title class="login-heading">
            <span class="text-h5">Create Blog Post</span>
            <v-spacer></v-spacer>
            <v-btn icon color="black" text @click="dialog = false">
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-form lazy-validation ref="createPostForm">
          <v-card-text style="background-color:#808080 ;">
            <v-container>
              <v-row no-gutters>
                <v-col cols="12" >
        <span class="white--text font-weight-bold" >Title:</span>
          <v-text-field  background-color="#fff"
          :rules="[rules.required]"
          v-model="title"
            label="your title here"
             required outlined
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        
      >
      <span class="white--text font-weight-bold">Body:</span>
        <vue-editor v-model="contents" class="white" :rules="[rules.required]"/>
        <span class="white--text font-weight-bold">Note: The body must be of 50 character</span>
      </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions style="background-color:#000000">
            <v-spacer></v-spacer>
            
            <v-btn 
            class="mr-9 px-8"
              color="white darken-1"
              text
              
              @click="submit"
           style="background-color: #808080;" >
              Submit
            </v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    <!-- </v-row> -->
  </template>

  <script>
    import { VueEditor } from "vue2-editor";
    import rules from '@/common/fieldRule'
  export default {
    components: { VueEditor },
    data: () => ({
      dialog: false,
      contents: "",
      title:"",
      rules: rules,
    }),
    watch:{
        dialog(){
          console.log(this.dialog)
          if(this.dialog) this.openModal()
          else this.closeModal()
        }
      } ,
    methods:{
      openModal(){
        console.log("modal open")
        

      },
      closeModal(){
        console.log("modal close")
        this.contents="",
        this.title="",
        this.$refs.createPostForm.reset()
      },
      submit(){
        if(this.$refs.createPostForm.validate()){
          console.log('validate')
          this.rules;
        }
        else{
          console.log('not validtae')
        }
      },
    },
    
  }
</script>
<style scoped>
    .login-heading {
  background-color: #000000;
  padding: 12px;
  color: #fff; 
}
</style>