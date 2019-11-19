<template>
  <div class="Start" style="margin-top: 10%">
      <div class="form">
        <div class="btn animated pulse infinite" id="entrar">
          <span>Entrar</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  props: {
    welcome: { type: Function }
  },
  data: function () {
    return {
      test: []
    }
  },
  methods: {
    avanzar () {
      // Do something with the value
      this.welcome(2)
    }
  }
}
</script>
