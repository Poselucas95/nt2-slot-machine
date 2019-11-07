<template>
  <div class="Login" style="margin-top: 7%">
    <h1>
      Ingresa tu Nick
      <br />
    </h1>
    <form class="form">
      <p>
        <input class="inputer" type="text" placeholder maxlength="10" />
      </p>
      <div @click='avanzar()' class="btn" id="suscribir">
        <span >Continuar</span>
      </div>
    </form>
  </div>
</template>



<script>
export default {
  name: "Login",
    props: {
    welcome: { type: Function }
  },
  data() {},
  methods: {
    avanzar() {
      // Do something with the value
      this.welcome(3);
    }
  }
};
</script>

