/* .js files add interaction to your website */
var factList = [
  "In 2018, Bangladeshi garment workers were paid 39 cents an hour (Oxfam Australia).",/*0*/
  "About 85% of all clothing go to garbage dumps each year (Maiti, 2020).",/*1*/
  "Only 4% of the price of a clothing piece sold in Australia goes towards workers in garment factories (Oxfam Australia).",/*2*/
  "The fashion industry requires about 700 gallons of water to produce one cotton shirt; 2,000 gallons to produce a pair of jeans (Maiti, 2020).",/*3*/
  "In 2013, an eight-floor factory that housed several garment factories collapsed in Dhaka, Bangladesh. It killed 1,134 workers and injured more than 2,500 (Maiti, 2020).",/*4*/
  "The amount of clothing pieces consumed every year has increased by 400% more than 20 years ago (Maiti, 2020).",/*5*/];

console.log(factList[1]);

var fact= document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;
if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count== factList.length){
    count = 0;
  }
}