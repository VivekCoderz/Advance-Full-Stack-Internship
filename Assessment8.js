
// Q1.
// async function greet() {
//     return "Hello World";
// }
// greet().then(console.log);

// Q2.
// async function getUser() {
//     return { id: 1, name: "Vivek", city: "Panipat" };
// }
// getUser().then(console.log);

// Q3.
// async function getProducts() {
//     return ["Laptop", "Mouse", "Keyboard"];
// }
// getProducts().then(console.log);

// Q4.
// async function getDate() {
//     return new Date();
// }
// getDate().then(console.log);

// Q5.
// async function getRandom() {
//     return Math.floor(Math.random() * 100);
// }
// getRandom().then(console.log);

// Q6.
// async function getStudent() {
//     return { name: "Vivek", age: 21, course: "MERN" };
// }
// getStudent().then(console.log);

// Q7.
// async function getCompany() {
//     return { name: "Geeta University", location: "Panipat" };
// }
// getCompany().then(console.log);

// Q8.
// async function getCart() {
//     return ["Item1", "Item2", "Item3"];
// }
// getCart().then(console.log);

// Q9.
// async function getTotal() {
//     const cart = [200, 300, 500];
//     return cart.reduce((sum, price) => sum + price, 0);
// }
// getTotal().then(console.log);

// Q10.
// async function check() {
//     return "test";
// }
// console.log(check() instanceof Promise);   // true

// Q11.
// function getUser() {
//     return Promise.resolve({ id: 1, name: "Vivek" });
// }
// async function main() {
//     const user = await getUser();
//     console.log(user);
// }
// main();

// Q12.
// function getProduct() {
//     return Promise.resolve({ name: "Laptop", price: 50000 });
// }
// async function main() {
//     const product = await getProduct();
//     console.log(product);
// }
// main();

// Q13.
// function getOrders() {
//     return Promise.resolve(["Order1", "Order2"]);
// }
// async function main() {
//     const orders = await getOrders();
//     console.log(orders);
// }
// main();

// Q14.
// function getPayment() {
//     return Promise.resolve("Payment Status: Paid");
// }
// async function main() {
//     const payment = await getPayment();
//     console.log(payment);
// }
// main();

// Q15.
// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function main() {
//     console.log("Waiting...");
//     await wait(2000);
//     console.log("Done waiting!");
// }
// main();

// Q16.
// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function main() {
//     console.log("Start");
//     await wait(2000);
//     console.log("End");
// }
// main();

// Q17.
// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function main() {
//     console.log(1);
//     await wait(1000);
//     console.log(2);
//     await wait(1000);
//     console.log(3);
// }
// main();

// Q18.
// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function greetUser(name) {
//     await wait(1000);
//     console.log("Hello " + name + "!");
// }
// greetUser("Ram");

// Q19.
// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function verifyOTP(entered, actual) {
//     console.log("Verifying OTP...");
//     await wait(1000);
//     if (entered === actual) console.log("OTP Verified!");
//     else console.log("Invalid OTP!");
// }
// verifyOTP(1234, 1234);

// Q20.
// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function login(username, password) {
//     console.log("Logging in...");
//     await wait(1500);
//     if (username === "admin" && password === "1234") console.log("Login successful!");
//     else console.log("Login failed!");
// }
// login("admin", "1234");

// Q21.
// async function riskyFunction() {
//     throw new Error("Something went wrong");
// }
// async function main() {
//     try {
//         await riskyFunction();
//     } catch (err) {
//         console.log("Caught:", err.message);
//     }
// }
// main();

// Q22.
// async function loginValidation(username, password) {
//     if (username !== "admin" || password !== "1234") {
//         throw new Error("Invalid login credentials");
//     }
//     return "Login successful";
// }
// async function main() {
//     try {
//         const result = await loginValidation("admin", "wrong");
//         console.log(result);
//     } catch (err) {
//         console.log("Error:", err.message);
//     }
// }
// main();

// Q23.
// async function withdraw(balance, amount) {
//     if (amount > balance) {
//         throw new Error("Insufficient balance");
//     }
//     return "Withdrawal successful: " + amount;
// }
// async function main() {
//     try {
//         const result = await withdraw(1000, 5000);
//         console.log(result);
//     } catch (err) {
//         console.log("Error:", err.message);
//     }
// }
// main();

// Q24.
// function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
// async function processPayment(amount) {
//     await wait(1000);
//     if (amount <= 0) throw new Error("Invalid payment amount");
//     if (Math.random() < 0.2) throw new Error("Payment gateway error");
//     return "Payment of ₹" + amount + " successful";
// }
// async function main() {
//     try {
//         const result = await processPayment(500);
//         console.log(result);
//     } catch (err) {
//         console.log("Payment failed:", err.message);
//     }
// }
// main();

// Q25.
// async function registerUser(data) {
//     if (!data.name) throw new Error("Name is required");
//     if (!data.email) throw new Error("Email is required");
//     if (data.password.length < 6) throw new Error("Password too short");
//     return "Registration successful";
// }
// async function main() {
//     try {
//         const result = await registerUser({ name: "Ram", email: "ram@gmail.com", password: "123" });
//         console.log(result);
//     } catch (err) {
//         console.log("Error:", err.message);
//     }
// }
// main();

// Q26.
// async function validateEmail(email) {
//     const valid = /^\S+@\S+\.\S+$/.test(email);
//     if (!valid) throw new Error("Invalid email format");
//     return "Email is valid";
// }
// async function main() {
//     try {
//         console.log(await validateEmail("wrongemail"));
//     } catch (err) {
//         console.log("Error:", err.message);
//     }
// }
// main();

// Q27.
// async function validatePassword(pwd) {
//     if (pwd.length < 8) throw new Error("Password must be at least 8 characters");
//     if (!/[0-9]/.test(pwd)) throw new Error("Password must contain a number");
//     return "Password is strong";
// }
// async function main() {
//     try {
//         console.log(await validatePassword("abc123"));
//     } catch (err) {
//         console.log("Error:", err.message);
//     }
// }
// main();

// Q28.
// function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
// async function atm(pin, correctPin, balance, amount) {
//     await wait(1000);
//     if (pin !== correctPin) throw new Error("Incorrect PIN");
//     if (amount > balance) throw new Error("Insufficient balance");
//     return "Dispensing ₹" + amount;
// }
// async function main() {
//     try {
//         console.log(await atm(1234, 1234, 5000, 2000));
//     } catch (err) {
//         console.log("ATM Error:", err.message);
//     }
// }
// main();

// Q29.
// function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
// async function purchaseProduct(stock, qty) {
//     await wait(800);
//     if (qty > stock) throw new Error("Out of stock");
//     return "Purchased " + qty + " item(s)";
// }
// async function main() {
//     try {
//         console.log(await purchaseProduct(5, 2));
//     } catch (err) {
//         console.log("Error:", err.message);
//     }
// }
// main();

// Q30.
// function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
// async function cancelOrder(orderStatus) {
//     await wait(500);
//     if (orderStatus === "delivered") throw new Error("Cannot cancel a delivered order");
//     return "Order cancelled successfully";
// }
// async function main() {
//     try {
//         console.log(await cancelOrder("pending"));
//     } catch (err) {
//         console.log("Error:", err.message);
//     }
// }
// main();

// Q31.
// function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
// async function login() { await wait(500); return "Logged in"; }
// async function getUser() { await wait(500); return { id: 1, name: "Vivek" }; }
// async function getOrders(user) { await wait(500); return ["Order1", "Order2"]; }
// async function payment(orders) { await wait(500); return "Payment successful"; }
// async function main() {
//     console.log(await login());
//     const user = await getUser();
//     console.log(user);
//     const orders = await getOrders(user);
//     console.log(orders);
//     console.log(await payment(orders));
// }
// main();

// Q32.
// function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
// async function selectMovie() { await wait(500); return "Movie selected"; }
// async function selectSeat() { await wait(500); return "Seat selected"; }
// async function makePayment() { await wait(500); return "Payment done"; }
// async function getTicket() { await wait(500); return "Ticket booked!"; }
// async function main() {
//     console.log(await selectMovie());
//     console.log(await selectSeat());
//     console.log(await makePayment());
//     console.log(await getTicket());
// }
// main();

// Q33.
// function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
// async function placeOrder() { await wait(500); return "Order placed"; }
// async function cookFood() { await wait(500); return "Food cooked"; }
// async function packFood() { await wait(500); return "Food packed"; }
// async function deliverFood() { await wait(500); return "Food delivered!"; }
// async function main() {
//     console.log(await placeOrder());
//     console.log(await cookFood());
//     console.log(await packFood());
//     console.log(await deliverFood());
// }
// main();

// Q34.
// function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
// async function searchTrain() { await wait(500); return "Train found"; }
// async function selectClass() { await wait(500); return "Class selected"; }
// async function payTicket() { await wait(500); return "Payment done"; }
// async function confirmTicket() { await wait(500); return "Ticket confirmed!"; }
// async function main() {
//     console.log(await searchTrain());
//     console.log(await selectClass());
//     console.log(await payTicket());
//     console.log(await confirmTicket());
// }
// main();

// Q35.
// function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
// async function fillForm() { await wait(500); return "Form filled"; }
// async function verifyDocs() { await wait(500); return "Docs verified"; }
// async function payFees() { await wait(500); return "Fees paid"; }
// async function confirmAdmission() { await wait(500); return "Admission confirmed!"; }
// async function main() {
//     console.log(await fillForm());
//     console.log(await verifyDocs());
//     console.log(await payFees());
//     console.log(await confirmAdmission());
// }
// main();

// Q36.
// async function getUsers() { return ["User1", "User2"]; }
// async function getProducts() { return ["Laptop", "Mouse"]; }
// async function getOrders() { return ["Order1", "Order2"]; }
// async function main() {
//     const [users, products, orders] = await Promise.all([
//         getUsers(), getProducts(), getOrders()
//     ]);
//     console.log("Users:", users);
//     console.log("Products:", products);
//     console.log("Orders:", orders);
// }
// main();

// Q37.
// function api(name, ms) {
//     return new Promise(resolve => setTimeout(() => resolve(name + " done"), ms));
// }
// async function main() {
//     const results = await Promise.all([
//         api("API1", 1000),
//         api("API2", 1500),
//         api("API3", 500),
//         api("API4", 2000),
//         api("API5", 800)
//     ]);
//     console.log(results);
// }
// main();

// Q38.
// async function getUser() { return { id: 1, name: "Vivek" }; }
// async function getOrders() { return ["Order1", "Order2"]; }
// async function getProducts() { return ["Laptop", "Mouse"]; }
// async function getNotifications() { return ["Notif1", "Notif2"]; }
// async function loadDashboard() {
//     const [user, orders, products, notifications] = await Promise.all([
//         getUser(), getOrders(), getProducts(), getNotifications()
//     ]);
//     console.log({ user, orders, products, notifications });
// }
// loadDashboard();

// Q39.
// function loadImage(name, ms) {
//     return new Promise(resolve => setTimeout(() => resolve(name + " loaded"), ms));
// }
// async function loadGallery() {
//     const images = await Promise.all([
//         loadImage("img1.jpg", 1000),
//         loadImage("img2.jpg", 1500),
//         loadImage("img3.jpg", 800)
//     ]);
//     console.log(images);
// }
// loadGallery();

// Q40.
// function downloadFile(name, ms) {
//     return new Promise(resolve => setTimeout(() => resolve(name + " downloaded"), ms));
// }
// async function downloadAll() {
//     const files = await Promise.all([
//         downloadFile("file1.pdf", 1000),
//         downloadFile("file2.pdf", 1200),
//         downloadFile("file3.pdf", 900)
//     ]);
//     console.log(files);
// }
// downloadAll();

// Q41.
// async function api(name, fail) {
//     if (fail) throw new Error(name + " failed");
//     return name + " success";
// }
// async function main() {
//     const results = await Promise.allSettled([
//         api("API1", false), api("API2", false), api("API3", false),
//         api("API4", true), api("API5", true)
//     ]);
//     console.log(results);
// }
// main();

// Q42.
// async function api(name, fail, ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => fail ? reject(name + " failed") : resolve(name + " loaded"), ms);
//     });
// }
// async function loadAdminDashboard() {
//     const results = await Promise.allSettled([
//         api("Users API", false, 500),
//         api("Stats API", true, 500),
//         api("Logs API", false, 500)
//     ]);
//     results.forEach(r => {
//         if (r.status === "fulfilled") console.log("OK:", r.value);
//         else console.log("FAILED:", r.reason);
//     });
// }
// loadAdminDashboard();

// Q43.
// async function uploadFile(name, fail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => fail ? reject(name + " upload failed") : resolve(name + " uploaded"), 700);
//     });
// }
// async function batchUpload() {
//     const results = await Promise.allSettled([
//         uploadFile("file1.jpg", false),
//         uploadFile("file2.jpg", true),
//         uploadFile("file3.jpg", false)
//     ]);
//     console.log(results);
// }
// batchUpload();

// Q44.
// async function processResult(student, fail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => fail ? reject(student + ": processing failed") : resolve(student + ": passed"), 500);
//     });
// }
// async function processAllResults() {
//     const results = await Promise.allSettled([
//         processResult("Vivek", false),
//         processResult("Tripti", true),
//         processResult("Lovely", false)
//     ]);
//     console.log(results);
// }
// processAllResults();

// Q45.
// function server(name, ms) {
//     return new Promise(resolve => setTimeout(() => resolve(name + " responded"), ms));
// }
// async function main() {
//     const fastest = await Promise.race([
//         server("Server1", 3000),
//         server("Server2", 1000),
//         server("Server3", 2000)
//     ]);
//     console.log(fastest);
// }
// main();

// Q46.
// function server(name, fail, ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => fail ? reject(name + " failed") : resolve(name + " succeeded"), ms);
//     });
// }
// async function main() {
//     try {
//         const result = await Promise.any([
//             server("Server1", true, 500),
//             server("Server2", true, 800),
//             server("Server3", false, 1000)
//         ]);
//         console.log(result);
//     } catch (err) {
//         console.log("All servers failed:", err);
//     }
// }
// main();

// Q47.
// function fetchData(ms) {
//     return new Promise(resolve => setTimeout(() => resolve("Data received"), ms));
// }
// function timeout(ms) {
//     return new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), ms));
// }
// async function fetchWithTimeout(ms, timeoutMs) {
//     try {
//         const result = await Promise.race([fetchData(ms), timeout(timeoutMs)]);
//         console.log(result);
//     } catch (err) {
//         console.log(err.message);
//     }
// }
// fetchWithTimeout(3000, 2000);   // "Request timed out"

// Q48.
// async function* nameGenerator() {
//     yield "Ram";
//     yield "Shyam";
//     yield "Mohan";
// }
// async function main() {
//     for await (const name of nameGenerator()) {
//         console.log(name);
//     }
// }
// main();

// Q49.
// class NotesManager {
//     constructor() {
//         this.notes = [];
//         this.nextId = 1;
//     }
//     async addNote(text) {
//         const note = { id: this.nextId++, text };
//         this.notes.push(note);
//         return note;
//     }
//     async deleteNote(id) {
//         const index = this.notes.findIndex(n => n.id === id);
//         if (index === -1) throw new Error("Note not found");
//         this.notes.splice(index, 1);
//         return "Note deleted";
//     }
//     async updateNote(id, newText) {
//         const note = this.notes.find(n => n.id === id);
//         if (!note) throw new Error("Note not found");
//         note.text = newText;
//         return note;
//     }
//     async fetchNotes() {
//         return this.notes;
//     }
// }
// async function main() {
//     const manager = new NotesManager();
//     await manager.addNote("Buy groceries");
//     await manager.addNote("Finish assignment");
//     console.log(await manager.fetchNotes());
//     await manager.updateNote(1, "Buy groceries and milk");
//     await manager.deleteNote(2);
//     console.log(await manager.fetchNotes());
// }
// main();

// Q50. FINAL BOSS — Complete E-Commerce Async Flow
// function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
//
// async function login() {
//     await wait(500);
//     if (Math.random() < 0.1) throw new Error("Login failed");
//     return "Login successful";
// }
// async function getUser() {
//     await wait(500);
//     return { id: 1, name: "Vivek" };
// }
// async function getProducts() {
//     await wait(700);
//     if (Math.random() < 0.1) throw new Error("Could not fetch products");
//     return [{ name: "Laptop", price: 50000 }, { name: "Mouse", price: 500 }];
// }
// async function getCart(products) {
//     await wait(500);
//     return [products[0], products[1]];
// }
// async function applyCoupon(cart) {
//     await wait(400);
//     return { cart, discount: 0.1 };
// }
// async function calculateTotal({ cart, discount }) {
//     await wait(300);
//     const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
//     return subtotal - subtotal * discount;
// }
// async function processPayment(total) {
//     await wait(800);
//     if (Math.random() < 0.1) throw new Error("Payment failed");
//     return "Payment of ₹" + total + " successful";
// }
// async function generateInvoice(total) {
//     await wait(400);
//     return "Invoice generated for ₹" + total;
// }
// async function sendEmail(invoice) {
//     await wait(400);
//     return "Email sent: " + invoice;
// }
// async function trackOrder() {
//     await wait(600);
//     return "Order is on the way";
// }
// async function deliverOrder() {
//     await wait(1000);
//     return "Order delivered!";
// }
//
// async function ecommerceFlow() {
//     try {
//         console.log(await login());
//
//         const user = await getUser();
//         console.log("User:", user);
//
//         const products = await getProducts();
//         console.log("Products:", products);
//
//         const cart = await getCart(products);
//         console.log("Cart:", cart);
//
//         const couponResult = await applyCoupon(cart);
//         console.log("Coupon applied:", couponResult.discount * 100 + "%");
//
//         const total = await calculateTotal(couponResult);
//         console.log("Total:", total);
//
//         const paymentMsg = await processPayment(total);
//         console.log(paymentMsg);
//
//         const invoice = await generateInvoice(total);
//         console.log(invoice);
//
//         const emailMsg = await sendEmail(invoice);
//         console.log(emailMsg);
//
//         const trackMsg = await trackOrder();
//         console.log(trackMsg);
//
//         const deliveryMsg = await deliverOrder();
//         console.log(deliveryMsg);
//
//     } catch (err) {
//         console.log("Flow failed:", err.message);
//     } finally {
//         console.log("E-commerce process complete.");
//     }
// }
// ecommerceFlow();