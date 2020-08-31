<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="blog-header">
      <v-container class="pa-6">
          <v-row class="mt-12">
            <v-col md="6" xs="12" sm="10" offset-sm="1" offset-md="0">
              <h1 class="display-2">Insights</h1>
              <p class="title" style="opacity: 0.7;">Need a fresh perspective on tomorrow? Accenture Insights has the latest business trends, solutions and visions for the future. We're happy to share.</p>
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

.blog-header {
  height: 400px;
  width: 100%;
  background-position: 0 0;
  background-size: cover;
  background-color: $black;
  background-image: url("~assets/blog_bg.png");
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .blog-header {
    background-position: 100% 14%;
    background-size: 100%;
    padding: 70px 32px 100px 32px;
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
export default class BlogPage extends Vue {
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
