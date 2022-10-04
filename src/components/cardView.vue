<template>
    <div class="main-div primary">
        <p style="color:#fff;font-size:14px;">Posted By: Shivendra Handysolver on 11/5/2021,6:11:41 PM</p>
    <v-card style="background-color:#808080;color:#fff;margin-bottom:10px;"
      class="mx-auto"
      max-width="1400"
      v-for="detail in details" :key="detail.id"
    >
    <v-card-title style="font-size:30px;">{{ detail.title }}</v-card-title>
      <v-card-text class="white--text">
        {{ detail.desc }}
      </v-card-text>
      <v-card-actions>
        <v-btn class="seeMore ml-2" @click="showmore"
          text small
          color="#fff" >
          see More
        </v-btn>
      </v-card-actions>
        <v-card-subtitle class="white--text" style="font-size:14px;">posted By: {{ detail.postedby }}</v-card-subtitle>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">
              Origin
            </p>
            <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              text
              color="teal accent-4"
              @click="reveal = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
</div>
  </template>

  
<script>
    export default {
      data: () => ({
        reveal: false,
        title:"Hello",
        cardText:"helloworld",

        details:[
          {id:1, 
            title:'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            desc:' lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            postedby:'Shivendra Handysolver'
          },
          {id:2, 
            title:'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            desc:' lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            postedby:'Shivendra Handysolver'
          },
          {id:3, 
            title:'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            desc:' lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            postedby:'Shivendra Handysolver'
          }
        ]

      }),
      methods:{
            showmore(){
              this.$router.push({ name: "showMore" });
            },
    }
  }
  </script>
  <style>
    .main-div{
      
      min-height:100vh;
      padding:30px 70px;
    }
    .v-card--reveal {
      bottom: 0;
      opacity: 1 !important;
      position: absolute;
      width: 100%;
    }
    .seeMore{
        background-color: #000000;
    }
    </style>