<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="landing-header">
      <div class="landing-header__overlay">
      </div>
      <v-container class="mt-sm-16 mt-md-4">
          <v-row class="mt-12 px-2">
            <v-col md="6" xs="12" sm="8" lg="8" xl="6" offset-sm="1" offset-md="0" offset-xl="1" style="z-index: 1; position: relative;">
              <div class="landing-header-box">
                <div class="landing-header-box__content">
                  <nuxt-link to="/blog/posts/5f53289ebb5d9e00179a945e" style="text-decoration: none;">
                    <h1 class="text-white" v-bind:class="[{'subheader': $vuetify.breakpoint.xsOnly}, {'header': !$vuetify.breakpoint.mobile}, {'display-2': $vuetify.breakpoint.xlOnly}]">Desarrollo ágil que te ayudará a estar un paso adelante de la competencia<v-icon large color="teal">mdi-arrow-right</v-icon></h1>
                    <p class="title text-white" style="opacity: 0.9;">Averigua cómo las empresas de hoy dan solución a sus más grandes retos con soluciones de software modernas.</p>
                  </nuxt-link>
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
                Unimos el mejor talento y tecnología para generar soluciones que aportan valor inmediato a tu negocio,
                enfocamos nuestro proceso y recursos en entender y resolver las necesidades y problemas que pueda enfrentar tu operación.
              </h4>
            </div>
        </v-col>
      </v-row>
    </v-container>
    <LandingBlog></LandingBlog>
    <div class="fs-landing-project">
      <v-container fluid class="fill-height pa-0">
        <div class="py-sm-16">
          <v-row class="fill-height px-2 px-sm-2 py-4">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-col cols="12" md="4" lg="5" offset-md="1" offset-lg="2" offset-xl="3">
                    <h4 class="title text-sm-center text-md-left">Proyecto</h4>
                    <h1 class="header my-8 text-sm-center text-md-left">General de Baleros</h1>
                    <p class="mt-8 text-sm-center text-md-left" v-bind:class="[{'body': $vuetify.breakpoint.xsOnly}, {'title': !$vuetify.breakpoint.xsOnly}]">Solución de ERP construido a la medida de las necesidades de la operación de General de Baleros.</p>
                  </v-col>
                  <v-col>
                    <img src="~assets/img/custom_erp.jpg" alt="">
                  </v-col>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="outro pa-16">
      <div class="py-xl-16">
        <div class="content py-12">
          <p class="title mb-16 text-black-lighten-2 text-center">
            Soluciones construidas con software...
          </p>
          <div class="outro-content text-black-lighten-4 text-center display-1">
            <span class="mb-4 outro-word modern header">moderno</span>
            <span class="mb-4 outro-word universal header">universal</span>
            <span class="mb-4 outro-word secure header">seguro</span>
          </div>
        </div>
      </div>
    </div>
    </section>
    <ContactForm></ContactForm>
  </v-layout>
</template>
<style lang="scss">
@import "assets/variables";
@import '~vuetify/src/styles/settings/_variables';

.outro {
  padding-bottom: 4em;

  .outro-content {
    margin-top: 0.6em;

    .outro-word {
      display: inline-block;
    }

    span {
      margin-right: 0.5em;
      position: relative;
      line-height: 0;
      color: #dbdbdb;
      animation-name: enfasis;
      animation-duration: 6s;
      animation-iteration-count: infinite;

      &::after {
        background: linear-gradient(71deg, #dbdbdb -12.04%, #dbdbdb 52.93%, #dbdbdb 86.32%, #dbdbdb 117.99%);
        content: '';
        position: absolute;
        bottom: 0.3em;
        right: -15px;
        width: 10px;
        height: 10px;
        animation-name: square;
        animation-duration: 6s;
        animation-iteration-count: infinite;
      }
    }
  }

  .modern {
    animation-delay: 0s;

    &::after {
      animation-delay: 0s;
    }
  }

  .universal {
    animation-delay: 2s;

    &::after {
      animation-delay: 2s;
    }
  }

  .secure {
    animation-delay: 4s;

    &::after {
      animation-delay: 4s;
    }
  }

  @keyframes enfasis {
    0% {
      color: #dbdbdb;
    }

    23.333% {
      color: #000;
    }

    33.333% {
      color: #dbdbdb;
    }

    99.999% {
      color: #dbdbdb;
    }
  }

  @keyframes square {
    0% {
      background: linear-gradient(71deg, #dbdbdb -12.04%, #dbdbdb 52.93%, #dbdbdb 86.32%, #dbdbdb 117.99%);
    }

    23.333% {
      background: linear-gradient(71deg, #7e3db0 -12.04%, #0094d8 52.93%, #00a5af 86.32%, #00a370 117.99%);
    }

    33.333% {
      background: linear-gradient(71deg, #dbdbdb -12.04%, #dbdbdb 52.93%, #dbdbdb 86.32%, #dbdbdb 117.99%);
    }

    99.999% {
      background: linear-gradient(71deg, #dbdbdb -12.04%, #dbdbdb 52.93%, #dbdbdb 86.32%, #dbdbdb 117.99%);
    }
  }
}

.fs-landing-project {
  background-color: teal;
  color: $white;
  position: relative;
  width: 100%;
}

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
    border-width: 5px;
    border-style: solid;
    border-image-slice: 1;
    height: 250px;
    width: 250px;
    left: -1em;
    top: -1em;
    z-index: 0;
    -moz-border-image-source: -moz-linear-gradient(0deg, #37ecba 0%, #72afd3 100%);
    -webkit-border-image-source: -webkit-linear-gradient(0deg, #37ecba 0%, #72afd3 100%);
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
    border-image-slice: 1;
    -moz-border-image-source: -moz-linear-gradient(0deg, #37ecba 0%, #72afd3 100%);
    -webkit-border-image-source: -webkit-linear-gradient(0deg, #37ecba 0%, #72afd3 100%);
    border-image-source: linear-gradient(0deg, #37ecba 0%, #72afd3 100%);
    border-width: 5px;
    border-style: solid;

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

@media #{map-get($display-breakpoints, 'xl-only')} {
  .fs-landing-project {
    img {
      right: -20% !important;
    }
  }
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .fs-landing-project {
    height: 700px;

    img {
      position: absolute;
      top: 0;
      right: -50%;
      height: 100%;
      width: auto;
    }
  }

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

@media #{map-get($display-breakpoints, 'lg-and-up')} {
  .fs-landing-project {
    img {
      right: -50%;
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
import ContactForm from "~/components/ContactForm.vue";

@Component({
  components: {
    BlogPreview,
    Services,
    LandingBlog,
    ContactForm,
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
    category: {
      id: 0,
      name: '',
    }
  };

  async mounted () {
    try {
      this.allPosts = await this.$strapi.find('posts');
      this.popularPost = this.allPosts[0];
      this.recentPosts = this.allPosts.slice(1, 4);
      this.morePost = this.allPosts.slice(1,4)
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
