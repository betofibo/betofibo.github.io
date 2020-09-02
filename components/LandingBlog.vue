<template>
  <div style="width: 100%;">
    <div class="fs-landing-post">
      <div class="fs-landing-post-cover">
        <div class="fs-landing-post__overlay">
        </div>
        <v-container >
          <v-row class="container py-16" style="height: 100%;" align="center">
            <v-col cols="12" offset-sm="2" sm="8" style="z-index: 2;">
              <p class="title text-white">Diseño</p>
              <h2 class="header mt-6">COVID-19: Post-Coronavirus technology trends</h2>
              <p class="title text-white mt-6">Learn about actions we’re taking to fight racism inside and outside of Accenture.</p>
              <v-btn large :ripple="false" class="fs-button-dark mt-6" color="white">Leer artículo <v-icon right>mdi-arrow-right</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="fs-landing-post-image">
      </div>
    </div>
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-for="post in recentPosts"
          :key="'recent' + post.id">
          <BlogPopular
            :postId="post.id"
            class="mb-16 mt-4"
            :title="post.title"
            :summary="post.summary"
            :author="post.author"
            :date="post.date"
            :thumbnail="post.thumbnailUrl"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.fs-landing-post-cover {
  color: white;
  display: flex;
  width: 100%;
  align-items: center;

  .fs-landing-post__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
}

.fs-landing-post {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
}

.fs-landing-post-image {
  background: url("~assets/img/landing-heading.jpg") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BlogPreview from "~/components/BlogPopular.vue";
import {IPost} from "~/models";

@Component({ components: {
    BlogPreview
  }})
export default class LandingBlog extends Vue {
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
