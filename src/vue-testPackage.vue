<template>
    <span>
      {{welcomeText}}
    </span>
</template>
<script>
export default {
  props: {
    showname: {
      type: Boolean,
      required: false,
      default: false
    },
    decimals: {
      type: Number,
      required: false,
      default: 0,
      validator(value) {
        return value >= 0
      }
    },
    username: {
      type: String,
      required: false,
      default: 'User'
    }
  },
  data() {
    return {
      _username: this.username,
      _welcometext: 'Welcome'
    };
  },
  computed: {
    welcomeText() {
      return (this.showname) ? this.welcomeText + ' ' + this.username : this.welcomeText
    }
  },
  watch: {npm tun 
   
  },
  mounted() {
    this.$emit('mountedCallback')
  },
  methods: {
    start() {

    },
    isNumber(val) {
      return !isNaN(parseFloat(val))
    }
  },
  destroyed() {
    
  }
};
</script>
