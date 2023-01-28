function first() {
    alert(`Будет ${50+10}`)
}

function second() {
 let age = prompt('Введи свой возраст')
 if  (age < 18){
    alert('ты еще мелкий')
 } else {
    alert('можно')
 }
}

function third() {
    document.getElementById('zp').innerHTML = 10000000
}