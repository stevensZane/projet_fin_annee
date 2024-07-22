const menuBar = document.getElementById("menu-bar");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = document.querySelector(".mobile-nav-items");

const closeBar = document.getElementById("close-btn");

menuBar.addEventListener("click", () => {
 
  if (mobileNavItems.style.display == "") {
    mobileNavItems.style.display = "flex";
  }
})

  closeBar.addEventListener("click", () => {

  if (mobileNavItems.style.display == "flex") {
    mobileNavItems.style.display = "";
  }
})

function showLoginForm() {
  document.getElementById('LoginModal').style.display = 'block';
}

function closeLoginForm() {
  document.getElementById('LoginModal').style.display = 'none';
}

// Array of users (for demo purposes; replace with your actual user data)
const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' },
  { username: 'keita', password: 'keita123', role: 'admin' },
];

// Function to handle login submission
function loginUser(event) {
  event.preventDefault();

  // Get form values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log({ username, password })

  // Find user in the array
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Store user info in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Optionally, you can redirect or perform other actions after successful login
    console.log('Logged in as:', user.username, 'Role:', user.role);


    alert("Login Successful")

    checkUserRoleAndPerformActions();

    // Close the login modal
    closeLoginForm();

    // Reset the form
    document.getElementById('LoginForm').reset();

  } else {
    alert('Invalid username or password');
  }
}

// Event listener for login form submission
document.getElementById('LoginForm').addEventListener('submit', loginUser);

function logoutUser() {
  localStorage.removeItem('currentUser');
  checkUserRoleAndPerformActions()
}

// Function to check user role and perform actions
function checkUserRoleAndPerformActions() {
  // Retrieve current user from localStorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {

    document.getElementById("logInfo").style.display = 'block'

    document.getElementById('username1').innerHTML = currentUser.username;


    // Check user role
    if (currentUser.role === 'admin') {
      document.getElementById('addBTN').style.display = 'block';
    } else if (currentUser.role === 'user') {
      document.getElementById('addBTN').style.display = 'none';
    } else {
      document.getElementById('addBTN').style.display = 'none';
    }
  } else {
    document.getElementById('addBTN').style.display = 'none';
    document.getElementById("logInfo").style.display = 'none'
  }
}

checkUserRoleAndPerformActions();

