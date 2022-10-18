export function myPush(array, value) {
    array[array.length -1] = value;

    return array;
}
let data = [];
data = myPush(data, 'pepa');

console.log(data);
