// Create Your Object Here

let member = {
    name: "Elzero",
    age:  "38",
    country: "Egypt",
    fullDetails: function()
    {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
    }
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt



//2
// Method One
// Create Your Object Here

let objMethodOne = {
    property : "Method One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

let objMethodTwo = Object.create(objMethodOne);
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

let objMethodThree = Object.assign({} , objMethodTwo);
objMethodThree,property = "Method Three";

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = new Object({
    property: "Method Four",
});

console.log(objMethodFour.property); // "Method Four"



//3
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

let finalObject = Object.assign({ a : a } , threeNums , twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/


//4
// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };
    
    let getArray = Object.entries(myFavGames); // array of length 2 (الاسم والخصائص بتاعته )
    let getlength = Object.keys(myFavGames).length;


    for(let i =0 ;  i<getlength ; i++)
    {
      console.log(`The Game Name Is ${getArray[i][0]}`);
      console.log(`The Publisher Is ${getArray[i][1].publisher}`);
      console.log(`The Price Is ${getArray[i][1].price}`);


      if(getArray[i][1].bestThree !== undefined && typeof getArray[i][1].bestThree ==="object" )
      {
        console.log("- Game Has Releases");
        console.log(`First => ${getArray[i][1].bestThree.one}`);
        console.log(`Second => ${getArray[i][1].bestThree.two}`);
        console.log(`Third => ${getArray[i][1].bestThree.three}`);
      }   

      console.log("#".repeat(20));
    }