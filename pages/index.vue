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
            <v-col md="6" xs="12" sm="8" lg="8" xl="6" offset-sm="1" offset-md="0" offset-xl="2" style="z-index: 1; position: relative;">
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
    <Services></Services>
    <v-container style="height: 600px;">
      <v-row align="center" style="height: 100%;">
        <v-col cols="10" sm="8" offset-md="2" offset="1" offset-sm="2">
            <div class="fs-landing-quote">
              <div class="fs-landing-quote__box"></div>
              <h4 class="title fs-landing-quote__content text-black-lighten-2">
                Our software development process drives innovation that can provide disrupting results through an entire
                organization by bringing the best people in house to collaborate and create solutions that will always provide
                true and lasting value for your organization.
              </h4>
            </div>
        </v-col>
      </v-row>
    </v-container>
    <LandingBlog></LandingBlog>
  </v-layout>
</template>
<style lang="scss">
@import "assets/variables";
@import '~vuetify/src/styles/settings/_variables';

.fs-landing-quote {
  position: relative;

  .fs-landing-quote__content {
    z-index: 1;
    position: relative;
    background-color: $white;
    padding: 1em;
  }

  .fs-landing-quote__box {
    position: absolute;
    padding: 0.5em;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    height: 250px;
    width: 250px;
    left: -1em;
    top: -1em;
    z-index: 0;
    border-image-source: linear-gradient(0deg, #37ecba 0%, #72afd3 100%);
  }
}

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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .fs-landing-quote {
    .fs-landing-quote__box {
      top: -0.3em;
      width: 400px;
      height: 200px;
      left: -2em;
    }

    .fs-landing-quote__content {
      padding: 3em;
    }
  }

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
import Services from "~/components/Services.vue";
import LandingBlog from "~/components/LandingBlog.vue";

@Component({
  components: {
    BlogPreview,
    Services,
    LandingBlog
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
