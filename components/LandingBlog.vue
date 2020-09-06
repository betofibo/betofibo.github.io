<template>
  <div style="width: 100%;">
    <div class="fs-landing-post">
      <div class="fs-landing-post-cover">
        <div class="fs-landing-post__overlay">
        </div>
        <v-container>
          <v-row style="height: 100%;" align="center" class="px-2 py-4">
            <v-col cols="12" offset-sm="2" offset-md="3" sm="8" xl="5" style="z-index: 2;">
              <div class="py-sm-16">
                <p class="title text-white">{{popularPost.category.name}}</p>
                <h1 class="mt-6" v-bind:class="[{'header': !$vuetify.breakpoint.xlOnly}]">{{popularPost.title}}</h1>
                <p class="title text-white mt-6">{{popularPost.summary}}</p>
                <v-btn large depressed :ripple="false" class="fs-button-dark mt-6" color="white">Leer artículo completo<v-icon right>mdi-arrow-right</v-icon></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="fs-landing-post-image" :style="`background: url('${popularPost.imageUrl}') no-repeat center`">
      </div>
    </div>
    <v-container :fluid="$vuetify.breakpoint.xsOnly">
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-for="post in morePost"
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
        <hr color="grey" width="100%">
        <v-btn block text large color="black" :ripple="false">Leer todo <v-icon right>mdi-arrow-right</v-icon></v-btn>
        <hr color="grey" width="100%" class="mb-6">
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
  public popularPostIndex = 2;
  public popularPost: IPost = {
    id: 0,
    article: '',
    title: '',
    summary: '',
    thumbnailUrl: '',
    author: '',
    date: '',
    category: {
      id: 0,
      name: '',
    }
  };

  async mounted () {
    try {
      this.allPosts = await this.$strapi.find('posts');
      this.popularPost = this.allPosts[this.popularPostIndex];
      this.allPosts.splice(this.popularPostIndex, 1)
      this.morePost = this.allPosts.slice(0,4)
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
