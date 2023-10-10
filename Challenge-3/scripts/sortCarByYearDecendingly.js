function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  console.log("result = " + result[0].year);

  // Tulis code-mu disini

  // == Method 1 ==
  // function sortByYearDesc(a, b) {
  //   return b.year - a.year;
  // }

  // result.sort(sortByYearDesc);

  // == Method 2 ==
  var len = result.length;
  var swapped;

  do {
    swapped = false;

    for (var i = 0; i < len - 1; i++) {
      if (result[i].year < result[i + 1].year) {
        // Tukar elemen jika elemen saat ini lebih besar dari elemen berikutnya
        var temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp; 
        swapped = true;
      }
    }
  } while (swapped);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
