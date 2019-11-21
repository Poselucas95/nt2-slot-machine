const next = window.requestAnimationFrame ||
   window.webkitRequestAnimationFrame ||
   window.mozRequestAnimationFrame ||
   window.msRequestAnimationFrame ||
   window.oRequestAnimationFrame ||
   function (cb) { window.setTimeout(cb, 1000 / 60) }

const juego1 = [
  {
    nombre: 'pera',
    imagen: 'icons/pera.png',
    valor: 20,
    esJackpot: false
  },
  {
    nombre: 'sandia',
    imagen: 'icons/sandia.png',
    valor: 25,
    esJackpot: false
  },
  {
    nombre: 'palta',
    imagen: 'icons/palta.png',
    valor: 30,
    esJackpot: false
  }
]

const juego2 = [
  {
    nombre: 'pica',
    imagen: 'icons/pica.png',
    valor: 50,
    esJackpot: false
  },
  {
    nombre: 'corazon',
    imagen: 'icons/cora.png',
    valor: 60,
    esJackpot: false
  },
  {
    nombre: 'diamante',
    imagen: 'icons/diamante.png',
    valor: 70,
    esJackpot: false
  },
  {
    nombre: 'perejil',
    imagen: 'icons/perejil.png',
    valor: 80,
    esJackpot: false
  }
]

const juego3 = [
  {
    nombre: 'tercero1',
    imagen: 'icons/tercero1.png',
    valor: 100,
    esJackpot: false
  },
  {
    nombre: 'tercero2',
    imagen: 'icons/tercero2.png',
    valor: 120,
    esJackpot: false
  },
  {
    nombre: 'tercero3',
    imagen: 'icons/tercero3.png',
    valor: 140,
    esJackpot: false
  },
  {
    nombre: 'tercero4',
    imagen: 'icons/tercero4.png',
    valor: 160,
    esJackpot: false
  },
  {
    nombre: 'tercero5',
    imagen: 'icons/tercero5.png',
    valor: 180,
    esJackpot: false
  }
]

const juego4 = [
  {
    nombre: 'chifei1',
    imagen: 'icons/chifei1.png',
    valor: 200,
    esJackpot: false
  },
  {
    nombre: 'chifei2',
    imagen: 'icons/chifei2.png',
    valor: 225,
    esJackpot: false
  },
  {
    nombre: 'chifei3',
    imagen: 'icons/chifei3.png',
    valor: 250,
    esJackpot: false
  },
  {
    nombre: 'chifei4',
    imagen: 'icons/chifei4.png',
    valor: 275,
    esJackpot: false
  },
  {
    nombre: 'chifei5',
    imagen: 'icons/chifei5.png',
    valor: 300,
    esJackpot: false
  },
  {
    nombre: 'chifei6',
    imagen: 'icons/chifei6.png',
    valor: 325,
    esJackpot: true
  }
]

new Vue({
  el: '#betngo',

  data: {
    jackpotAcumulado: 510950,
    nombreJugador: '',
    creditoInicio: 0,
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
    elegidos: []
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
        console.log('choice', i, data.items[choice])

        const opts = {
          el: slot.querySelector('.slot__wrap'),
          finalPos: choice * 180,
          startOffset: 2000 + Math.random() * 500 + i * 500,
          height: data.items.length * 180,
          duration: 3000 + i * 700, // milliseconds
          isFinished: false
        }
        this.elegidos.push(this.juego[choice])
        return opts
      })
      next(this.animate)
    },
    animate: function (timestamp) {
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

        // negative, such that slots move from top to bottom
        const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height)

        opt.el.style.transform = 'translateY(' + pos + 'px)'

        if (timeDiff > opt.duration) {
          console.log('finished', opt, pos, opt.finalPost)
          opt.isFinished = true
        }
      })

      if (this.opts.every(o => o.isFinished)) {
        this.opts = null
        this.startedAt = null
        console.log('finished')
        console.log(this.elegidos)
        this.darPremio()
            }
      else {
        next(this.animate)
      }
    },
    darPremio: function () {
      // Gana sin jackpot
      if (this.elegidos[0].nombre == this.elegidos[1].nombre && this.elegidos[1].nombre == this.elegidos[2].nombre && !this.elegidos[0].esJackpot) {
        this.creditoAcumulado += this.tamanioApuesta * this.elegidos[0].valor
                this.partidasGanadas += 1
                this.jackpotAcumulado += this.tamanioApuesta / 7
                alert('GANASTE $ ' + this.tamanioApuesta * this.elegidos[0].valor)
      } else if (this.elegidos[0].nombre == this.elegidos[1].nombre && this.elegidos[1].nombre == this.elegidos[2].nombre && this.elegidos[0].esJackpot) {
        this.creditoAcumulado += this.jackpotAcumulado
                this.partidasGanadas += 1
                this.jackpots += 1
                this.jackpotAcumulado = 5000
                alert('FELICITACIONES!!! HAZ GANADO EL JACKPOT ACUMULADO DE $ ' + this.jackpotAcumulado)
      }
      console.log('premio: ' + this.creditoAcumulado)
      console.log(this.elegidos[0].nombre == this.elegidos[1].nombre == this.elegidos[2].nombre)
            console.log('tamanio apuesta: ' + this.tamanioApuesta)
      console.log(this.elegidos[0].nombre + ' ' + this.elegidos[1].nombre + ' ' + this.elegidos[2].nombre)
            console.log(this.juego)
        },
    elegirJuego: function (numeroJuego) {
      let iconos
            let juegoNuevo
            switch (numeroJuego) {
        case 1:
          iconos = [juego1[0].imagen, juego1[1].imagen, juego1[2].imagen]
                    juegoNuevo = [juego1[0], juego1[1], juego1[2]]
                    break;
        case 2:
          iconos = [juego2[0].imagen, juego2[1].imagen, juego2[2].imagen, juego2[3].imagen]
                    juegoNuevo = [juego2[0], juego2[1], juego2[2], juego2[3]]
                    break;
        case 3:
          iconos = [juego3[0].imagen, juego3[1].imagen, juego3[2].imagen, juego3[3].imagen, juego3[4].imagen]
                    juegoNuevo = [juego3[0], juego3[1], juego3[2], juego3[3], juego3[4]]
                    break;
        case 4:
          iconos = [juego4[0].imagen, juego4[1].imagen, juego4[2].imagen, juego4[3].imagen, juego4[4].imagen, juego4[5].imagen]
                    juegoNuevo = [juego4[0], juego4[1], juego4[2], juego4[3], juego4[4], juego4[5]]
      }
      this.slots[0].items = iconos
            this.slots[1].items = iconos
            this.slots[2].items = iconos
            this.juego = juegoNuevo
            console.log('asdasd')
            console.log(iconos)
            console.log(this.slots)
            return iconos
    }

  }
})
