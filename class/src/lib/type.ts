export type ordercart = {
  title: string;
  price: number;
};
export type food = {
  title: string;
  price: number;
};
export type food2 = {
  name: string;
  price: number;
};
export type Category = {
  _id: string;
  name: string;
};
export type categoryidType = {
  _id: string;
  name: string;
};
export type Dish = {
  name: string;
  ingredients: string;
  price: number;
  category: string;
  image: string;
  _id: string;
  categorid: categoryidType;
};
export type Cartfood = {
  food: Dish;
  count: number;
};
