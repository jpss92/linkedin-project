// Store Data
let username = "Justin Swallow";
let profilePicture = "./assets/images/user.png";
let jobTitle = "Software Engineer";

//DOM Manipulation
// 1. Target the element
// 2. Store the element in some temp variable
// 3. Add / remove / update the element

let usernameElement = document.querySelectorAll(".data-username");
//for (let i = 0; i < usernameElement.length; i++) {
//    usernameElements[i].innerHTML = username;

    for (const element of usernameElement) {
        element.innerHTML = username;
    }

let profilePictureElement = document.querySelector(".data-profile-picture");
profilePictureElement.src = profilePicture;

let jobTitleElement = document.querySelector(".data-jobtitle");
jobTitleElement.innerHTML = jobTitle;

// Create Post
// 1. Target the element
// 2. Store the element in some temp variable
// 3. Add / remove / update the element

// Create element 
// push / append in the container


