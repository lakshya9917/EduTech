function signup(){
    console.log('working');

    var email = document.getElementById('email').value;
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var pass = document.getElementById('password').value;

    var user = {
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: pass
    }

    var json = JSON.stringify(user);
    localStorage.setItem(email, json); // Save user data with email as key
    console.log('user added');
}


function loginFunction() {
    
    console.log('Login function called');

    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    var user = localStorage.getItem(email); // Fetch user from localStorage

    if (!user) {
        alert("User not found!");
        return;
    }

    var data = JSON.parse(user);

    if (email === data.email && pass === data.password) {
        localStorage.setItem("currentUser", email); 
        window.location.href = "home.html";
        console.log('Successfully logged in');
    } else {
        alert("Invalid credentials");
    }
}
