const x = 2;
if (typeof(x) == 'string') {
    console.log(x + ' —' + ' строка');
} else if (typeof(x) == 'number') {
    console.log(x + ' —' + ' число');
} else if(typeof(x) == 'boolean') {
    console.log(x + ' —' + ' логический тип');
} else {
    console.log('Тип x не определён');
}