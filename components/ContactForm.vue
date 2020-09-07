<template>
  <div class="fs-contact" id="contactSection">
    <v-container fluid class="pa-0 fill-height">
      <v-row no-gutters class="fill-height">
        <v-col cols="12" sm="12" md="6">
          <div class="fs-contact-form__info fill-height py-14 py-md-4">
            <v-container class="py-xl-16">
              <v-row class="text-white px-2 px-md-0 pl-xl-14 pb-4 pt-md-16">
                <v-col cols="12" offset-sm="1" offset-md="2" sm="8" offset-xl="3" xl="6">
                    <h3 :class="[{'header': !$vuetify.breakpoint.xsOnly}, { 'subheader': $vuetify.breakpoint.xsOnly }]">Ponte en contacto con nosotros</h3>
                </v-col>
              </v-row>
              <v-row class="text-white px-2 px-md-0 pl-xl-14 pb-4 pb-md-16">
                <v-col cols="12" offset-sm="1" sm="8" offset-md="2" offset-xl="3">
                    <a class="text-white title mb-2 d-inline-block" style="text-decoration: none;" href="tel:8186546075">81 8654 6075</a>
                    <v-spacer></v-spacer>
                    <a class="text-white title" href="mailto:info@fibosystems.io" style="text-decoration: none;">info@fibosystems.io</a>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <div class="fs-contact-form__form">
            <v-container class="py-xl-16">
              <v-row class="px-2 py-4 py-md-16">
                <v-col offset-sm="1" sm="10" xl="8" offset-xl="2">
                  <v-expand-transition>
                    <v-alert v-if="responseMessage" color="teal" class="text-white mb-12">{{responseMessage}}</v-alert>
                  </v-expand-transition>
                  <v-form ref="emailForm" v-model="isformValid" @submit.prevent="sendMail">
                    <v-text-field
                      :rules="[(v) => !!v || 'Es necesario indicar tu nombre completo.']"
                      name="fullname"
                      v-model="fullName"
                      color="black"
                      label="Nombre completo*"
                    >
                    </v-text-field>
                    <v-text-field
                      :rules="[(v) => !!v || 'Necesitamos tu correo y telèfono para poder ponernos en contacto contigo.']"
                      v-model="emailAddress"
                      color="black"
                      name="email"
                      label="Correo electrónico*"
                    >
                    </v-text-field>
                    <v-text-field
                      :rules="[(v) => !!v || 'Necesitamos tu correo y telèfono para poder ponernos en contacto contigo.']"
                      v-model="phoneNumber"
                      name="phone"
                      color="black"
                      label="Teléfono*"
                    >
                    </v-text-field>
                    <v-text-field
                      color="black"
                      v-model="companyName"
                      name="companyName"
                      label="Nombre de tu compañia"
                    >
                    </v-text-field>
                    <v-textarea
                      v-model="messageText"
                      :rules="[(v) => !!v || 'Porfavor indica còmo es que podemos ayudarte.']"
                      color="black"
                      name="message"
                      label="¿Cómo podemos ayudarte?*"
                    >
                    </v-textarea>
                    <v-btn :loading="sendingEmail" depressed :ripple="false" type="submit" color="black" block dark large @click="sendMail">Enviar</v-btn>
                  </v-form>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.fs-contact {
  width: 100%;

  .fs-contact-form__info {
    background-image: url("~assets/img/contact_bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .fs-contact-form__form {
    background-color: #dedede;
    height: 100%;
    width: 100%;
  }
}
</style>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface IEmailMessage {
  to: string,
  from: string,
  subject: string,
  text?: string,
  html: string,
}

@Component
export default class ContactForm extends Vue {
  @Prop({ type: String, required: false }) readonly origen!: string;
  public fullName= '';
  public emailAddress = '';
  public phoneNumber = '';
  public messageText = '';
  public companyName = '';
  public mailContent = '';
  public $axios: any;
  public readonly emailUrl = 'https://obscure-journey-20618.herokuapp.com/email';
  public sendingEmail = false;
  public isformValid = true;
  public responseMessage = '';
  public $refs: any;

  private async sendMail() {
    const isFormValid = this.$refs.emailForm.validate();
    if (!this.isformValid) return;
    this.responseMessage = '';
    this.sendingEmail = true;
    this.mailContent = `
      <p>Se recibió un nuevo mensaje desde el FiboWebsite</p>
      <span><strong>Nombre: </strong></span>
      <span>${this.fullName}</span>
      <br>
      <span><strong>Email: </strong></span>
      <span>${this.emailAddress}</span>
      <br>
      <span><strong>Teléfono: </strong></span>
      <span>${this.phoneNumber}</span>
      <br>
      <span><strong>Compañia: </strong></span>
      <span>${this.companyName}</span>
      <br>
      <span><strong>Mensaje: </strong></span>
      <span>${this.messageText}</span>
      <br>
      <span><strong>Ubicación en el sitio: </strong></span>
      <span>Página de inicio</span>
    `;
    const mensaje: IEmailMessage = {
      to: 'misael.cazares@fibosystems.io',
      from: 'inbound@fibosystems.io',
      subject: 'Nuevo mensaje desde el FiboWebiste',
      html: this.mailContent,
    }
    try {
      await this.$axios.$post(this.emailUrl, mensaje);
      this.responseMessage = "¡Gracias por tu mensaje! Muy pronto nos pondremos en contacto contigo."
    } catch (e) {
      this.responseMessage = 'Ocurrió un error, inténtalo nuevamente.';
    } finally {
      this.sendingEmail = false;
    }
  }
}
</script>
