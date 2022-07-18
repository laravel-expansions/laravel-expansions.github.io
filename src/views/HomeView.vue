<template>
  <section>
    <header
      class="primary d-flex align-center justify-center white--text"
      style="height: 400px"
    >
      <div class="text-center">
        <img src="@/assets/logo.svg" alt="logo" height="200" />
        <div class="text-h2 font-weight-bold mt-4">Laravel Expansions</div>
      </div>
    </header>
    <v-container>
      <h3 class="mb-4">Packages</h3>
      <v-row>
        <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6">
          <v-card :href="item.to" target="_blank" height="240">
            <!-- <v-img src="" alt="" :aspect-ratio="2 / 1" /> -->
            <v-card-title>
              {{ item.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.subTitle }}
            </v-card-subtitle>
            <v-card-text>
              {{ item.desc }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  components: {},
  computed: {
    items() {
      return [
        {
          to: "https://github.com/laravel-expansions/serverless-laravel-templates",
          name: "Serverless Templetes",
          subTitle: "SAM Template CLI",
          desc: "",
        },
        {
          to: "https://github.com/laravel-expansions/serverless-function",
          name: "Serverless Function",
          subTitle: "Lambda Function Handler + Artisan Command",
          desc: "",
        },
        {
          to: "https://github.com/laravel-expansions/aws-helpers",
          name: "AWS Helpers",
          subTitle: "Simple AWS SDK Helpers",
          desc: "",
        },
        {
          to: "https://github.com/laravel-expansions/query-control-model",
          name: "Query Control Model",
          subTitle: "Full Controll Request Query",
          desc: "",
        },
      ];
    },
  },
});
</script>
