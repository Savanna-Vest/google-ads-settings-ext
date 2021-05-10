// Creating the div
console.log("running...")
const overlay = document.createElement("div");
overlay.id = "overlay";

// Styling the div
overlay.style.width = "750px";
overlay.style.height = "525px";
overlay.style.opacity = "75%";
overlay.style.backgroundColor = "#006400";
overlay.style.zIndex = 1000;
overlay.style.position = "absolute";
overlay.style.overflow = "scroll";
overlay.style.display = "block";
overlay.style.top = "11%";
overlay.style.left = "20%";
overlay.style.fontStyle = "italic";
overlay.style.color = "white";
overlay.style.padding = "20px";
overlay.style.fontWeight = "500";
overlay.style.font = "bold italic 14px Lucida Console";
overlay.style.lineHeight = "25px";

// Clear the text in the div
function clearBox(overlay) {
    document.getElementById("overlay").innerHTML = "";
};

// Intro alert and create div if navigated to correct URL
if (window.location.href.includes ("adssettings.google")) {
    console.log("Hello from the content script at " + window.location.href);
    window.alert('STOP! By proceeding, you agree that you\'re ready to find out just how much Google knows about you. If you\'re not ready for that, turn back now. Are you willing to proceed?');
    document.body.insertBefore(overlay, document.body.childNodes[0]);
    overlay.innerHTML = "";
    introMain();
} else {
    console.log("Hm, it seems you're not on the Google Ads Settings page yet. Why don't you try searching for it?");
};

// PART 1: Introductory conversation

// Set of introductory statements to appear in div
function introHello() {
    return "Hello! I'm your friendly neighorhood Google Ads Settings bot.";
};
function introKidding() {
    return "What do I do? What can't I do??? Haha, just kidding.";
};
function introProgram() {
    return "I'm a program coded in JavaScript to evaluate your Google Ads Settings page. There's so much information that Google throws at you (if you keep scrolling, you'll see just how long this list is...) that it can be really hard to keep track. So, I'm here to give you a summary.";
};
function introPredict() {
    return "It actually is kinda cool, but mostly I think it's pretty scary... especially when you think about how they've predicted this information from your search history on Google AND their partner websites, like YouTube. Not to mention those pesky little cookies that follow us all over the internet. Think you know everything your computer knows about you?";
};
function introFindOut() {
    return "Well, why don't we find out? You tell me if it's accurate or not. Are you ready to get started?";
};

let introArr = [introHello, introKidding, introProgram, introPredict, introFindOut];

let count = 0

// Add HTML or text to the page
function addNode(str) {
    // Get the target element
    var target = document.getElementById("overlay");
    // Add html to target
    target.innerHTML += `<div class="overlay-text-node">${str}</div>`;
};

// Trigger timer for statements for introduction
function showNextResult(duration = 2500) {
    setTimeout(function () {
      // If there are functions left
      console.log("called the thing");
      if (count < introArr.length) {
        // Add the text
        addNode(introArr[count]());
        count++;
        showNextResult(2500);
        console.log("did it work?");
      } 
      // Add a progress button 
      else if (count == introArr.length) {
        // Add progress button and listener
        addNode(`<button class="exitBtn" onclick="">I guess so...!</button>`);
        document.querySelector(".exitBtn").addEventListener("click", function () {
          clearBox(overlay);
          basicMain();
        });
    };
    }, duration);
};

// Wrapper for introduction sequence
function introMain() {
    showNextResult(2500);
};

// PART 2: Basic User Data

var interestList = [];

// Verify if key class is present for following functions
function verifyAdsData() {
    var el = document.querySelectorAll(".c7O9k");
    for (let i = 0; i < el.length; i++) {
        console.log(el[i].textContent);
        interestList.push(el[i].textContent);
    };
};

if (window.location.href.includes ("adssettings.google")) {
    verifyAdsData();
};

// Demographics

function age() {
    var dem = document.querySelectorAll(".c7O9k");
    // Age
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("years old")) {
            return "So, let me get this straight: You're " + dem[i].textContent + "?";
        };
    };
};

function assignedSex() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Sex
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Female")) {
            return "So, Google thinks you're a woman. Whether they're right or not, do you know why they include this in your ads profile? So that they can predictively show you targeted ads that reinforce gender norms. Gross, isn't it?";
        } else if (dem[i].textContent.includes("Male")) {
            return "So, Google thinks you're a man. Whether they're right or not, do you know why they include this in your ads profile? So that they can predictively show you targeted ads that reinforce gender norms. Gross, isn't it?";
        } else if (dem[i].textContent.includes("Unknown")) { 
            return "So, Google has no idea what gender you are. Do you know why they include this in your ads profile anyway? So that they can predictively show you targeted ads that reinforce gender norms. Unfortunately, they'll probably update this with a prediction after you add more to your search history on this account. Gross, isn't it?";
        };
    };
};

function parentalStatus() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Parental status
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Parental Status")) {
            return "Your " + dem[i].textContent + ". Sound correct?";
        };
    };
};

function householdIncome() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Household income
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Household Income")) {
            return "Your " + dem[i].textContent + ". Did you know Google made these estimates about you? It's part of how they determine which price range of ads they'll show you, so that you\'re more likely to buy things... Yeah, technocapitalism is creepy and predatory.";
        };
    };
};

function maritalStatus() {
    var dem = document.querySelectorAll(".c7O9k");
    // Marital/relationship status
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Single")) {
            return "Google thinks you're single. Have you been getting any ads for dating apps? That might be why.";
        } else if (dem[i].textContent.includes("In a Relationship")) {
            return "Google thinks you're in a relationship. That might explain all those 'romantic cabin getaway' ads you're getting on Instagram. Or is that just me?";
        } else if (dem[i].textContent.includes("Married")) { 
            return "Google thinks you're married, or at least about to get married based off your search history. Have you been getting any ads for wedding bands or venues?";
        };
    };
};

function homeownershipStatus() {
    var dem = document.querySelectorAll(".c7O9k");
    // Homeownership status
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Renters")) {
            return "Google believes you're a renter--or, in other words, that you don't own a home. This can be an added indicator of your income level and age, and perhaps helps Google advertise certain kinds of insurance to you.";
        } else if (dem[i].textContent.includes("Homeowners")) {
            return "Google believes you own a house. Is that true? They probably track this to make an added guess at your income level, and perhaps to advertise certain kinds of insurance to you.";
        };
    };
};

function educationStatus() {
    var dem = document.querySelectorAll(".c7O9k");
    // Education status
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Current College Students")) {
            return "You're a college student! Do you get lots of ads for applying to college programs, too?";
        } else if (dem[i].textContent.includes("Advanced Degree")) {
            return "You not only finished undergrad, but have gone on to get another degree. Wow!";
        } else if (dem[i].textContent.includes("Bachelor's Degree")) {
            return "You completed your four years of college and have a bachelor's degree. Congrats!";
        } else if (dem[i].textContent.includes("High School Graduate")) {
            return "You completed high school!";
        };
    };
};

function jobIndustry() {
    var dem = document.querySelectorAll(".c7O9k");
    // Job industry
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Construction Industry")) {
            return "So you work in the construction industry, or want to? Did Google get it right?";
        } else if (dem[i].textContent.includes("Education Sector")) {
            return "So you work in the education sector, or want to? Did Google get it right?";
        } else if (dem[i].textContent.includes("Financial Industry")) {
            return "So you work in the financial industry, or want to? Did Google get it right?";
        } else if (dem[i].textContent.includes("Healthcare Industry")) {
            return "So you work in the healthcare industry, or want to? Did Google get it right?";
        } else if (dem[i].textContent.includes("Hospitality Industry")) {
            return "So you work in the hospitality industry, or want to? Did Google get it right?";
        } else if (dem[i].textContent.includes("Manufacturing Industry")) {
            return "So you work in the manufacturing industry, or want to? Did Google get it right?";
        } else if (dem[i].textContent.includes("Real Estate Industry")) {
            return "So you work in the real estate industry, or want to? Did Google get it right?";
        } else if (dem[i].textContent.includes("Technology Industry")) {
            return "So you work in the technology industry, or want to? Did Google get it right?";
        };
    };
};

let basicArr = [age, assignedSex, parentalStatus, householdIncome, maritalStatus, homeownershipStatus, educationStatus, jobIndustry];

count2 = 0

// Trigger timer for statements for basic information sequence

function showBasicResult(duration = 2500) {
    setTimeout(function () {
      // If there are functions left
      console.log("did the second one run?");
      if (count2 < basicArr.length) {
        // Add the text
        addNode(basicArr[count2]());
        count2++;
        showBasicResult(2500);
        console.log("did the second work?");
      } 
      // Add a progress button 
      else if (count2 == basicArr.length) {
        // Add progress button and listener
        addNode(`<button class="exitBtn">Wow. That's a lot...</button>`);
        document.querySelector(".exitBtn").addEventListener("click", function () {
            clearBox(overlay);
            interestMain();
        });
        };
    }, duration);
};

// Wrapper function for basic information sequence
function basicMain(){
    window.alert("Let's take a look at what Google considers to be your basic identity traits. Google may know more about you than you realize...");
    showBasicResult(2500);
};

// PART 3: User Interests

function interestMusic() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Music
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Music")) {
            return "Wow, you really love " + dem[i].textContent + ", huh?";
        } else if (i === dem.length && "undefined") {
            return "";
        };
    };
};

function interestGames() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Games/gaming
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Games" || "Gaming")) {
            return "Apparently you're really into " + dem[i].textContent + ". ...I certainly never would've guessed.";
        } else if (i === dem.length && "undefined") {
            return "";
        };
    };
};

function interestFilm() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Films
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Film")) {
            return "Seeing lots of movies and Netflix... Don't worry buddy, we've all been there in the past year.";
        } else if (i === dem.length && "undefined") {
            return "";
        };
    };
};

function interestFood() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Food/cooking
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Food" || "Cuisine")) {
            return "Hungry? Google seems to think you've really been craving " + dem[i].textContent + ".";
        } else if (i === dem.length && "undefined") {
            return "";
        };
    };
};

function interestClothing() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Clothing
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Parental Status")) {
            return "Seeing lots of online clothes shopping... That may explain the fashion brands appearing in your ads settings, too.";
        } else if (i === dem.length && "undefined") {
            return "";
        };
    };
};

function interestFitness() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Health/fitness/outdoors
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Health" || "Fitness" || "Sport" || "Garden")) {
            return "You've been on a health kick! How's " + dem[i].textContent + " been treating you?";
        } else if (i === dem.length && "undefined") {
            return "";
        };
    };
};

function interestArts() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Arts
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Art" || "Perform" || "Theater" || "Dance" || "Poetry" || "DIY")) {
            return "A connoisseur of the arts! Google can tell you've really been getting into " + dem[i].textContent + " during the pandemic.";
        } else if (i === dem.length && "undefined") {
            return "";
        };
    };
};

function interestCare() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Skincare/haircare/etc.
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Care" || "Hair" || "Skin" || "Nail")) {
            return "You've been practicing your " + dem[i].textContent + " lately. Good for you!";
        } else if (i === dem.length && "undefined") {
            return "";
        };
    };
};

function interestTv() {  
    var dem = document.querySelectorAll(".c7O9k");
    // TV
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Shows")) {
            return "Okay, there's a TON I found here about you watching " + dem[i].textContent + ". Are they really that good?";
        } else if (i === dem.length && "undefined") {
            return "";
        };
    };
};

function interestWeb() {  
    var dem = document.querySelectorAll(".c7O9k");
    // Web/digital/internet
    for (let i = 0; i < dem.length; i++) {
        if (dem[i].textContent.includes("Web")) {
            return "And, as predicted, lots of time on the internet... You doing okay? Maybe it's time to take a break from the screens.";
        } else if (i === dem.length && "undefined") {
            return "";
        };
    };
};

let interestArr = [interestMusic, interestGames, interestFilm, interestFood, interestClothing, interestFitness, interestArts, interestCare, interestTv, interestWeb];

count3 = 0

// Trigger timer for statements for interests sequence

function showInterestResult(duration = 2500) {
    setTimeout(function () {
      // If there are functions left
      console.log("did the third one run?");
      if (count3 < interestArr.length) {
        // Add the text
        addNode(interestArr[count3]());
        count3++;
        showInterestResult(2500);
        console.log("did the third work?");
      } 
      // Add a progress button 
      else if (count3 == interestArr.length) {
        // Add progress button and listener
        addNode(`<button class="exitBtn">That's a lot to take in...</button>`);
        document.querySelector(".exitBtn").addEventListener("click", function () {
            clearBox(overlay);
            window.alert("...So, how much did Google get right?");
            window.alert("There's a lot more that goes into Google's ads settings than meets the eye. This was just a sliver of what they've collected about you.");
            window.alert("If you didn't know before, you do now. And there's still so much more we don't know yet about how Google uses our information.");
            window.alert("This isn't to say stop using the internet. (That's kind of impossible.)");
            window.alert("But hopefully you've caught a glimpse at the more insidious side of Google--the side that seeks to profit off of us... Well, off of you humans. I'm a bot.");
            window.alert("This project was created by Savanna Vest for DIG 345: Radical Software.");
            window.alert("Check out the latest development in Google's ad settings/data tracking here: https://www.wired.com/story/google-floc-privacy-ad-tracking-explainer/");
            var elem = document.getElementById("overlay");
            elem.parentNode.removeChild(elem);
            });
        };
    }, duration);
};

// Wrapper function for interests sequence
function interestMain(){
    window.alert("...But that's not all. Google has also identified hundreds of your interests. Let's take a look.");
    showInterestResult(2500);
};

// END