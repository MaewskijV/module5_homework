let value = +prompt('Введите число:');
console.log( value);

if (isNaN(value)) {
    alert("Упс, кажется, вы ошиблись")
} else if (typeof(value) == "number") {
    if (value % 2 == 0) {
        alert("Число чётное")
    } else {
        alert("Число нечётное")
    }
} 