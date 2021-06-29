<template>
  <div>
    <section id="intro" class="purple">
      <div class="container">
        <h1 class="white--text aok-text-center mb-5">
          The Crafty Midwife
        </h1>
        <p class="white--text aok-text-center mb-3">
          Hi! Welcome to my site!
        </p>
        <p class="white--text aok-text-center mb-3">
          When I'm not tackling the maternity wards, I hand make personalised cards and needle felted gifts.
        </p>
        <p class="white--text aok-text-center mb-10">
          Below are just a few examples of my previous crafts, if you have anything in mind or like something you see below, then get in touch!
        </p>
        <div class="slideshow-container mb-20">
          <Slideshow />
        </div>
        <div class="aok-flex-center">
          <button @click="contact = true">
            Contact me
          </button>
        </div>
      </div>
    </section>
    <section id="about" class="green">
      <h2 class="white--text aok-text-center mb-10">
        About me
      </h2>
    </section>
    <section id="packaging" class="blue">
      <div class="container">
        <h2 class="white--text aok-text-center">
          Packaging
        </h2>
        <div class="aok-flex-between packaging">
          <div v-for="(point, index) in packagingPoints" :key="`packaging-${index}`" class="pa-10">
            <div class="packaging-image-wrapper white" />
            <h4 class="aok-text-center mt-3 white--text">
              {{ point.title }}
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section id="pricing" class="orange">
      <div class="container">
        <h2 class="white--text aok-text-center mb-10">
          Pricing
        </h2>
        <p class="white--text mb-10">
          As custom pieces are often dependant on the complexity involved, to get an accurate esimate of price, please use the contact button below to send me a message and I will get back to you ask quickly as I can with a price and time estimate for your custom piece.
        </p>
        <div class="aok-flex-center">
          <button @click="contact = true">
            Contact me
          </button>
        </div>
      </div>
    </section>
    <div id="contact-dialog" :class="['purple aok-center-content', {'active' : contact}]" @click="contact = false">
      <div class="contact-form white pa-5" @click.stop />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      contact: false as boolean
    }
  },
  computed: {
    packagingPoints () {
      return [
        {
          title: '100% Recyclable',
          text: 'All of the packaging I use is 100% recyclable. No nasty plastics destined for landfill!'
        },
        {
          title: '100% Recyclable',
          text: 'All of the packaging I use is 100% recyclable. No nasty plastics destined for landfill!'
        },
        {
          title: '100% Recyclable',
          text: 'All of the packaging I use is 100% recyclable. No nasty plastics destined for landfill!"'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~assets/scss/_mixins';

#intro {
  overflow: hidden;

  .slideshow-container {
    max-width: 480px;
    margin: 0 auto;
  }
}

.packaging {
  flex-direction: column;
  align-items: center;

  @include desktop {
    flex-direction: row;
    align-items: unset;
  }

  &-image-wrapper {
    width: 160px;
    height: 160px;
    border-radius: 100%;

    @include tablet {
      width: 240px;
      height: 240px;
      border-radius: 100%;
    }
  }
}

#contact-dialog {
  position: fixed;
  opacity: 0;
  z-index: -20;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: opacity 0.5s;
  cursor: pointer;

  &.active {
    opacity: 1;
    z-index: 20;
  }
  .contact-form {
    border-radius: 6px;
    width: 80%;
    max-width: 480px;
    cursor: auto;
  }
}
</style>
