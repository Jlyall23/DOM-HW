let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
let mainTitle = this.getElementById("main-title")
mainTitle.textContent = "Life of Domminic Toretto"

  // Part 2
let body = document.querySelector("body")
body.style.backgroundColor = "gray"

  // Part 3
//Select DOM's Favorite Things list and remove the last list item.
let domsFav = 
document.getElementById("favorite-things")
let lastFav=  domsFav.lastElementChild
domsFav.removeChild(lastFav)
  // Part 4
//Select all .special-titleclass elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements
let specialTitle = document.querySelectorAll(".special-title")
specialTitle.forEach(title=>{
title.style.fontSize = "2rem"})
  // Part 5
//Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
let pastRaces = document.getElementById("past-races")
let chicago = pastRaces.children[3]
pastRaces.removeChild(chicago)
  // Part 6
 // Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
let newRace = document.createElement("li")
let textNode = 
document.createTextNode("Charlotte")
newRace.appendChild(textNode)
pastRaces.appendChild(newRace)

 // Part 7
//Create a new .blog-post corresponding to the new city added in Part 6. 
//You will have to create a new <div>with class of .blog-post, a new <h2>with text, 
// a new <p>with some text. Think about what order you want to create the elements,
// and what order you want to append them in.
let mainDiv= document.querySelector(".main")


let newBlogPost = document.createElement("div")
newBlogPost.classList.add("blog-post")

let newH2 = document.createElement("h1")
newH2.textContent = "Charlotte"

let newP = document.createElement("p")
newP.textContent= "I RACED JORDAN IN HIS MUSTANG AND HE BEAT ME!"

newBlogPost.classList.toggle("purple")
    
mainDiv.insertBefore(newBlogPost , document.querySelector(".blog-post"));
newBlogPost.appendChild(newH2)
newBlogPost.appendChild(newP)
mainDiv.appendChild(newBlogPost)
  // Part 8
//When you reload the page, the script.jsfile 
//loads a random DOM quote. Let's play with the included function:
//const randomQuote = function() {
    //document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

//Query select the #quote-titleID element and add a click event handler. That event handler 
//should use the function randomQuote whenever #quote-titleis clicked.

let quoteTitle = document.querySelector("#quote-title")
quoteTitle.addEventListener("click", randomQuote)
    
// Part 9
//Select all .blog-post class elements. Iterate through the list of .blog-postclass elements
// and apply two event handlers to each node. The first event handler should be listening 
//for mouseoutevents while the second handler should be listening for mouseenterevents.

let blogList = document.querySelectorAll(".blog-post")
blogList.forEach(function(node){
    node.addEventListener("mouseout", function(){
        //he mouseout handler should toggle the class .purple
      newBlogPost.classList.toggle("purple")
    })
node.addEventListener("mouseenter", function(){
//The mouseenterhandler should toggle the class .red
newBlogPost.classList.toggle("red")
})
})







});