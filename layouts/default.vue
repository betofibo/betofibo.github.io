<template>
  <v-app>
    <v-app-bar
      fixed
      app
      flat
      color="black"
    >
      <nuxt-link style="line-height: 50%;" to="/"><img class="fs-appbar__logo" src="~assets/img/fibo-logo.svg" alt="Logotipo Fibo Systems"></nuxt-link>
      <v-spacer />
      <div v-if="!$vuetify.breakpoint.mobile" style="height: 100%;">
        <v-btn :ripple="false" nuxt to="/" exact exact-active-class="active" text color="white">Inicio</v-btn>
        <v-btn :ripple="false" text @click="$route.path === '/' ? $vuetify.goTo('#servicesSection', optionsGoTo) : $router.push('/#servicesSection')" color="white">Servicios</v-btn>
        <v-btn :ripple="false" nuxt to="/blog" exact exact-active-class="active" text color="white">Insights</v-btn>
        <v-btn :ripple="false" text color="white" @click="$route.path === '/' ? $vuetify.goTo('#contactSection', optionsGoTo) : $router.push('/#contactSection')">Contacto</v-btn>
      </div>
      <v-btn
        text
        color="white"
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="onMenuButtonClick"
      >
        Menu
      </v-btn>
    </v-app-bar>
    <v-main>
        <nuxt />
    </v-main>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mobile"
      v-model="rightDrawer"
      :right="right"
      app
      dark
      clipped
      color="black"
    >
      <v-btn large class="float-right ma-4" icon text depressed color="white" @click="onClose"><v-icon>mdi-close</v-icon></v-btn>
      <v-list class="mt-16 px-10">
        <v-scroll-y-reverse-transition group>
          <v-list-item  :ripple="false" v-if="showList" nuxt to="/" :key="'inicioItem'" class="mb-4" @click.native="onItemSelection">
            <v-list-item-title><p class="subheader">Inicio</p></v-list-item-title>
          </v-list-item>
          <v-list-item  :ripple="false" v-if="showList" nuxt to="/#services" :key="'serviciosItem'" class="mb-4" @click.native="onClose(); $route.path === '/' ? $vuetify.goTo('#servicesSection', optionsGoTo) : $router.push('/#servicesSection')">
            <v-list-item-title><p class="subheader">Servicios</p></v-list-item-title>
          </v-list-item>
          <v-list-item  :ripple="false" v-if="showList" nuxt to="/blog" :key="'insightsItem'" class="mb-4" @click.native="onItemSelection">
            <v-list-item-title><p class="subheader">Insights</p></v-list-item-title>
          </v-list-item>
          <v-divider v-if="showList" nuxt to="/" :key="'divider1Item'" class="mb-4"></v-divider>
          <v-list-item  :ripple="false" v-if="showList" :key="'facebookItem'" @click.native="onItemSelection">
            <v-list-item-title><a style="text-decoration: none;" class="text-white title"  target="_blank" href="https://www.facebook.com/FiboSystems">Facebook</a></v-list-item-title>
          </v-list-item>
          <v-list-item  :ripple="false" v-if="showList" :key="'linkedinItem'" @click.native="onItemSelection">
            <v-list-item-title><a style="text-decoration: none;" class="text-white title" target="_blank" href="https://www.instagram.com/fibosystems/">Instagram</a></v-list-item-title>
          </v-list-item>
          <v-list-item  :ripple="false" v-if="showList" :key="'instagramItem'" class="mb-1" @click.native="onItemSelection">
            <v-list-item-title><a style="text-decoration: none;" class="text-white title" target="_blank" href="https://www.linkedin.com/company/fibosystems">LinkedIn</a></v-list-item-title>
          </v-list-item>
          <v-divider v-if="showList" :key="'divider2Item'" class="mb-4 mt-4"></v-divider>
          <v-list-item :ripple="false" v-if="showList" :key="'telefonoItem'" @click.native="onItemSelection">
            <v-list-item-title><a class="text-white title" style="text-decoration: none;" href="tel:8186546075">81 8654 6075</a></v-list-item-title>
          </v-list-item>
          <v-list-item  :ripple="false" v-if="showList" :key="'correoItem'" @click.native="onItemSelection">
            <v-list-item-title><a class="text-white title" style="text-decoration: none;" href="mailto:info@fibosystems.io">info@fibosystems.io</a></v-list-item-title>
          </v-list-item>
          <v-list-item :ripple="false" v-if="showList" class="mt-4" :key="'mensajeItem'">
            <v-btn id="contactButton" text :ripple="false" color="teal" @click="onClose(); $route.path === '/' ? $vuetify.goTo('#contactSection', optionsGoTo) : $router.push('/#contactSection')">Deja tu mensaje<v-icon right>mdi-arrow-right</v-icon></v-btn>
          </v-list-item>
        </v-scroll-y-reverse-transition>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      color="grey"
      :absolute="!fixed"
      app
    >
      <v-container fluid>
        <v-row justify="space-between" class="px-4">
          <v-col cols="12" md="auto">
            <p class="text-center text-white body">&copy; {{ new Date().getFullYear() }} Fibo Systems</p>
          </v-col>
          <v-col cols="auto" v-if="!$vuetify.breakpoint.mobile">
            <span><a class="text-white" href="https://www.facebook.com/FiboSystems" target="_blank">Facebook</a></span>
            <span><a class="text-white ml-4" href="https://www.instagram.com/fibosystems/" target="_blank">Instagram</a></span>
            <span><a class="text-white ml-4" href="https://www.linkedin.com/company/fibosystems" target="_blank">LinkedIn</a></span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>
<style lang="scss">

.v-navigation-drawer {
  transition: all 500ms cubic-bezier(1, 0, 0, 1); /* easeInOutExpo */
  width: 100% !important;

  .v-list-item {
    opacity: 1;

    &.v-list-item--active {
      opacity: 0.85;

      &::before {
        display: none;
      }
    }
  }

  #contactButton {
    margin-left: -16px;
  }
}

.fs-appbar__logo {
  height: 50%;
  width: auto;
}

.v-sheet.v-app-bar.v-toolbar {
  .v-toolbar__content {
    padding-top: 0;
    border-top: 0;
    border-bottom: 1px solid rgb(255, 255, 255, 0.4);
    padding-bottom: 0;
  }

  .v-btn {
    height: 100%;
    padding-left: 3em;
    padding-right: 3em;
    border-left: 1px solid rgb(255, 255, 255, 0.4);
    margin-left: -3px;
  }
}
</style>
<script>
export default {
  data () {
    return {
      optionsGoTo: {
        duration: 860,
        easing: 'easeInOutQuart',
      },
      showList: false,
      clipped: false,
      drawer: false,
      fixed: false,
      mainItems: [
        {
          name: 'Inicio',
        },
        {
          name: 'Servicios',
        },
        {
          name: 'Insights',
        }
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    onMenuButtonClick: function () {
      this.rightDrawer = !this.rightDrawer;
      setTimeout(() => this.showList = true, 500);
    },
    onItemSelection: function () {
      this.showList = !this.showList;
      this.rightDrawer = false;
    },
    onClose: function () {
      this.showList = false;
      this.rightDrawer = false;
    }
  }
}
</script>
