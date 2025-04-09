/* Écris une fonction filterEven(arr) qui retourne un tableau contenant uniquement les
nombres pairs d'un tableau donné.*/

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter((number) => {
    return number % 2 == 0;
});

console.log(evenNumbers);