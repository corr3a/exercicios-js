const notas = [10, 9, 7, 4, 6, 2]

let somaDasNotas = 0

notas.forEach (nota => {
    somaDasNotas += nota
})

let media = somaDasNotas / notas.length

console.log(`As notas são: ${notas}`);
console.log(`A media das notas é: ${media}`)