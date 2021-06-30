<template>
  <div class="slideshow">
    <div
      v-for="(craft, index) in crafts"
      :key="`craft-${index}`"
      :class="[
        'craft',
        { 'blue craft-active': index == active },
        `${movingClass}`,
        { 'blue craft-prev': index + 1 == active },
        { 'blue craft-next': index - 1 == active },
        { 'blue craft-prev': active == 0 && index == crafts.length - 1 },
        { 'blue craft-next': active == crafts.length - 1 && index == 0 },
      ]"
      :style="`background-image: url('${craft.metadata.image.url}')`"
      @click="selectSlide(index)"
    />
    <div class="dots">
      <div
        v-for="(craft, index) in crafts"
        :key="`dot-${index}`"
        :class="['dot white', { blue: active == index }]"
        @click="selectSlide(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data () {
    return {
      active: 0 as number,
      movingClass: '' as string,
      ignoreInterval: false as boolean
    }
  },
  computed: {
    ...mapState(['crafts'])
  },
  watch: {
    active (val, oldVal) {
      if (val > oldVal || (oldVal === this.crafts.length - 1 && val === 0)) {
        this.movingClass = 'moving-left'
      } else {
        this.movingClass = 'moving-right'
      }
      setTimeout(() => {
        this.movingClass = ''
      }, 250)
    }
  },
  mounted () {
    setInterval(() => {
      if (!this.ignoreInterval) {
        this.active = this.active === this.crafts.length - 1 ? 0 : this.active + 1
      } else {
        this.ignoreInterval = false
      }
    }, 5000)
  },
  methods: {
    selectSlide (index: number) {
      this.ignoreInterval = true
      this.active = index
    }
  }
})
</script>

<style lang="scss" scoped>
#intro {
  height: 100vh;

  .craft {
    position: absolute;
    cursor: pointer;
    z-index: 0;
    border-radius: 6px;
    top: 50%;
    left: 50%;
    bottom: 50%;
    right: 50%;
    transition: all 1s;
    background-size: cover;
    background-position: center;

    &.craft-prev {
      z-index: 5;
      top: 20%;
      bottom: 20%;
      left: -40%;
      right: 80%;
    }

    &.craft-next {
      z-index: 5;
      top: 20%;
      bottom: 20%;
      left: 80%;
      right: -40%;
    }

    &.craft-active {
      z-index: 10;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      &.moving-left {
        z-index: 10;
        top: 20%;
        bottom: 20%;
        left: 90%;
        right: -50%;
      }

      &.moving-right {
        z-index: 10;
        top: 20%;
        bottom: 20%;
        right: 90%;
        left: -50%;
      }
    }
  }

  .slideshow {
    position: relative;
    border-radius: 6px;
    width: 100%;
    padding-bottom: 100%;

    &-container {
      max-width: 480px;
      margin: 0 auto;
    }

    .dots {
      position: absolute;
      bottom: -24px;
      width: 100%;
      display: flex;
      justify-content: center;

      .dot {
        cursor: pointer;
        transition: all 0.5s;
        height: 12px;
        width: 12px;
        border-radius: 100%;
        margin: 0 12px;
      }
    }
  }
}
</style>
