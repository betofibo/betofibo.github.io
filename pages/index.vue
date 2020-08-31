<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="blog-header">
      <v-container class="pa-6">
          <v-row class="mt-12">
            <v-col md="6" xs="12">
              <h1 class="display-2">Insights</h1>
              <p class="title" style="opacity: 0.7;">Need a fresh perspective on tomorrow? Accenture Insights has the latest business trends, solutions and visions for the future. We're happy to share.</p>
            </v-col>
          </v-row>
      </v-container>
    </div>
    <div class="container">
      <v-container>
        <v-row justify="space-around">
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
          <v-col xs="12" lg="8" xl="7">
            <h2 class="title text-black-lighten-2">Popular</h2>
            <v-divider class="black mb-lg-12"></v-divider>
            <BlogPopular
              large
              class="mb-16 mt-4"
              :title="popularPost.title"
              :summary="popularPost.summary"
              :author="popularPost.author"
              :date="popularPost.date"
              :thumbnail="popularPost.thumbnailUrl"
            />
          </v-col>
          <v-col>
            <h2 class="title text-black-lighten-2">Lo último</h2>
            <v-divider class="black mb-lg-12"></v-divider>
            <BlogPopular
              v-for="post in recentPosts"
              :key="post.id"
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
          <v-col sm="12" lg="4">
            <BlogPopular
              class="mb-16 mt-4"
              title="What to look for in a web hosting service"
              summary="Find out what features to look for in a web host, and see why Webflow Hosting could be the perfect fit for your next site."
              author="Misael Càzares"
              date="Septiembre 23, 2020"
              thumbnail="https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1358&q=80"
            />
          </v-col>
          <v-col sm="12" lg="4">
            <BlogPopular
              class="mb-16 mt-4"
              title="Advancing the human experience through design"
              summary="We help organizations grow by launching new businesses and creating world-class customer experiences at scale.."
              author="Misael Càzares"
              date="Septiembre 23, 2020"
              thumbnail="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1357&q=80"
            />
          </v-col>
          <v-col sm="12" lg="4">
            <BlogPopular
              class="mb-16 mt-4"
              title="Sustainable hybrid financial services models"
              summary="Artificial Intelligence (AI) has shown its efficiency within the realms of financial services. Read more about AI in the future of finance."
              author="Misael Càzares"
              date="Septiembre 23, 2020"
              thumbnail="https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
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

import BlogPreview from "../components/BlogPopular.vue";
import { Vue, Component, Prop } from 'vue-property-decorator';
import {IPost} from "~/models";

@Component({
  components: {
    BlogPreview
  }
})
export default class BlogPage extends Vue {
  $strapi;
  public allPosts = [];
  public recentPosts = [];
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
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
