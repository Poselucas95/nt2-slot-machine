<template>
  <div class="Credits">
    <div class="banner-area">
      <p class>
        <span class>Comprar Créditos {{name}}</span>
      </p>
      <div class="form">
        <form id="formValidation" name="contacto">
          <select class="inputer" id="creditos" name="creditos" type="number" placeholder maxlength>
            <option selected disabled>Seleccione importe</option>
            <option value="1000">$ 1.000</option>
            <option value="5000">$ 5.000</option>
            <option value="10000">$ 10.000</option>
            <option value="50000">$ 50.000</option>
          </select>
          <div class="btn fade grow" id="comprar">
            <span class>Confirmar</span>
          </div>
          <div class="price-bottom" ></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Credits',
  props: {
    welcome: { type: Function },
    name
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
