let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// let order = (fruit_name, call_production) => {
//   setTimeout(function () {
//     console.log(`${stocks.Fruits[fruit_name]} was selected`);

//     // Order placed. Call production to start
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped");
//       setTimeout(() => {
//         console.log("Water and iceCream is added");
//         setTimeout(() => {
//           console.log("Strat the machine");
//           setTimeout(() => {
//             console.log("Ice Cream placed on cup");
//             setTimeout(() => {
//               console.log("Chocolate as toppings");
//               setTimeout(() => {
//                 console.log("And finnaly Serve Ice cream 🧡");
//               }, 3000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// order(1, production);

// let order = (call_production) => {
//     console.log("Order placed. Please call production");
//     // function 👇 is being called
//     call_production();
// };

// let production = () => {
//   console.log("Production has started");
// };
// // name 👇 of our second function
// order(production);

// 1st Function

// 2nd Function

// let production = () =>{
//   // blank for now
// };

// Trigger 👇

// let production = () => {
//     setTimeout(() => {
//         console.log("production has started");
//     }, 000);
// };

// Callback hell is gone, now we will look into Promises to solve the same problem

is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        // work is 👇 getting done here
        resolve(work());

        // Setting 👇 time here for 1 work
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

// // Set 👇 time here
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`));

// order(3000, function work() {
//   console.log(`${stocks.Fruits[3]} was selected`);
// });
// //    pass a ☝️ function here to start working

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order(1000, () => console.log("production has started"));
//   })
//   .then(() => {
//     return order(1000, () => console.log("Water and Ice Cream is mixing"));
//   })
//   .then(() => {
//     return order(2000, () => console.log("production is ready to serve"));
//   })

// //   .catch(() => {
// //     console.log("Customer left");
// //   })
//   .catch(() => {
//     console.log("Customer left so we are not available now");
//   });

// // step 1
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   // step 2
//   .then(() => {
//     return order(1000, () => console.log("production has started"));
//   })

//   // step 3
//   .then(() => {
//     return order(2000, () => console.log("Fruit has been chopped"));
//   })

//   // step 4
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//     );
//   })

//   // step 5
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })

//   // step 6
//   .then(() => {
//     return order(1000, () =>
//       console.log(`ice cream placed on ${stocks.holder[1]}`)
//     );
//   })

//   // step 7
//   .then(() => {
//     return order(1000, () => console.log(`${stocks.toppings[0]} as toppings`));
//   })

//   // Step 8
//   .then(() => {
//     return order(200, () => console.log("Serve Ice Cream"));
//   })

//   .finally(() => {
//     console.log("end of day");
//   });

// now the magical async await comes, async retuns a promise, so we dont need to use promise anymore if we use async await

// //👇 Magical keyword
// let abc;
// async function kitchen() {
//   try {
//     // Let's create a fake problem
//     await abc;
//     console.log('Our code is working')
//   } catch (error) {
//     console.log("abc does not exist", error);
//   } finally {
//     console.log("Runs code anyways");
//   }
// }

// kitchen(); // run the code




function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}



async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0000);
    console.log("production has started");

    await time(2000);
    console.log("fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log("customer left" + error);
  }
}
kitchen();



// async function kitchen() {
//   try {
//     await setTimeout(() => {
//         console.log(`${stocks.Fruits[0]} was selected`);       
//     }, 2000);
//     await setTimeout(() => {
//       console.log(`${stocks.Fruits[0]} was selected`);
//     }, 2000);
//     await setTimeout(() => {
//       console.log(`${stocks.Fruits[0]} was selected`);
//     }, 2000);
//     await setTimeout(() => {
//       console.log(`${stocks.Fruits[0]} was selected`);
//     }, 2000);
//   } catch (error) {
//     console.log("customer left" + error);
//   }
// }
// kitchen();
