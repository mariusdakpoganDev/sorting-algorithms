import { book } from "../interfaces/book";

export const quickSort = (data: book[]): book[] => {
  //Inputs : sequence s of comparable elements, books in this case
  //Outputs: sorted sequence s

  if (data.length === 0) {
    //do not attempt to sort an empty array
    return data;
  } else {
    const pivotIndex = Math.floor(Math.random() * data.length);
    const pivot = data[pivotIndex];

    //Partion data
    const left = data.filter((book) => book.price < pivot.price);
    const middle = data.filter((book) => book.price === pivot.price);
    const right = data.filter((book) => book.price > pivot.price);

    //recursively sort
    return [...quickSort(left), ...middle, ...quickSort(right)];
  }
};
