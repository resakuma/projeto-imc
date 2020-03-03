var weight = parseFloat(prompt('Qual o seu peso?'))
var height = parseFloat(prompt('Qual a sua altura?'))

var IMC = weight / Math.pow(height,2)

if(IMC <= 18.5){
  document.write('SEU IMC É: '+IMC+' - BAIXO PESO')
}
else if (IMC >= 18.5 && IMC < 25) {
  document.write('SEU IMC É: '+IMC+' - PESO ADEQUADO')
}
else if (IMC >= 25 && IMC < 30) {
  document.write('SEU IMC É: '+IMC+' - SOBREPESO')
}
else if (IMC >= 30) {
  document.write('SEU IMC É: '+IMC+' - JOJOCA')
}
