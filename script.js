// Exercise 1 : Information 
// Part I : function with no parameters

function infoAboutMe () {
    let name = "Ange";
    let age = 27;
    let hobbies = "Coding";
    console.log(`Mon nom est ${name} et j'ai ${age} ans, mon hobbie est ${hobbies}`);
}
infoAboutMe();

// Part II : function with three parameters

function infoAboutPerson(personName, personAge, personFavoriteColor){
   console.log(`Bonjour M/Mme ${personName}, vous avez ${personAge} ans et votre coleur préférée est ${personFavoriteColor}`)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

console.log("\n----------------------------------------------");

// Exercise 2 : Tips

function calculateTip() {
    userFacture = Number(prompt("Monsieur John veuilez entrer votre montant:"));

    if (userFacture > 50) {
        console.log(`le pourboire est de : ${((userFacture*20)/100)}$ et votre facture finale est : ${userFacture + ((userFacture*20)/100)}$`);
    } else if (userFacture > 50 && userFacture < 200) {
        console.log(`le pourboire est de : ${(userFacture*15)/100}$ et votre facture finale est : ${userFacture + ((userFacture*15)/100)}$`);
    }  else if (userFacture > 200) {
        console.log(`le pourboire est de : ${(userFacture*10)/100}$ et votre facture finale est : ${userFacture + ((userFacture*10)/100)}$`);
    } else {
        console.log("Entrez un nombre supérieur à 50 !")
    }
};
calculateTip()

console.log("\n----------------------------------------------");

/* Exercise 3 : Find The Numbers Divisible By 23
Instructions */

let output = [];
const num1 = 0;
const num2 = 500;
function isDivisible() {
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++){
            if (i % 23 === 0) {
                output.push(i);
            }
        }
    } else {
        alert("Entrée invalide")
    }
    // Pour obtenir la somme totale du tableau
    let sum = 0;
    for (let index = 0; index < output.length; index++){
        sum += output[index];
    }
    // Affiche la liste les nombres divisible par 23
    console.log(`Outcome : ${output}`);
    // Affiche la somme des nombres divisbles par 23
    console.log(`Sum : ${sum}`);
}
isDivisible();

console.log("\n----------------------------------------------");

// Exercise 4 : Shopping List

const stock = {
    banana: 6,
    apple: 0,
    pear: 12,
    orange: 32,
    blueberry: 1,
};

const prices = {
    banana: 4,
    apple: 2,
    pear: 1,
    orange: 1.5,
    blueberry: 10,
};
  
let shoppingList = ["banana", "orange", "apple"]; 

function myBill() {
   let prixTotalPanier = 0;
   for (let articles of shoppingList) {
        let articlesEnStock = stock[articles];
        if (articlesEnStock > 0) {
            let prixArticles = prices[articles];
            stock[articles] = stock[articles] - 1;
            prixTotalPanier = prixTotalPanier + prixArticles;
        }
    }
    console.log(`Le prix total de votre panier est : ${prixTotalPanier}`);
}
myBill();
  
console.log("\n----------------------------------------------");

// Exercise 5 : What’s In My Wallet

function changeEnough(itemPrice, amountOfChange) {
    let sumAmount = 0;
    let tabChangeAmount = [0.25, 0.1, 0.05, 0.01];
    for (var i = 0; i < amountOfChange.length; i++) {
      for (var j = 0; j < tabChangeAmount.length; j++) {
        if (i == j) {
          sumAmount += i * j;
        }
      }
    }
    if (itemPrice <= sumAmount) {
      return true;
    } else {
      return false;
    }
}
  
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

console.log("\n---------------------------------------------- ");
  
//  Exercise 6 : Vacations Costs
  
function hotelCost(numberOfNights) {
    const prixHotelNuit = 140;
    return numberOfNights * prixHotelNuit;
}
  
function planeRideCost(userDestination) {
    let listDestination = {
      London: 183,
      Paris: 220,
    };
    switch (userDestination) {
        case "London":
            return listDestination[userDestination];
            break;
        case "Paris":
            return listDestination[userDestination];
            break;
        default:
            return 300;
    }
}
  
function rentalCarCost(dayRentCar) {
    let costsCarPerDay = 40;
    let costsRentCar;
    if (dayRentCar > 10) {
      costsRentCar = dayRentCar * costsCarPerDay * 0.05;
    } else {
      costsRentCar = dayRentCar * costsCarPerDay;
    }
    return costsRentCar;
}
  
function totalVacationCost() {
    let numberOfNights;
    let userDestination;
    let dayRentCar;
    do {
      numberOfNights = prompt(
        "Veuillez entrer le nombre de nuits pour séjourner à l'hôtel."
      );
    } while (isNaN(numberOfNights) && numberOfNights == "");
    do {
      userDestination = prompt("Veuillez saisir votre destination.");
    } while (!isNaN(userDestination) && userDestination == "");
    do {
      dayRentCar = prompt(
        "Veuillez entrer le nombre de jours pour la location de véhicule."
      );
    } while (isNaN(dayRentCar) && dayRentCar == "");
  
    console.log(`Le coût de l'hôtel : $${hotelCost(numberOfNights)}`);
    console.log(`le coût des billets d'avion : $${planeRideCost(userDestination)}`);
    console.log(`Le coût de la voiture  : $${rentalCarCost(dayRentCar)}`);
}
  
totalVacationCost();

console.log("\n END OF EXERCICE");