<template>
  <v-app style="background-color: #eee">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="40"
        />
        <span class="text-h5 font-weight-bold"> Laravel Expansions </span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/laravel-expansions" target="_blank" text>
        <v-icon left large>mdi-github</v-icon>
        <span class="ml-2">GitHub</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
