<template>
  <div class="home"> 

       <img src="images/logo.png" style="margin-top: 20px"/>
    
    <Start :welcome="avanzar" v-if="paso === 1" />
    <Login :welcome="avanzar" v-if="paso === 2" />
    <Credits v-if="paso === 3" />
  </div>
</template>

<script>
// @ is an alias to /src
import Start from '@/components/Start.vue'
import Login from '@/components/Login.vue'
import Credits from '@/components/Credits.vue'

export default {
  name: 'home',
  components: {
    Start,
    Login,
    Credits
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
