<template>
  <v-layout
    column
    justify-center
    align-center
  >
      <div class="header">
    <v-container>
        <v-row>
          <v-col md="6" xs="12">
            <h1 class="display-2 text-white">Blog</h1>
            <p class="title text-black-lighten-4">Need a fresh perspective on tomorrow? Accenture Insights has the latest business trends, solutions and visions for the future. We're happy to share.</p>
          </v-col>
        </v-row>
    </v-container>
      </div>
  </v-layout>
</template>
<style src="assets/theme.scss" lang="scss"></style>
<style lang="scss">
@import "assets/variables";
@import '~vuetify/src/styles/settings/_variables';

.header {
  height: 400px;
  width: 100%;
  background-position: -20% 100%;
  padding: 70px 32px 100px 32px;
  background-color: $black;
  background-size: 250%;
  background-image: url("~assets/blog_header_bg.png");
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .header {
    background-position: 100% 100%;
    background-size: 80%;
  }
}
</style>
<script>

export default {
  components: {
  }
}
</script>
