//defined variables
let userRole = "admin";
let accessLevel;

// if...else block by assigning different roles

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Acess Level:", accessLevel);

// Defining Variables and user Nested if...else for LoggedIn and userMessage
// defined variables

let isLoggedIn = true;
let userMessage;

// Nested if...else for isLoggedIn and userMessage

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!"
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

// Defining variables and switch statement for userType and userCategory
// Defined Variables

let userType = "subscriber";
let userCategory;

// Switch statement for userType and userCategory

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unkown";
}

console.log("User Category", userCategory);

// Ternary operator for isAuthenticated and authenticationStatus
//Defined Variable

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);