const next = window.requestAnimationFrame ||
   window.webkitRequestAnimationFrame ||
   window.mozRequestAnimationFrame ||
   window.msRequestAnimationFrame ||
   window.oRequestAnimationFrame ||
   function(cb) { window.setTimeout(cb, 1000/60) }

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
        slots: [{
            title: "When",
            items: [
                "today",
              "next week",
              "last year",
              "tomorrow",
              "yesterday",
            ]
          }, 
          {
            title: "Where",
            items: [
                "at home",
              "at work",
              "at school",
              "at the gym",
              "at the park",
              "at the beach",
              "at the sidewalk",
              "at the city",
            ]
          }, 
          {
            title: "How",
            items: [
            "cycling",
              "walking",
              "swimming",
              "flying",
            ]
          }],
        opts: null,
        startedAt: null,
    },
    methods: {
        saludar: function () {
            // metodo usado para testear
            alert('Texto: ' + this.nombreJugador)
            
        },
        confirmarImporte: function () {
            this.creditoAcumulado = this.creditoInicio;
        },
        start: function() {
        
            if (this.opts) {
                return
            }
                        
            this.opts = this.slots.map( (data, i) => {
            
                const slot = this.$refs.slots[i]
                const choice = Math.floor( Math.random() * data.items.length )
                console.log("choice", i, data.items[choice])
        
                const opts = {
                    el: slot.querySelector('.slot__wrap'),
                finalPos: choice * 180,
                startOffset: 2000 + Math.random() * 500 + i * 500,
                height: data.items.length * 180,
                duration: 3000 + i * 700, // milliseconds
                isFinished: false,
                }
                
                return opts
                
            })
        
            next( this.animate )
        }, 
        animate: function(timestamp) {
    
            if (this.startedAt == null) {
                this.startedAt = timestamp
            }
            
            const timeDiff = timestamp - this.startedAt
            
            this.opts.forEach( opt => {
            
                if (opt.isFinished) {
                    return
                }
                    
                const timeRemaining = Math.max(opt.duration - timeDiff, 0)
                const power = 3
                const offset = ( Math.pow(timeRemaining, power) / Math.pow(opt.duration, power) ) * opt.startOffset
                
                // negative, such that slots move from top to bottom
                const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height)
                
                opt.el.style.transform = "translateY(" + pos + "px)"
                
                if ( timeDiff > opt.duration ) {
                console.log('finished', opt, pos, opt.finalPost)
                    opt.isFinished = true
                }
                
            })
        
            if (this.opts.every( o => o.isFinished )) {
                this.opts = null
                this.startedAt = null
                console.log('finished')
            } 
            else {
                next( this.animate )
            }
        } 
        
    }
});