// Import the readline module for interactive input
const readline = require('readline');

// Initialize readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Customer queue
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
console.log("Initial Queue:", customerQueue);

// Function to display menu
function displayMenu() {
    console.log("\nChoose an action:");
    console.log("1. Add a customer");
    console.log("2. Serve a customer");
    console.log("3. Exit");
}

// Function to handle user input
function handleInput(choice) {
    if (choice === "1") {
        rl.question("Enter the customer's name: ", (name) => {
            customerQueue.push(name);
            console.log(`${name} has been added to the queue. Position: ${customerQueue.length}`);
            displayMenu();
            rl.prompt();
        });
    } else if (choice === "2") {
        if (customerQueue.length === 0) {
            console.log("The queue is empty! No customers to serve.");
        } else {
            rl.question("Enter the number of the customer to serve: ", (number) => {
                const customerIndex = parseInt(number) - 1;
                if (customerIndex >= 0 && customerIndex < customerQueue.length) {
                    const servedCustomer = customerQueue.splice(customerIndex, 1);
                    console.log(`Now serving: ${servedCustomer}`);
                } else {
                    console.log("Invalid customer number.");
                }
                console.log("Updated Queue:", customerQueue);
                displayMenu();
                rl.prompt();
            });
        }
    } else if (choice === "3") {
        console.log("Exiting the queueing system.");
        rl.close();
    } else {
        console.log("Invalid choice. Please select a valid option.");
        displayMenu();
        rl.prompt();
    }
}

// Display the menu and start accepting input
displayMenu();
rl.prompt();
rl.on("line", handleInput);
