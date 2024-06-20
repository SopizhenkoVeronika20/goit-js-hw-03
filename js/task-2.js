// Композиція масивів

function makeArray(firstArray, secondArray, maxLength) {
  const newArray = [...firstArray, ...secondArray];
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  } else {
    return newArray;
  }
}
