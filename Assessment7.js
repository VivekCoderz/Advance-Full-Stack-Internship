// Q1.
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello World"), 2000);
// });
// p1.then(console.log);

// Q2.
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Server Down"), 3000);
// });
// p2.catch(console.log);

// Q3.
// const p3 = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;
//     setTimeout(() => {
//         success ? resolve("Success!") : reject("Failed!");
//     }, 1000);
// });
// p3.then(console.log).catch(console.log);

// Q4.
// function checkAge(age) {
//     return new Promise((resolve, reject) => {
//         if (age >= 18) resolve("Adult - Access granted");
//         else reject("Minor - Access denied");
//     });
// }
// checkAge(20).then(console.log).catch(console.log);

// Q5.
// function checkPassword(pwd) {
//     return new Promise((resolve, reject) => {
//         if (pwd.length >= 8) resolve("Password is valid");
//         else reject("Password too short");
//     });
// }
// checkPassword("vivek123").then(console.log).catch(console.log);

// Q6.
// function checkEmail(email) {
//     return new Promise((resolve, reject) => {
//         const valid = /^\S+@\S+\.\S+$/.test(email);
//         valid ? resolve("Valid email") : reject("Invalid email");
//     });
// }
// checkEmail("vivek@gmail.com").then(console.log).catch(console.log);

// Q7.
// function withdraw(balance, amount) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (amount > balance) reject("Insufficient balance");
//             else resolve("Withdrawal successful: " + amount);
//         }, 1000);
//     });
// }
// withdraw(5000, 2000).then(console.log).catch(console.log);

// Q8.
// function atmTransaction(pin, correctPin, amount) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (pin !== correctPin) reject("Incorrect PIN");
//             else resolve("Transaction successful: ₹" + amount);
//         }, 1500);
//     });
// }
// atmTransaction(1234, 1234, 1000).then(console.log).catch(console.log);

// Q9.
// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "Vivek", city: "Panipat" });
//         }, 1000);
//     });
// }
// getUser().then(console.log);

// Q10.
// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({ code: 500, message: "Internal Server Error" });
//         }, 1000);
//     });
// }
// getData().catch(console.log);

// Q11.
// Promise.resolve(10)
//     .then(num => num * 2)   // 20
//     .then(num => num * 2)   // 40
//     .then(num => num * 2)   // 80
//     .then(console.log);     // 80

// Q12.
// Promise.resolve("Ram")
//     .then(name => name.toUpperCase())              // RAM
//     .then(name => name + " MOHAN")                  // RAM MOHAN
//     .then(name => name + " DIXIT")                  // RAM MOHAN DIXIT
//     .then(console.log);

// Q13.
// Promise.resolve(1000)
//     .then(price => price + price * 0.18)   // Add GST
//     .then(price => price - price * 0.10)   // Apply Discount
//     .then(price => console.log("Final Price:", price.toFixed(2)));

// Q14.
// function login() { return Promise.resolve("Logged in"); }
// function getUser() { return Promise.resolve({ id: 1, name: "Vivek" }); }
// function getOrders(user) { return Promise.resolve(["Order1", "Order2"]); }
// function getPayment(orders) { return Promise.resolve("Payment Status: Paid"); }
// login()
//     .then(() => getUser())
//     .then(user => getOrders(user))
//     .then(orders => getPayment(orders))
//     .then(console.log);

// Q15.
// function selectMovie() { return Promise.resolve("Movie selected"); }
// function selectSeat() { return Promise.resolve("Seat selected"); }
// function makePayment() { return Promise.resolve("Payment done"); }
// function getTicket() { return Promise.resolve("Ticket booked!"); }
// selectMovie()
//     .then(() => selectSeat())
//     .then(() => makePayment())
//     .then(() => getTicket())
//     .then(console.log);

// Q16.
// function placeOrder() { return Promise.resolve("Order placed"); }
// function cookFood() { return Promise.resolve("Food cooked"); }
// function packFood() { return Promise.resolve("Food packed"); }
// function deliverFood() { return Promise.resolve("Food delivered!"); }
// placeOrder()
//     .then(() => cookFood())
//     .then(() => packFood())
//     .then(() => deliverFood())
//     .then(console.log);

// Q17.
// function fillForm() { return Promise.resolve("Form filled"); }
// function verifyDocs() { return Promise.resolve("Docs verified"); }
// function payFees() { return Promise.resolve("Fees paid"); }
// function confirmAdmission() { return Promise.resolve("Admission confirmed!"); }
// fillForm()
//     .then(() => verifyDocs())
//     .then(() => payFees())
//     .then(() => confirmAdmission())
//     .then(console.log);

// Q18.
// function searchTrain() { return Promise.resolve("Train found"); }
// function selectClass() { return Promise.resolve("Class selected"); }
// function payTicket() { return Promise.resolve("Payment done"); }
// function confirmTicket() { return Promise.resolve("Ticket confirmed!"); }
// searchTrain()
//     .then(() => selectClass())
//     .then(() => payTicket())
//     .then(() => confirmTicket())
//     .then(console.log);

// Q19.
// function delay(value) {
//     return new Promise(resolve => setTimeout(() => resolve(value), 1000));
// }
// delay("Step 1")
//     .then(v => { console.log(v); return delay("Step 2"); })
//     .then(v => { console.log(v); return delay("Step 3"); })
//     .then(v => console.log(v));

// Q20.
// Promise.resolve(1)
//     .then(n => n + 1)
//     .then(n => n + 1)
//     .then(n => n + 1)
//     .then(n => n + 1)
//     .then(n => n + 1)
//     .then(n => n + 1)
//     .then(n => n + 1)
//     .then(n => n + 1)
//     .then(n => n + 1)
//     .then(console.log);   // 10

// Q21.
// Promise.resolve()
//     .then(() => { throw new Error("Error in first then"); })
//     .catch(err => console.log("Caught:", err.message));

// Q22.
// Promise.resolve()
//     .then(() => console.log("Then 1"))
//     .then(() => console.log("Then 2"))
//     .then(() => { throw new Error("Error in third then"); })
//     .then(() => console.log("Then 4 - SKIPPED"))
//     .then(() => console.log("Then 5 - SKIPPED"))
//     .catch(err => console.log("Caught:", err.message));

// Q23.
// Promise.resolve()
//     .then(() => { console.log("Step1"); })
//     .then(() => { console.log("Step2"); })
//     .then(() => { throw new Error("Error occurred"); })
//     .catch(err => console.log("Catch:", err.message));

// Q24.
// Promise.resolve()
//     .then(() => { throw new Error("Something failed"); })
//     .catch(err => {
//         console.log("Recovered from:", err.message);
//         return "default value";
//     })
//     .then(val => console.log("Continuing with:", val));

// Q25.
// Promise.resolve()
//     .then(() => { throw new Error("First error"); })
//     .catch(err => {
//         console.log("Catch 1:", err.message);
//         throw new Error("Second error");
//     })
//     .catch(err => console.log("Catch 2:", err.message))
//     .catch(err => console.log("Catch 3 - SKIPPED"));
// // Output: Catch 1: First error
// //         Catch 2: Second error

// Q26.
// function greetCallback(name, callback) {
//     callback("Hello " + name);
// }
// function greetPromise(name) {
//     return new Promise(resolve => {
//         greetCallback(name, resolve);
//     });
// }
// greetPromise("Ram").then(console.log);

// Q27.
// function calculateCallback(a, b, callback) {
//     callback(a + b);
// }
// function calculatePromise(a, b) {
//     return new Promise(resolve => {
//         calculateCallback(a, b, resolve);
//     });
// }
// calculatePromise(5, 10).then(console.log);

// Q28.
// function loginCallback(user, pass, callback) {
//     if (user === "admin" && pass === "1234") callback(null, "Login success");
//     else callback("Invalid credentials", null);
// }
// function loginPromise(user, pass) {
//     return new Promise((resolve, reject) => {
//         loginCallback(user, pass, (err, result) => {
//             if (err) reject(err);
//             else resolve(result);
//         });
//     });
// }
// loginPromise("admin", "1234").then(console.log).catch(console.log);

// Q29.
// function downloadCallback(callback) {
//     setTimeout(() => callback(null, "File downloaded"), 2000);
// }
// function downloadPromise() {
//     return new Promise((resolve, reject) => {
//         downloadCallback((err, result) => {
//             if (err) reject(err);
//             else resolve(result);
//         });
//     });
// }
// downloadPromise().then(console.log);

// Q30.
// function weatherCallback(city, callback) {
//     setTimeout(() => callback(null, { city, temp: "30°C" }), 1500);
// }
// function weatherPromise(city) {
//     return new Promise((resolve, reject) => {
//         weatherCallback(city, (err, data) => {
//             if (err) reject(err);
//             else resolve(data);
//         });
//     });
// }
// weatherPromise("Delhi").then(console.log);

// Q31.
// function getUser() { return Promise.resolve({ id: 1, name: "Vivek" }); }
// function getOrders() { return Promise.resolve(["Order1", "Order2"]); }
// function getProducts() { return Promise.resolve(["Laptop", "Mouse"]); }
// Promise.all([getUser(), getOrders(), getProducts()])
//     .then(([user, orders, products]) => {
//         console.log("User:", user);
//         console.log("Orders:", orders);
//         console.log("Products:", products);
//     });

// Q32.
// function delayedPromise(value, ms) {
//     return new Promise(resolve => setTimeout(() => resolve(value), ms));
// }
// Promise.all([
//     delayedPromise("P1", 1000),
//     delayedPromise("P2", 2000),
//     delayedPromise("P3", 500),
//     delayedPromise("P4", 1500),
//     delayedPromise("P5", 3000)
// ]).then(console.log);

// Q33.
// Promise.all([
//     Promise.resolve("Success1"),
//     Promise.reject("Failed!"),
//     Promise.resolve("Success2")
// ]).then(console.log).catch(console.log);
// // Output: Failed!
// // (Promise.all rejects immediately if ANY promise rejects)

// Q34.
// function fetchUsers() { return Promise.resolve(["User1", "User2"]); }
// function fetchStats() { return Promise.resolve({ visits: 100 }); }
// function fetchNotifications() { return Promise.resolve(["Notif1"]); }
// Promise.all([fetchUsers(), fetchStats(), fetchNotifications()])
//     .then(([users, stats, notifications]) => {
//         console.log("Dashboard loaded:", { users, stats, notifications });
//     })
//     .catch(err => console.log("Dashboard failed:", err));

// Q35.
// function downloadFile(name, ms) {
//     return new Promise(resolve => setTimeout(() => resolve(name + " downloaded"), ms));
// }
// Promise.all([
//     downloadFile("file1.pdf", 1000),
//     downloadFile("file2.pdf", 2000),
//     downloadFile("file3.pdf", 1500)
// ]).then(results => results.forEach(r => console.log(r)));

// Q36.
// Promise.allSettled([
//     Promise.resolve("Success1"),
//     Promise.resolve("Success2"),
//     Promise.resolve("Success3"),
//     Promise.reject("Fail1"),
//     Promise.reject("Fail2")
// ]).then(console.log);
// // Output: [
// //   { status: 'fulfilled', value: 'Success1' },
// //   { status: 'fulfilled', value: 'Success2' },
// //   { status: 'fulfilled', value: 'Success3' },
// //   { status: 'rejected', reason: 'Fail1' },
// //   { status: 'rejected', reason: 'Fail2' }
// // ]

// Q37.
// function fetchAPI(name, shouldFail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             shouldFail ? reject(name + " failed") : resolve(name + " loaded");
//         }, 500);
//     });
// }
// Promise.allSettled([
//     fetchAPI("Users API", false),
//     fetchAPI("Stats API", true),
//     fetchAPI("Orders API", false)
// ]).then(results => {
//     results.forEach(r => {
//         if (r.status === "fulfilled") console.log("OK:", r.value);
//         else console.log("FAILED:", r.reason);
//     });
// });

// Q38.
// function uploadFile(name, fail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             fail ? reject(name + " upload failed") : resolve(name + " uploaded");
//         }, 800);
//     });
// }
// Promise.allSettled([
//     uploadFile("img1.jpg", false),
//     uploadFile("img2.jpg", true),
//     uploadFile("img3.jpg", false)
// ]).then(results => {
//     const success = results.filter(r => r.status === "fulfilled").length;
//     const failed = results.filter(r => r.status === "rejected").length;
//     console.log(`${success} succeeded, ${failed} failed`);
//     console.log(results);
// });

// Q39-A.
// function server(name, ms) {
//     return new Promise(resolve => setTimeout(() => resolve(name + " responded"), ms));
// }
// Promise.race([
//     server("Server1", 5000),
//     server("Server2", 2000),
//     server("Server3", 1000)
// ]).then(console.log);
// // Output: Server3 responded   (fastest wins)

// Q39-B.
// function server(name, shouldReject, ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             shouldReject ? reject(name + " failed") : resolve(name + " succeeded");
//         }, ms);
//     });
// }
// Promise.any([
//     server("Server1", true, 1000),
//     server("Server2", true, 1500),
//     server("Server3", false, 2000)
// ]).then(console.log).catch(console.log);
// // Output: Server3 succeeded   (first fulfilled, ignores earlier rejections)

// Q40. FINAL BOSS — Food Delivery System
// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.1 ? resolve("Login successful") : reject("Login failed");
//         }, 500);
//     });
// }
// function fetchUser() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve({ id: 1, name: "Vivek" }), 500);
//     });
// }
// function fetchRestaurants() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.1 ? resolve(["Domino's", "KFC", "McDonald's"]) : reject("Could not fetch restaurants");
//         }, 700);
//     });
// }
// function fetchMenu(restaurant) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(["Pizza", "Burger", "Fries"]), 500);
//     });
// }
// function placeOrder(menu) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve({ orderId: 101, items: menu[0] }), 700);
//     });
// }
// function processPayment(order) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.1 ? resolve("Payment successful") : reject("Payment failed");
//         }, 800);
//     });
// }
// function generateInvoice(order) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Invoice #" + order.orderId), 400);
//     });
// }
// function sendEmail(invoice) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Email sent with " + invoice), 400);
//     });
// }
// function trackOrder() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Order is on the way"), 600);
//     });
// }
// function deliverOrder() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Order delivered!"), 1000);
//     });
// }
//
// login()
//     .then(msg => { console.log(msg); return fetchUser(); })
//     .then(user => { console.log("User:", user); return fetchRestaurants(); })
//     .then(restaurants => { console.log("Restaurants:", restaurants); return fetchMenu(restaurants[0]); })
//     .then(menu => { console.log("Menu:", menu); return placeOrder(menu); })
//     .then(order => { console.log("Order placed:", order); return processPayment(order).then(msg => ({ order, msg })); })
//     .then(({ order, msg }) => { console.log(msg); return generateInvoice(order); })
//     .then(invoice => { console.log(invoice); return sendEmail(invoice); })
//     .then(emailMsg => { console.log(emailMsg); return trackOrder(); })
//     .then(status => { console.log(status); return deliverOrder(); })
//     .then(final => console.log(final))
//     .catch(err => console.log("Order failed:", err))
//     .finally(() => console.log("Process complete."));

// IQ1.
// A
// B

// IQ2.
// A
// C
// B

// IQ3.
// 25

// IQ4.
// Error

// IQ5.
// Boom

// IQ6.
// 100

// IQ7.
// A
// B

// IQ8.
// [1, 2, 3]

// IQ9.
// Failed

// IQ10.
// Start
// End
// A
// B