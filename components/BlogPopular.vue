<template>
  <div class="fs-post-preview" v-bind:class="[{'fs-post-preview--large': large}, {'fs-post-preview--small': small}]">
    <div class="thumbnail">
      <div class="overlay"></div>
      <img class="image" alt="source" :src="thumbnail">
    </div>
    <div>
      <div class="heading px-xl-8">
        <h3 class="my-2" v-bind:class="[{ subheader: !large & !small}, { header: large }, { title: small }, { 'my-xl-8': !small } ]">
          {{ title }}
        </h3>
        <div v-bind:class="[{ base: !small }, { caption: small }]">
          <span class="text-black-lighten-1">Por {{author}}</span> | <span class="text-black-lighten-1">{{date}}</span>
        </div>
      </div>
      <div class="summary flex flex-column flex-end px-xl-8" v-if="!small">
        <p class="text-black-lighten-2" v-bind:class="[{ body: !large}, { title: large }]">
          {{ summary }}
        </p>
        <v-btn
          class="float-right"
          text
          color="teal"
          nuxt
          :href="'/blog/posts/'+ postId"
          :ripple="false">Leer articulo<v-icon right dark>mdi-arrow-right</v-icon></v-btn>
      </div>
      <v-btn
        v-if="small"
        class="float-right"
        text color="teal"
        nuxt
        :href="'/blog/posts/'+ postId"
        :ripple="false">Leer articulo<v-icon right dark>mdi-arrow-right</v-icon></v-btn>
    </div>
  </div>
</template>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.heading {
  margin: 1em 0;
}

.fs-post-preview {
  .thumbnail {
    overflow: hidden;
    height: 200px;
    min-width: 133px;
    position: relative;

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 2;
    }
  }

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    &.fs-post-preview--large {
      .thumbnail {
        height: 350px;
      }
    }

    &.fs-post-preview--small {
      .thumbnail {
        min-width: 133px;
        max-width: 133px;
      }
    }
  }

  &.fs-post-preview--small {
    display: flex;

    .heading {
      margin: 0;
    }

    .thumbnail {
      height: 90px;
      margin-top: 0.5em;
      margin-right: 1em;

      .image {
        height: 100%;
        width: auto;
      }
    }
  }
}

img {
  width: 100%;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BlogPreview extends Vue {
  @Prop({ type: String, required: false }) readonly section!: string;
  @Prop({ type: Boolean, required: false }) readonly large!: boolean;
  @Prop({ type: Boolean, required: false }) readonly small!: boolean;
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, required: true }) readonly summary!: string;
  @Prop({ type: String, required: true }) readonly date!: string;
  @Prop({ type: String, required: true }) readonly author!: string;
  @Prop({ type: String, required: true }) readonly thumbnail!: string;
  @Prop({ type: String, required: true }) readonly postId!: number;
}
</script>
