<template>
  <div class="fs-post">
    <div class="fs-post-heading">
      <div class="overlay"></div>
      <div class="fs-post-cover" v-bind:style="{ 'background-image': 'url(' + post.imageUrl + ')' }"></div>
      <v-container style="height: 100%;">
        <v-row class="container" style="height: 100%;">
          <v-col sm="10" offset-sm="1" md="10" lg="6" xl="4" offset-md="3" style="position: relative; height: 100%;">
            <div class="fs-post-header__content">
              <h5 class="text-white base">{{post.category.name}}</h5>
              <h3 class="my-2 header text-white my-6">
                {{ post.title }}
              </h3>
              <div class="text-white base">
                <span>Por {{post.author}}</span> | <span>{{post.date}}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row>
        <v-col sm="10" offset-sm="1" md="10" lg="6" offset-md="3">
          <div class="fs-post-content">
            <div  v-html="$md.render(content)">
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="10" offset-sm="1" md="10" lg="6" offset-md="3">
          <h2 class="mt-4 title text-black-lighten-2">Más contenido</h2>
          <v-divider class="black mb-lg-12"></v-divider>
          <v-row>
            <v-col cols="12" md="6"
                   v-for="post in morePosts"
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
        </v-col>
      </v-row>
    </v-container>
    <ContactForm />
  </div>
</template>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

#app.v-application .fs-post .fs-post-content {
  h2 {
    margin-top: 1.5em;
    margin-bottom: 1em !important;
  }

  img {
    max-width: 100%;
    margin-top: 1em;
  }

  p {
    font-size: 20px !important;
  }
}

.fs-post-heading {
  width: 100%;
  height: 500px;
  position: relative;

  .fs-post-header__content {
    z-index: 2;
    position: absolute;
    bottom: 32px;
  }

  .fs-post-cover {
    height: 100%;
    width: 100%;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .fs-post-heading {
    height: 600px;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import {IPost} from "~/models";
import BlogPreview from "~/components/BlogPopular.vue";
import {Component} from "vue-property-decorator";
import ContactForm from "~/components/ContactForm.vue";

@Component<any>({
  async asyncData({ params, error }: any) {
    const post = await Vue.prototype.$nuxt.$strapi.find(`posts/${params.id}`);
    const allPosts = await Vue.prototype.$nuxt.$strapi.find('posts');

    return {
      post: post,
      content: post.article || '',
      morePosts: allPosts.slice(1,3),
    }
  },
  head(this: Post) {
    return {
      title: 'Fibo Insights | ' + this.post.title,
      meta: [
        {
          name: 'og:title', content: this.post.title,
        },
        {
          name: 'og:description', content: this.post.summary,
        },
        {
          name: 'og:image', content: this.post.imageUrl,
        },
      ],
    }
  },
  components: {
    BlogPreview,
    ContactForm,
  }
})
export default class Post extends Vue {
  public post: IPost = {
    category: {}
  };
  public $strapi: any;
  public $route: any;
  public $md: any;
  public content = '';
  public morePosts = [];

}
</script>
