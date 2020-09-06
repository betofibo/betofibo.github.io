<template>
  <div class="fs-services" v-bind:class="[{ 'container': $vuetify.breakpoint.xsOnly }]">
    <v-container class="content-container">
      <h3 class="text-white text-center py-16" :class="[{'header': $vuetify.breakpoint.xsOnly, 'header': !$vuetify.breakpoint.xsOnly}]">Soluciones</h3>
      <div class="fs-service__detail-container">
          <v-card v-bind:class="[{ 'active': showServiceDetail }]" class="fs-service__detail pa-12">
        <v-scroll-y-reverse-transition>
            <div v-if="showServiceDetailContent">
              <v-row>
                <v-col md="6" sm="8">
                  <h3 class="text-white" :class="[{'subheader': $vuetify.breakpoint.xsOnly}, {'display-2': $vuetify.breakpoint.smAndUp}]">Amplicaciones basadas en la nube</h3>
                  <p class="text-white" :class="[{'body': $vuetify.breakpoint.xsOnly}, {'title': $vuetify.breakpoint.smAndUp}]">Soluciones de software a la medida que permitairan a tu equipo operar desde cualquier lugar</p>
                </v-col>
                <v-col md="6" sm="10">
                  <v-list color="transparent" class="ml-0">
                    <v-list-item >
                      <v-list-item-icon>
                        <v-icon color="white">mdi-square-medium</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <p class="text-white" :class="[{'body': $vuetify.breakpoint.xsOnly}, {'title': $vuetify.breakpoint.smAndUp}]">Incursiona en nuevos mercados</p>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="white">mdi-square-medium</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <p class="text-white" :class="[{'body': $vuetify.breakpoint.xsOnly}, {'title': $vuetify.breakpoint.smAndUp}]">Desarrolla estrategias que permitan operar agilmente</p>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </div>
        </v-scroll-y-reverse-transition>
            <div id="closeButton">
              <v-btn
                block
                color="white"
                :ripple="false"
                text @click="showServiceDetail = false; showServiceDetailContent = false">
                <v-icon left>mdi-close</v-icon>
                Cerrar</v-btn>
            </div>
          </v-card>
      </div>
      <v-row justify="space-around">
        <v-col cols="6" sm="auto" md="auto" lg="auto" v-for="item in servicesList">
          <v-card class="fs-services__element" elevation="8" @click="onServiceElementClick">
            <v-card-text class="pa-12">
              <h5 class="text-white fs-services__element-title"  v-bind:class="[{ 'title': !$vuetify.breakpoint.xsOnly }, { 'body': $vuetify.breakpoint.xsOnly }]">{{item.title}}</h5>
              <p :style="`background: linear-gradient(${item.color1},${item.color2}); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`" class="text-white fs-services__element-symbol" v-bind:class="[{ 'header': !$vuetify.breakpoint.xsOnly }, { 'title': $vuetify.breakpoint.xsOnly }]">{{item.symbol}}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.fs-services {
  width: 100%;
  background-image: url("~assets/img/services_bg.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  padding-top: 5em;
  padding-bottom: 5em;

  .container {
    position: relative;
  }

  .fs-service__detail-container {
    overflow: hidden;
    height: 600px;
    width: 100%;
    position: absolute;
  }

  .fs-service__detail {
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-image: url("~assets/img/service.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 500ms cubic-bezier(1, 0, 0, 1); /* easeInOutExpo */
    transform: translate3d(0, 101%, 0);

    #closeButton {
      position: absolute;
      height: 56px;
      width: 100%;
      bottom: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      left: 0;

      .v-btn {
        height: 100% !important;
      }
    }

    &.active {
      transform: translate3d(0, 0, 0);
    }
  }

  .fs-services__element {
    height: 150px;
    width: 100%;
    transition: background 300ms ease-in;
    background: black !important;
    margin: 0;

    &:hover {
      background: linear-gradient(6.41deg, #2dc9b6 -0.05%, rgba(59, 127, 142, 0.72) 44.76%, rgba(12, 175, 198, 0) 105.59%) !important;
      cursor: pointer;

      .fs-services__element-symbol.header {
        background: linear-gradient(#fff, #fff) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }
    }

    .v-card__text {
      position: relative;
      height: 100%;
      padding: 1em;
      max-width: 90%;

      .fs-services__element-title {
        position: absolute;
        top: 1rem;
        left: 1rem;
      }

      .fs-services__element-symbol.title {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .content-container {
    max-width: 998px !important;
  }

  .fs-services {
    .fs-service__detail {
      position: absolute;
      height: 100%;
      transform: translate3d(0, 141%, 0);
    }

    .fs-services__element {
      width: 300px;
      height: 300px;
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-up')} {
  .fs-services {
    height: auto;
    padding-top: 8em;
    padding-bottom: 8em;

    .fs-services__element {
      width: 260px;
      height: 260px;

      .v-card__text {
        .fs-services__element-title {
          position: absolute;
          top: 2.5rem;
          left: 2.5rem;
        }

        .fs-services__element-symbol.header {
          position: absolute;
          bottom: 2rem;
          left: 2.5rem;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Services extends Vue {
  public showServiceDetail = false;
  public showServiceDetailContent = false;
  public servicesList = [
    {
      title: 'Aplicaciones en la nube',
      symbol: 'Wb',
      color1: '#48c6ef',
      color2: '#6f86d6',
    },
    {
      title: 'Aplicaciones móviles',
      symbol: 'Ap',
      color1: '#37ecba',
      color2: '#72afd3'
    },
    {
      title: 'Aplicaciones de comercio electrónico',
      symbol: 'Ec',
      color1: '#3d3393',
      color2: '#35eb93'
    },
    {
      title: 'Capacitación Agilidad Competitiva',
      symbol: 'Sc',
      color1: '#72afd3',
      color2: '#37ecba'
    },
    {
      title: 'Diseño de Experiencia de Usuario',
      symbol: 'Ux',
      color1: '#b465da',
      color2: '#ee609c'
    },
    {
      title: 'Diseño de marca',
      symbol: 'Bd',
      color1: '#feec8b',
      color2: '#f78ca0'
    }
  ];

  public onServiceElementClick() {
    this.showServiceDetail = true;
    setTimeout(() => this.showServiceDetailContent = true, 500);
  }
}
</script>
