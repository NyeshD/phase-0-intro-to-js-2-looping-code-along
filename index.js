const names = ['Guadalupe','Ollie','Aki']
function writeCards(names,value) {
    let messages = []
    for (let i=0; i < names.length; i++) {
messages.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`)
}
return messages 
}
 writeCards(["Guadalupe","Ollie","Aki"], "surprise")

 function countDown() {
    let number = 10
    while (number >= 0) {
        console.log(--number)
    }
 }