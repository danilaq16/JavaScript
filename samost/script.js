///////////////////////////// 1

let price = 100;
let discount = 0.2;
let newPrice = price * (1 - discount);

console.log(`Цена товара со скидкой: ${newPrice} руб.`);

///////////////////////////// 2

let str = "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.";
let count = 0;

for (let i = 0; i < str.length; i++){
        if (str[i] === 'п'){
            count++;
        }
}

console.log(count);
/////////////////////////////// 3

{}
let arr = [34, 54, 43, 11, 12, 56, 87];
let min = arr[0];

for (let i of arr) {
    if (i < min) {
        min = i;
    }
}

console.log(min);

///////////////////// 4

{
    let arr = [
        ["Иван", "Катя", "Ольга", "Максим"],
        ["Минск", "Брест", "Гродно", "Могилев"],
    ];

    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr[1].length; j++) {
            if (i === j) {
                console.log(`${arr[0][i]} 'из' ${arr[1][j]}`);
            }
        }
    }
}

//////////////////// 5

{
    let temperature = +prompt("Введите температуру от -10 до 40 градусов");

    switch (true) {
        case temperature < 0:
            console.log(`Осторожно! Температура ${temperature} холодная`);
            break;
        case temperature > 30:
            console.log(
                `Температура ${temperature} является dвыше средней, будьте осторожны!`
            );
            break;
        default:
    }
}

////////////////////// 6

let num = +prompt('Введите любое целое число');
let fact = 0;

if (num < isNaN(num) || 0){
    console.log('Вы ввели не целое число, попробуйте снова');
}else {
    for (let i = 1; i <= num; i++){
        fact += i;
    }
}

console.log(`Факториал из числа ${num} будет являтся: ${fact}`);


////////////////////////////////// 7

{
    let str = "Минск, Гродно, Витебск, Гомель";
    let strArr = str.split();

    strArr.push('Могилев');
    strArr.push('Брест');
    strArr.push('Несвиж'); 

    console.log(strArr);
}

///////////////////// 8

{
    let age = +prompt('Введите ваш возраст');

    if (age > 18 && age < 65){
        console.log('Отлично, вы нам подходите!');
    }else {
        console.log('К сожелению, мы неможем вас принять на работу, удачных вам поисков!');
    }
}

//////////////////////////// 9

let mounths = ['январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let i = mounths.length-1;

while (i >= 0){
    console.log(`${i + 1}. ${mounths[i]}`);
    i--;
}

/////////////////// 10

