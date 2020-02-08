module.exports = function flattenArray(arrayToFlatten) {
  let array = [];
  flattenArr(arrayToFlatten);

  function flattenArr(arrayToFlatten) {
    arrayToFlatten.forEach(element => {
      if (Array.isArray(element)) flattenArr(element);
      else array.push(element);
    });
  }
  return array;
};
