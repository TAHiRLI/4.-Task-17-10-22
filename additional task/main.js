const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];


let  arr = products.filter(item => typeof item.price == "number").map(item => (item.price * 2).toFixed(3)).reduce((prev,now) => parseInt(prev) + parseInt(now));
console.log(arr)


function categorizeCountries(message){
  return   countries.filter(item => item.name.includes(message));
}


let newarr = categorizeCountries('land');
console.log(newarr)


