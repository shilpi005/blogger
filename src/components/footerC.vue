<template>
    <v-footer
      dark
      padless
    >
      <v-card
      width="100%"
        flat
        tile
        class="white--text text-center"
      >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
        <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        <br/>
        <span class="white--text">2022 Free Blogger. All Rights Reserved.</span>
      </v-card-text>
      <!-- <v-divider></v-divider> -->
      <!-- <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text> -->
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-linkedin',
        'mdi-github',
      ],
    }),
  }
</script>