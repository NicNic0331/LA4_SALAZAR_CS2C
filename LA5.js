// Import the readline module for interactive input
const readline = require('readline');

// Simple hash function for demonstration purposes
function hashFunction(key) {
    return key.length % 10; // Hash based on the length of the name
}

// Initialize the hash table with predefined customers
let hashTable = {};
let predefinedCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

predefinedCustomers.forEach(customer => {
    let hash = hashFunction(customer);
    hashTable[hash] = customer;
});

console.log("Initial Hash Table:", hashTable);

// Initialize readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display menu
function displayMenu() {
    console.log("\nChoose an action:");
    console.log("1. Add a customer");
    console.log("2. Serve a customer");
    console.log("3. Exit");
}

// User input
rl.on("line", (input) => {
    if (input === "1") {
        rl.question("Enter the customer's name: ", (name) => {
            let hash = hashFunction(name);
            hashTable[hash] = name;
            console.log(`${name} has been added to the hash table with hash: ${hash}`);
            console.log("Updated Hash Table:", hashTable);
            displayMenu();
        });
    } else if (input === "2") {
        rl.question("Enter the hash of the customer to serve: ", (hash) => {
            hash = parseInt(hash);
            if (hashTable[hash]) {
                let servedCustomer = hashTable[hash];
                delete hashTable[hash];
                console.log(`Now serving: ${servedCustomer}`);
            } else {
                console.log("Invalid hash or customer not found.");
            }
            console.log("Updated Hash Table:", hashTable);
            displayMenu();
        });
    } else if (input === "3") {
        console.log("Exiting the queueing system.");
        rl.close();
    } else {
        console.log("Invalid choice. Please select a valid option.");
        displayMenu();
    }
});

// Start the program
displayMenu();
