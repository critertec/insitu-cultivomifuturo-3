export function getRandomInt(min, max, listSectionAlternal) {
  console.log(listSectionAlternal);

  const numberRandom = Math.floor(Math.random() * (max - min)) + min;

  if (listSectionAlternal.length === 0) {
    return numberRandom;
  }
  const validateUniqueNumber =
    listSectionAlternal &&
    listSectionAlternal.filter((number) => number === numberRandom);

  if (validateUniqueNumber.length > 0) {
    getRandomInt(min, max);
  } else if (validateUniqueNumber.length === 0) {
    return numberRandom;
  }
}
