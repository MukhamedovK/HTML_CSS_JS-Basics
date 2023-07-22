// let arr1 = []
// arr1.push('K', 'a', 'm', 'o', 'l', 'i', 'd', 'd', 'i', 'n',)
// console.log(arr1)

//push добавляет элемент в конец массива
//pop удаляет последний элемент
//shift удаляет первый элемент
//unshift добавляет элемент в начало массива
//length показывает кол-во элементов массива

let svetofor = ['red', 'yellow', 'green']
let order = 'red'
if (svetofor[0] === order) {
    alert(' STOP ⛔')
} else if (svetofor[1] === order) {
    alert('Приготовьтесь')
} else if (svetofor[2] === order) {
    alert('Вы можете ехать')
} else {
    alert('ГАЗУЙ СВЕТОФОР НЕ РАБОТАЕТ')
}