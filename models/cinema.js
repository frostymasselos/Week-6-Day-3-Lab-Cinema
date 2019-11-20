const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  return this.films.map((film) => {
    return film.title;
  })
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.filter((film) => {
    return film.title === title;
  })
};

greet = function (name, greeting) {
  `name + greeting`
}
module.exports = Cinema;

// // 5 .filter
//
// const getEvens = function (numbers) {
//   const result = numbers.filter((number) => {
//     return number % 2 === 0;
//   });
//   return result;
// };
// console.log(getEvens(myNumbers));
//
//
//
// // 4 .map
//
// const multiplyByTwo = function (numbers) {
//   const result = numbers.map((number) => {
//     return number * 2
//   });
//
//   return result;
// };
