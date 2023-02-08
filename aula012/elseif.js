var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas.`)

if(hora < 12) {
  console.log(`Bomd dia`)
} else if (hora <= 18) {
  console.log(`Boa tarde`)
} else if (hora < 23) {
  console.log(`Boa noite`)
}
