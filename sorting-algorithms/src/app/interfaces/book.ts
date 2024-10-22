export interface book {
  id: number;
  name: string;
  category: string;
  price: number;
  libraryRating: number;
  readersRating: number;
  stock: number;
  dateAdded: Date;
  nextDelivery: Date | null;
}
