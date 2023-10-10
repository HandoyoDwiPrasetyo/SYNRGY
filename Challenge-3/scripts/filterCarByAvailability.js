function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  cars.forEach((item) => {
    if (item.available === true) {
      result.push(item);
      console.log(item);
    }
  });

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
