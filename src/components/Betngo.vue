<template>
    <div id='betngo'>
        <!---HEADER--->
        <div class="main-img">
            <br/>
                <img id=""  src="images/logo.png" />
            <br/>
        </div>
        <!---HEADER--->

        <!---BIENVENIDA BLOCK0--->
        <div id="block0" style="display: block">
            <div class="banner-area w-100 d-flex align-items-center justify-content-center my-0" style="position: absolute; top: 0; left: 0; height: 100%;">
                <div class="form">
                    <form id="form" method="post" novalidate="">
                        <div class="btn animated pulse infinite" id="entrar"><span class="">Entrar</span></div>
                    </form>
                </div>
            </div>
        </div>
        <!---FIN DE BIENVENIDA--->

        <!---REGISTRO DE USUARIO BLOCK1--->
        <div id="block1" style="display:none">
            <div class="banner-area">
                <h1 class="descrOptin" style="display:block">
                    <span class="">Ingresa tu Nick<br/></span>
                </h1>
                <div class="form">
                    <form id="formSubscription" name="contacto">
                        <p>
                            <input class="inputer" id="nombre" v-model="nombreJugador" name="nombre" type="text" placeholder="" maxlength="15"/>
                        </p>
                        <div class="btn" id="suscribir"><span class="">Continuar</span></div>
                    </form>
                </div>
            </div>
        </div>
        <!---FIN DE REGISTRO DE USUARIO--->

        <!---COMPRA DE CREDITOS BLOCK2--->
        <div id="block2" style="display:none">
            <div class="banner-area">
                <p class="">
                    <span class="">Comprar Créditos</span>
                </p>
                <div class="form">
                    <form id="formValidation" name="contacto">
                        <p>
                            <select class="inputer" id="creditos" name="creditos" v-model="creditoInicio">
                                <option disabled>Seleccione importe</option>
                                <option selected="selected" value="1000">$ 1.000</option>
                                <option value="5000">$ 5.000</option>
                                <option value="10000">$ 10.000</option>
                                <option value="50000">$ 50.000</option>
                            </select>
                        </p>
                        <div class="btn grow" id="comprar" v-on:click="confirmarImporte"><span class="">Confirmar</span></div>
                        <div class="price-bottom">
                            <span class=""></span>
                        </div>
                    </form>
                </div>
            </div>



        </div>
        <!---FIN DE COMPRA DE CREDITOS--->

        <!---GRILLA DE JUEGOS BLOCK3--->
        <div id="block3" style="display:none">
            <div id="main-body">
                <div class="banner-area">
                    <p style="font-weight: bold">
                        <span class="">Crédito: $ {{creditoAcumulado}}</span>
                    </p>
                </div>
                <!--tarjetas de juegos-->
                <div class="main-page-wrapper">
                    <div class="row no-gutters d-flex justify-content-center">
                        <div class="col-5 p-2"><img src="images/vegas.png" id="juego1" v-on:click="elegirJuego(1)" class="w-100" alt="Vegas Slots"></a></div>
                        <div class="col-5 p-2"><img src="images/slotomania.png" id="juego2" v-on:click="elegirJuego(2)" class="w-100" alt="Sloto Mania Terre"></a></div>
                        <div class="col-5 p-2"><img src="images/caesars.png" id="juego3" v-on:click="elegirJuego(3)" class="w-100" alt="Ceasars"></a></div>
                        <div class="col-5 p-2"><img src="images/xxlchifei.png" id="juego4" v-on:click="elegirJuego(4)" class="w-100" alt="XXL Chifei"></a></div>
                    </div>
                </div>
                <!--fin tarjetas de juegos-->
            </div>
            <div class="footer">
              <button @click="mostrarAyuda" style="padding: 10px; position: absolute; top: -60px; left: 10px; background-color: transparent; border: 0; color: orange" id='info'> <i class="fas fa-info fa-3x"></i> </button>
              <button style="padding: 10px; position: absolute; top: -60px; right: 10px; background-color: transparent; border: 0; color: orange" id='checkout'> <i class="fas fa-sign-out-alt fa-3x"></i> </button>
            </div>
        </div>
        <!---FIN DE GRILLA DE JUEGOS--->

        <!--- JUEGO BLOCK4--->
        <div id="block4" class="main-page-wrapper" style="display:none">
            <div class="main-page-wrapper d-flex flex-column align-items-center">
            <div class="row" style="margin: 0;">
                <h4 class="">JACKPOT $ {{jackpotAcumulado}}</h4>
            </div>
            <div class="row no-gutters mb-2">
                <span class="">Crédito: $ {{creditoAcumulado}}</span>
            </div>
            <div class="row" style="margin: 0;">
                <div class="col-12 px-0">
                    <div class="slot-machine mx-auto d-flex flex-row align-items-center" style="max-width: 90%">
                            <div class='slot col-4 p-0 rounded' v-for='slot in slots' ref='slots'> 
                                <div class='slot__window'> 
                                    <div class='slot__wrap'> 
                                        <div class='slot__item' v-for='opt in slot.items'><img v-bind:src="opt" /></div> 
                                        <div class='slot__item slot__item--copy' ><img v-bind:src="slot.items[0]" /></div>
                                    </div> 
                                </div> 
                            </div> 
                        </div>
                </div>
            </div>
            <div class="row no-gutters my-2">
              <span>Elige tu apuesta</span>
            </div>
            <div class="row no-gutters mx-auto">
                    <div class="col-xs-6 d-flex flex-row">
                        <button id="ap10" style="padding: 10px 0" class="apButton btn rounded border-0 px-2" @click='setTamanioApuesta(10)' :disabled='creditoAcumulado < 10 ? true : false'>x10</button>
                        <button id="ap50" style="padding: 10px 0" class="apButton btn ml-2 rounded border-0 px-2" @click='setTamanioApuesta(50)' :disabled='creditoAcumulado < 50 ? true : false'>x50</button>
                        <button id="ap100" style="padding: 10px 0" class="apButton btn ml-2 rounded border-0 px-2" @click='setTamanioApuesta(100)' :disabled='creditoAcumulado < 100 ? true : false'>x100</button> 
                    </div>
                </div>
            <div class="row" style="margin: 0;">
                <div class="col">
                    <button class="btn text-white px-3 py-2"  @click='start' v-if='tamanioApuesta > 0' :disabled="creditoAcumulado <= 0 || jugable === false ? true : false">jugar</button> 
                </div>
            </div>
        </div>

        <div class="footer">
          <button style="padding: 10px; position: absolute; top: -60px; left: 10px; background-color: transparent; border: 0; color: orange" id='seljuegos'> <i class="fas fa-arrow-circle-left fa-3x"></i> </button>
          <button @click="mostrarAyuda" style="padding: 10px; position: absolute; top: -60px; right: 10px; background-color: transparent; border: 0; color: orange" id='info'> <i class="fas fa-info fa-3x"></i> </button>
        </div>

        </div>
        <!---FIN DE JUEGO--->

        <!--- RESUMEN DEL JUEGO BLOCK99--->
        <div id="block99" class="main-page-wrapper" style="display:none">
            <div v-if="nombreJugador">
              <div class="banner-area">
                  <div style="font-weight: bold">
                      <div class="main-page-wrapper">
                      <div class="row" style="margin-bottom: 15px;">
                              <div class="col-12"><h1>{{nombreJugador}}</h1></div>
                          </div>
                      <br/>
                      <div class="row" style="margin: 10px 0;">
                              <div class="col-8"><h5>Crédito Inicial:</h5></div>
                              <div class="col-4"><h5>$ {{creditoInicio}}</h5></div>
                          </div>
                      <div class="row" style="margin: 10px 0;">
                              <div class="col-8"><h5>Partidas Jugadas:</h5></div>
                              <div class="col-4"><h5>{{partidasJugadas}}</h5></div>
                          </div>
                      <div class="row" style="margin: 10px 0;">
                              <div class="col-8"><h5>Partidas Ganadas: </h5></div>
                              <div class="col-4"><h5>{{partidasGanadas}} </h5></div>
                          </div>
                      <div class="row" style="margin: 10px 0;">
                              <div class="col-8"><h5>Jackpots:</h5></div>
                              <div class="col-4"><h5>{{jackpots}}</h5></div>
                          </div>
                      <div class="row" style="margin: 10px 0;">
                              <div class="col-8"><h5>Crédito Final:</h5></div>
                              <div class="col-4"><h5>$ {{creditoAcumulado}} </h5></div>
                          </div>
                  </div>
                  </div>
              </div> 
            </div >
            <div v-else>
              <div class="banner-area">
                  <div style="font-weight: bold">
                      <div class="main-page-wrapper">
                      <div class="row" style="margin-bottom: 15px;">
                              <div class="col-12"><h1>INVITADO</h1></div>
                          </div>
                      <br/>
                      <div class="row" style="margin: 10px 0;">
                              <div class="col-8"><h5>Crédito Inicial:</h5></div>
                              <div class="col-4"><h5>$ {{creditoInicio}}</h5></div>
                          </div>
                      <div class="row" style="margin: 10px 0;">
                              <div class="col-8"><h5>Partidas Jugadas:</h5></div>
                              <div class="col-4"><h5>{{partidasJugadas}}</h5></div>
                          </div>
                      <div class="row" style="margin: 10px 0;">
                              <div class="col-8"><h5>Partidas Ganadas: </h5></div>
                              <div class="col-4"><h5>{{partidasGanadas}} </h5></div>
                          </div>
                      <div class="row" style="margin: 10px 0;">
                              <div class="col-8"><h5>Jackpots:</h5></div>
                              <div class="col-4"><h5>{{jackpots}}</h5></div>
                          </div>
                      <div class="row" style="margin: 10px 0;">
                              <div class="col-8"><h5>Crédito Final:</h5></div>
                              <div class="col-4"><h5>$ {{creditoAcumulado}} </h5></div>
                          </div>
                  </div>
                  </div>
              </div> 
            </div>
            <div class="footer">
              <button style="padding: 10px; position: absolute; top: -60px; left: 10px; background-color: transparent; border: 0; color: orange" id='juegosBack'> <i class="fas fa-arrow-circle-left fa-3x"></i> </button>
              <button style="padding: 10px; position: absolute; top: -60px; right: 10px; background-color: transparent; border: 0; color: orange" id='reinicio' v-on:click="terminar()"> <i class="fas fa-power-off fa-3x"></i> </button>
            </div>

        </div>
        <!---FIN RESUMEN DEL JUEGO--->

        <div style="clear: both"></div>

    <!---FOOTER TEXT--->
    <div class="footer">
         <!---
        <button style="padding: 10px; position: absolute; top: -50px; left: 10px; background-color: transparent; border: 0; color: orange" id='end'> <i class="fa fa-sign-in-alt fa-3x"></i> </button>
        <button style="padding: 10px; position: absolute; top: -50px; right: 10px; background-color: transparent; border: 0; color: orange" id='end'> <i class="fa fa-sign-out-alt fa-3x"></i> </button>
        --->
        <div class="legal-footer">
            <span class="">Bet´N Go! codeado por el G99 para quedarnos con tu dinero.</span>
        </div>
    </div>
    <!---END OF FOOTER--->
</div>

</template>

<script>

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const $ = require('jquery')
window.$ = $


const next = window.requestAnimationFrame ||
   window.webkitRequestAnimationFrame ||
   window.mozRequestAnimationFrame ||
   window.msRequestAnimationFrame ||
   window.oRequestAnimationFrame ||
   function (cb) { window.setTimeout(cb, 1000 / 60) },

 juego1 = [
  {
    nombre: 'pera',
    imagen: 'icons/pera.png',
    valor: 20,
    esJackpot: false
  },
  {
    nombre: 'sandia',
    imagen: 'icons/sandia.png',
    valor: 20,
    esJackpot: false
  },
  {
    nombre: 'palta',
    imagen: 'icons/palta.png',
    valor: 20,
    esJackpot: false
  }
],

 juego2 = [
  {
    nombre: 'pica',
    imagen: 'icons/pica.png',
    valor: 30,
    esJackpot: false
  },
  {
    nombre: 'corazon',
    imagen: 'icons/cora.png',
    valor: 30,
    esJackpot: false
  },
  {
    nombre: 'diamante',
    imagen: 'icons/diamante.png',
    valor: 30,
    esJackpot: false
  },
  {
    nombre: 'perejil',
    imagen: 'icons/perejil.png',
    valor: 30,
    esJackpot: false
  }
],

 juego3 = [
  {
    nombre: 'tercero1',
    imagen: 'icons/tercero1.png',
    valor: 50,
    esJackpot: false
  },
  {
    nombre: 'tercero2',
    imagen: 'icons/tercero2.png',
    valor: 50,
    esJackpot: false
  },
  {
    nombre: 'tercero3',
    imagen: 'icons/tercero3.png',
    valor: 50,
    esJackpot: false
  },
  {
    nombre: 'tercero4',
    imagen: 'icons/tercero4.png',
    valor: 50,
    esJackpot: false
  },
  {
    nombre: 'tercero5',
    imagen: 'icons/tercero5.png',
    valor: 50,
    esJackpot: false
  }
],
 juego4 = [
  {
    nombre: 'chifei1',
    imagen: 'icons/chifei1.png',
    valor: 80,
    esJackpot: false
  },
  {
    nombre: 'chifei2',
    imagen: 'icons/chifei2.png',
    valor: 80,
    esJackpot: false
  },
  {
    nombre: 'chifei3',
    imagen: 'icons/chifei3.png',
    valor: 80,
    esJackpot: true
  },
  {
    nombre: 'chifei4',
    imagen: 'icons/chifei4.png',
    valor: 80,
    esJackpot: false
  },
  {
    nombre: 'chifei5',
    imagen: 'icons/chifei5.png',
    valor: 80,
    esJackpot: false
  },
  {
    nombre: 'chifei6',
    imagen: 'icons/chifei6.png',
    valor: 80,
    esJackpot: false
  }
]

export default {
  name: 'Betngo',
  data () {
    return{
    jackpotAcumulado: 500500,
    nombreJugador: '',
    creditoInicio: 1000,
    partidasJugadas: 0,
    partidasGanadas: 0,
    jackpots: 0,
    creditoAcumulado: 0,
    tamanioApuesta: 0,
    juego: [],
    slots: [
      {
        items: [
          juego1[0].imagen,
          juego1[1].imagen,
          juego1[2].imagen
        ]
      },
      {
        items: [
          juego1[0].imagen,
          juego1[1].imagen,
          juego1[2].imagen
        ]
      },
      {
        items: [
          juego1[0].imagen,
          juego1[1].imagen,
          juego1[2].imagen
        ]
      }],
    opts: null,
    startedAt: null,
    elegidos: [],
    jugable: true
    }
  },
  methods: {
    saludar: function () {
      // metodo usado para testear
      alert('Texto: ' + this.nombreJugador)
    },
    confirmarImporte: function () {
      this.creditoAcumulado = this.creditoInicio
    },
    setTamanioApuesta: function (tamanio) {
      this.tamanioApuesta = tamanio
      this.jugable = true
      this.start
    },
    start: function () {
      this.elegidos = []
      if (this.opts) {
        return
      }

      this.creditoAcumulado -= this.tamanioApuesta
      this.partidasJugadas += 1

      this.opts = this.slots.map((data, i) => {
        const slot = this.$refs.slots[i]
        const choice = Math.floor(Math.random() * data.items.length)


        const opts = {
          el: slot.querySelector('.slot__wrap'),
          finalPos: choice * 160,
          startOffset: 2000 + Math.random() * 500 + i * 500,
          height: data.items.length * 160,
          duration: 3000 + i * 700, // milisegundos
          isFinished: false
        }
        this.elegidos.push(this.juego[choice])
        return opts
      })
      next(this.animate)
      
    },
    animate: function (timestamp) {
      this.jugable = false
      if (this.startedAt == null) {
        this.startedAt = timestamp
      }

      const timeDiff = timestamp - this.startedAt

      this.opts.forEach(opt => {
        if (opt.isFinished) {
          return
        }

        const timeRemaining = Math.max(opt.duration - timeDiff, 0)
        const power = 3
        const offset = (Math.pow(timeRemaining, power) / Math.pow(opt.duration, power)) * opt.startOffset

        // ve en negativo, asi los slots se mueven de arriba hacia abajo
        const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height)

        opt.el.style.transform = 'translateY(' + pos + 'px)'

        if (timeDiff > opt.duration) {
          opt.isFinished = true
          
        }
      })

      if (this.opts.every(o => o.isFinished)) {
        this.opts = null
        this.startedAt = null
        this.darPremio()
        
        if (this.creditoAcumulado < this.tamanioApuesta) {
          this.jugable = false
        } else {
          this.jugable = true
        }
      } else {
        next(this.animate)
      }
    },

    mostrarAyuda: function () {
      Swal.fire({
        title:  '<h2 style="position: relative;max-width: 100% !important;margin: 0 0 .4em !important;padding: 0 !important; color: #595959 !important; font-size: 0.5em !important; font-weight: 600 !important; text-align: center !important; text-transform: none !important;word-wrap: break-word !important">BETNGO - RULEZ</h2>',
        icon: 'info',
        html:
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Elige entre la variedad de juegos disponibles.  </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Selecciona tu apuesta antes de cada tirada.    </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Haz girar los tambores presionando "Jugar".    </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Espera se detengan los tambores.    </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Con 3 figuras iguales ganaras un premio.    </p><br/>' + 
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Las jugadas no ganadoras incrementan el Jackpot.   </p><br/>'+
            '<br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"><strong> Juego1: Vegas Slots</strong>  </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Dificultad: Muy Baja</p><br/>'+
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Probabilidad de Ganar: 3.70%   </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Combinaciones: 3 de 3   </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Ganancia: apuesta x 20   </p><br/>' +
            '<br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"><strong> Juego2: Slotomania</strong></p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Dificultad: Baja </p><br/>' + 
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Probabilidad de Ganar: 1.56%   </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Combinaciones: 3 de 4 </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Ganancia: apuesta x 30 </p><br/>' +
            '<br/>' +      
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"><strong>Juego3: Ceasars Slots</strong></p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Dificultad: Media </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Probabilidad de Ganar: 0.80%   </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Combinaciones: 3 de 5 </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Ganancia: apuesta x 50 </p><br/>'+
            '<br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"><strong> Juego4: XXL Chifei</strong></p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Dificultad: Alta </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Probabilidad de Ganar: 0.46%   </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> Combinaciones: 3 de 6 </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;;"> Ganancia: apuesta x 80 </p><br/>' +
            '<p style="font-size: 0.7em; margin: 0; padding: 0; line-height: 0;"> <strong>Jackpot:</strong> 3 x gato de la fortuna </p>',

          showCloseButton: true,
      })
    },

    darPremio: function () {
      // Gana sin jackpot
      if (this.elegidos[0].nombre == this.elegidos[1].nombre && this.elegidos[1].nombre == this.elegidos[2].nombre && !this.elegidos[0].esJackpot) {
        this.creditoAcumulado += this.tamanioApuesta * this.elegidos[0].valor
        this.partidasGanadas += 1
        Swal.fire({
          title: '¡Ganaste $' + this.tamanioApuesta * this.elegidos[0].valor + '!',
          width: 600,
          padding: '3em',
          background: 'rgba(255,255,255, 0.95)',
          backdrop: `
            rgba(255,255,255,0.2)
            url("images/confetti.gif")
            center top 
            repeat`,
            confirmButtonText: '¡Continuar!'
        })
      } else if (this.elegidos[0].nombre == this.elegidos[1].nombre && this.elegidos[1].nombre == this.elegidos[2].nombre && this.elegidos[0].esJackpot) {
        this.creditoAcumulado += this.jackpotAcumulado
        this.partidasGanadas += 1
        this.jackpots += 1
        this.jackpotGanado = jackpotAcumulado
        this.jackpotAcumulado = 5000
        Swal.fire({
          title: '¡¡FELICITACIONES!! HAZ GANADO EL JACKPOT DE $ ' + this.jackpotGanado,
          width: 600,
          padding: '3em',
          background: 'rgba(255,255,255, 0.95)',
          backdrop: `
            rgba(255,255,255,0.2)
            url("images/confetti.gif")
            center top 
            repeat`,
            confirmButtonText: '¡Continuar!'
        })
      } else{
        this.jackpotAcumulado += this.tamanioApuesta / 10
      }

    },
    elegirJuego: function (numeroJuego) {
      let iconos
      let juegoNuevo
      switch (numeroJuego) {
        case 1:
          iconos = [juego1[0].imagen, juego1[1].imagen, juego1[2].imagen]
          juegoNuevo = [juego1[0], juego1[1], juego1[2]]
          break
        case 2:
          iconos = [juego2[0].imagen, juego2[1].imagen, juego2[2].imagen, juego2[3].imagen]
          juegoNuevo = [juego2[0], juego2[1], juego2[2], juego2[3]]
          break
        case 3:
          iconos = [juego3[0].imagen, juego3[1].imagen, juego3[2].imagen, juego3[3].imagen, juego3[4].imagen]
          juegoNuevo = [juego3[0], juego3[1], juego3[2], juego3[3], juego3[4]]
          break
        case 4:
          iconos = [juego4[0].imagen, juego4[1].imagen, juego4[2].imagen, juego4[3].imagen, juego4[4].imagen, juego4[5].imagen]
          juegoNuevo = [juego4[0], juego4[1], juego4[2], juego4[3], juego4[4], juego4[5]]
      }
      this.slots[0].items = iconos
      this.slots[1].items = iconos
      this.slots[2].items = iconos
      this.juego = juegoNuevo
      return iconos
    },
    terminar: function() {
      this.nombreJugador='',
      //this.creditoInicio=0,
      this.partidasJugadas=0,
      this.partidasGanadas=0,
      this.jackpots=0,
      this.creditoAcumulado=0
    },
  },


// navegación

mounted(){
  $("#block0").show();
  $("#block99").hide();

$("#entrar").click(function () { // mostrar input de nombre
	$("#block0").hide();
	$("#block1").show();
});

$("#suscribir").click(function () { // mostrar compra de creditos
	$("#block1").hide();
	$("#block2").show();
});

$("#comprar").click(function () { // mostrar select de juegos
	$("#block2").hide();
	$("#block3").show();
});

$("#juego1").click(function () { // mostrar juego versión 1
	$("#block3").hide();
	$("#block4").show();
});

$("#juego2").click(function () { // mostrar juego versión 2
	$("#block3").hide();
	$("#block4").show();
});

$("#juego3").click(function () { // mostrar juego versión 3
	$("#block3").hide();
	$("#block4").show();
});

$("#juego4").click(function () { // mostrar juego versión 4
	$("#block3").hide();
	$("#block4").show();
});

// atajos de navegación

$("#imgLogo").click(function () { // ir al selec de juegos (desde el logo)
	$("#block1").hide();
	$("#block2").hide();
	$("#block3").show();
	$("#block4").hide();
	$("#block99").hide();
	$("#block0").hide();
});

$("#checkout").click(function () { // ir al checkout
	$("#block3").hide();
	$("#block99").show();
});

$("#seljuegos").click(function () { // volver al selec de juegos (desde un juego)
	$("#block3").show();
	$("#block4").hide();
});

$("#juegosBack").click(function () { // volver al selec de juegos (desde el checkout)
	$("#block3").show();
	$("#block99").hide();
});

$("#reinicio").click(function () { // volver al inicio
  $("#block99").hide();
  $("#block0").show();
});



// Botones x10 x50 x100

$("#ap10").click(function () {
	$("#ap10").css("background-color", "orange");
	$("#ap50").css("background-color", "black");
	$("#ap100").css("background-color", "black");
});
$("#ap50").click(function () {
	$("#ap10").css("background-color", "black");
	$("#ap50").css("background-color", "orange");
	$("#ap100").css("background-color", "black");
});
$("#ap100").click(function () {
	$("#ap10").css("background-color", "black");
	$("#ap50").css("background-color", "black");
	$("#ap100").css("background-color", "orange");
});


  }
}

// TEST


</script>
