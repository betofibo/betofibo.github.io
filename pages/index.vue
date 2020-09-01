<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="landing-header">
      <div class="landing-header__overlay">
      </div>
      <v-container class="pa-6">
          <v-row class="mt-12">
            <v-col md="6" xs="12" sm="8" lg="8" offset-sm="1" offset-md="0" style="z-index: 1; position: relative;">
              <div class="landing-header-box">
                <div class="landing-header-box__content">
                  <h1 class="text-white" v-bind:class="[{'subheader': $vuetify.breakpoint.xsOnly}, {'header': !$vuetify.breakpoint.mobile}]">Descubre la importancia de la nube en la transformación digital <v-icon large color="white">mdi-arrow-right</v-icon></h1>
                  <p class="title text-white" style="opacity: 0.9;">Need a fresh perspective on tomorrow? Accenture Insights has the latest business trends, solutions and visions for the future. We're happy to share.</p>
                </div>
              </div>
            </v-col>
          </v-row>
      </v-container>
    </div>
    <div class="container">
      <v-container>
        <v-row :justify="!$vuetify.breakpoint.mobile ? 'space-around' : 'start'" :style="$vuetify.breakpoint.mobile ? 'flex-wrap: nowrap; overflow-x: scroll;' : ''">
          <v-col>
            <v-btn large block :ripple="false" text class="center">Todo</v-btn>
          </v-col>
          <v-col>
            <v-btn large block :ripple="false" text class="center">Tecnologìa</v-btn>
          </v-col>
          <v-col>
            <v-btn large block :ripple="false" text class="center">Diseño</v-btn>
          </v-col>
          <v-col>
            <v-btn large block :ripple="false" text class="center">Estretegìa</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h1 class="text-center header my-10">Diseño</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="10"
            md="8"
            xl="7"
            offset-sm="1"
            offset-md="0"
          >
            <h2 class="title text-black-lighten-2">Popular</h2>
            <v-divider class="black mb-lg-12"></v-divider>
            <BlogPopular
              :large="!$vuetify.breakpoint.mobile"
              class="mb-16 mt-4"
              :title="popularPost.title"
              :summary="popularPost.summary"
              :author="popularPost.author"
              :date="popularPost.date"
              :postId="popularPost.id"
              :thumbnail="popularPost.thumbnailUrl"
            />
          </v-col>
          <v-col
            class="ml-xl-8"
            sm="10"
            md="4"
            offset-sm="1"
            offset-md="0"
          >
            <h2 class="title text-black-lighten-2">Lo último</h2>
            <v-divider class="black mb-lg-12"></v-divider>
            <BlogPopular
              v-for="post in recentPosts"
              :key="'recent' + post.id"
              :postId="post.id"
              small
              class="mb-16 mt-4"
              :title="post.title"
              :summary="post.summary"
              :author="post.author"
              :date="post.date"
              :thumbnail="post.thumbnailUrl"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            sm="10"
            md="4"
            lg="4"
            offset-sm="1"
            offset-md="0"
            v-for="post in morePost"
            :key="'more-' + post.id">
            <BlogPopular
              class="mb-16 mt-4"
              :title="post.title"
              :summary="post.summary"
              :author="post.author"
              :date="post.date"
              :thumbnail="post.thumbnailUrl"
              :postId="post.id"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-layout>
</template>
<style lang="scss">
@import "assets/variables";
@import '~vuetify/src/styles/settings/_variables';

.landing-header {
  height: 90vh;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: $black;
  background-image: url("~assets/img/landing-heading.jpg");

  .landing-header-box {
    padding: 0.5em;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(0deg, #37ecba 0%, #72afd3 100%);

    .landing-header-box__content {
      width: 100%;
      height: 100%;
      padding: 1em;
    }

    p {
      margin-top: 1em !important;
    }
  }

  .landing-header__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .landing-header {
    background-size: cover;
    padding: 70px 32px 100px 32px;

    .landing-header-box__content {
      padding: 2em 16em 2em 2em !important;
    }
  }
}
</style>
<script lang="ts">
import BlogPreview from "@/components/BlogPopular.vue";
import {IPost} from "~/models";
import Component from "vue-class-component";
import Vue from 'vue';

@Component({
  components: {
    BlogPreview
  }
})
export default class LandingPage extends Vue {
  $strapi: any;
  public allPosts = [];
  public recentPosts = [];
  public morePost = [];
  public popularPost: IPost = {
    id: 0,
    article: '',
    title: '',
    summary: '',
    thumbnailUrl: '',
    author: '',
    date: '',
    blog_categories: {
      id: 0,
      name: '',
    }
  };

  async mounted () {
    try {
      this.allPosts = await this.$strapi.find('blog-posts');
      this.popularPost = this.allPosts[0];
      this.recentPosts = this.allPosts.slice(1, 4);
      this.morePost = this.allPosts.slice(1,4)
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
