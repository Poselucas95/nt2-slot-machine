<template>
<div class="start">
  <div class="container">
    <div class="row justify-content-md-center" style="margin-top: 10%">
      <div class="col-4">
        <button type="button" @click='avanzar()' class="btn btn-secondary btn-block">Bienvenido</button>
      </div>
    </div>
  </div>
  <Login />
  </div>
</template>

<script>


export default {
  name: 'start',
   props: {
    welcome: { type: Function },
  },
  data() {

  },
  methods: {
    avanzar() {
      // Do something with the value
      this.welcome(2)
    }
  },
  
}
</script>

