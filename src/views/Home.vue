<template>
  <div class="home" > 
    <img src="../assets/logo.png" alt style="width: 300px;" />
    
    <Start :welcome="avanzar" v-if="paso === 1" />
    <Login v-if="paso === 2" />
  </div>
</template>

<script>
// @ is an alias to /src
import Start from '@/components/Start.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Start,
    Login
  },
  data() {
    return {
      paso: 1,
    }
  },
  methods: {
    avanzar(value) {
      // Do something with the value
      this.paso = value
    }
  }
  
}
</script>
