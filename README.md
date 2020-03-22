# Harry Potter IFD Milestone Project
Interactive Frontend Milestone Project - Harry Potter

As a big fan of Harry Potter, I wanted to create a website for fans that is fun.
On my website you can click on the HAT and you will be randomly sorted into one of the four houses Griffendor, Hufflepuff, Ravenclaw or Slytherin.
The background changes to the respective coat of arms of the house and the house information appears below the HAT.
All your house mates are listed and you can find out who is in Dumbledors Army or who in this house is a Deatheater.
In the bottom section you can choose a spell to find out what kind of spell it is and what it does.

### User Stories

1. The user needs a place to find basic information about the service provided - Homepage which provides info
2. The user needs to be able to let the HAT get a random house. -sorting a student into a house
3. The user needs to be able to see the house mates according to the random selected house.
4. The background should change colour according to the selected house.
5. The user needs to be able to find information about who is in Dumbledors Army.
6. The user needs to be able to find information about who is a Deatheater.
7. User would like to have information about spells.

### How does it work
The website mainly uses Javascript to provide interactivity for the user. The site uses Bootstrap and is responsive.
The information is queried from https://www.potterapi.com/ with fetch.


## UX
I designed the Mockup Idea in Balsamiq 'Harry_Potter_Mkup.bmpr'.

### Layout
- I used Bootstrap for the responsiv navigation.
- Different backgrounds to clearly indicate the house.
- I used sections to seperate topics.

## Features

- There is a Hat on the Landing Page which you can click and you get randomly sorted into a house.
- All the house iformation will be collected from the API ( https://www.potterapi.com/).
- Your housemates will be queried from the API.
- All Member of Dumbledors Army will be collected from the API.
- It shows all Deatheater from the same house if there are any.
- You can select a spell and it'll get the type and effect iformation from the API.


## Technologies used
- HTML, CSS, Javascript, Bootstrap, 
- The API I use is https://www.potterapi.com/

## Testing
- I tested the design with the Chrome developer tools for responsiveness. 

- I tested the Javascript code on https://jshint.com/ and sorted out the warnings. 
Additionally I checked my functions manually with console.log() to see if there are any mistakes or if I get the right solution.

- I tested the HTML on https://validator.w3.org/
- I tested the CSS on https://jigsaw.w3.org/css-validator/


### Jasmine testing

- I implemented Jasmine to do automated unit tests but unfortunately all my functions are fetch call to an API
and it is difficult to test fetch with Jasmin. It isn't possible to mock fetch and the Jasmine-Ajax is not working with fetch only with XMLHttpRequest.
So this is a project I will keep in mind for the future to find a solution.

## Deployment

I developed the site on Gidpot and pushed my code in different commits to Github.
The visit the website I use Github Pages https://2tracks.github.io/IFDMilestone-Project/

### Media
The images are from https://www.pngguru.com
they are under a MIT licens and free to use.

### Acknowledgement

A big thank you to Kristen Spencer who has made the https://www.potterapi.com/.
A thank you to my Mentor Gerard McBride and Tutor Anna for the help.
