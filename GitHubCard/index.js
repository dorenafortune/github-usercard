/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>

*/

axios.get('https://api.github.com/users/dorenafortune')
 .then (function(response){
  const something = document.querySelector(".cards")
  something.appendChild(gitCard(response))
  console.log(response);
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['CAM603', 'aalvinlin', 'TylerBiswell','derekdyer0309', 'amohler09',];

followersArray.forEach(element => {
  const users = 'https://api.github.com/users/' + element;
  const something = document.querySelector(".cards")
  axios.get(users)
  .then(response => {
    something.appendChild(gitCard(response))
    
  })


})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function gitCard(userProfile){
  const 
    newUserCard = document.createElement("div"),
    newUserImage = document.createElement("img"),
    userInfo = document.createElement("div"),
    usersName = document.createElement("h3"),
    usersUserName = document.createElement("p"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    followers = document.createElement("p"),
    following = document.createElement("p"), 
   bio = document.createElement("p");

//appending

newUserCard.appendChild(newUserImage);
newUserCard.appendChild(userInfo);
userInfo.appendChild(usersName);
userInfo.appendChild(usersUserName);
userInfo.appendChild(location);
userInfo.appendChild(profile);
userInfo.appendChild(followers);
userInfo.appendChild(following);
userInfo.appendChild(bio);

//classlist

newUserCard.classList.add("card");
userInfo.classList.add("card-info");
usersName.classList.add("name");
usersUserName.classList.add("username");

//textContent 
newUserImage.setAttribute("src", userProfile.data.avatar_url);
usersName.textContent = `Name: ${userProfile.data.name}`;
usersUserName.textContent = `Username: ${userProfile.data.login}`;
location.textContent = `Location: ${userProfile.data.location}`;
profile.innerHTML = `Github URL: ${userProfile.data.url}`;
followers.textContent = `Followers: ${userProfile.data.followers}`;
following.textContent = `Following: ${userProfile.data.following}`;
bio.textContent = userProfile.data.bio;

return newUserCard

}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
