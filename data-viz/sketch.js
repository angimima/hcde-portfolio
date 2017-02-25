/* Created by Angela Rosette-Tavares 
Program creates a scatterplot of average temperatures in select US cities arranged by latitude/longitude
dataset was obtained from University of Illinois College of Education webpage http://mste.illinois.edu/malcz/DATA/WEATHER/Temperatures.html
I had to figure out how to flip the N/S and E/W points so the graph represented somthing that looks like a map of US, not sure if it is correct math but it works
last edited on 2/25/2017
*/

var latitude = [31.2, 33.6, 34.3, 38.4, 40.7, 39.7, 26.3, 33.9, 43.7, 42.3, 39.8, 39, 30.8, 44.2, 42.7, 43.1, 45.9, 39.3, 
            47.1, 41.9, 35.1, 40.8, 35.9, 47.1, 39.2, 42.3, 48.1, 43.3, 41.2]; // array of latitude values
var longitude = [88.5, 112.5, 118.7, 123, 105.3, 77.5, 80.7, 85, 117.1, 88, 86.9, 86.5, 90.2, 70.5, 71.4, 83.9,
            93.9, 90.5, 112.4, 96.1, 106.7, 74.6, 81.5, 101, 85, 82.5, 122.5, 88.1, 104.9]; // array of longitude values
var city = ["Mobile AL", "Phoenix AZ", "Los Angeles CA", "San Francisco CA", "Denver CO", "Washington DC", "Miami FL", "Atlanta GA", 
        "Boise ID", "Chicago IL", "Indianapolis IN", "Louisville KY", "New Orleans LA", "Portland ME", "Boston MA", "Detroit MI",
        "Minneaplois MN", "St Louis MO", "Helena MT", "Omaha NE", "Albuquerque NM", "New York NY", "Chalotte NC", "Bismark ND",
        "Cincinatti OH", "Cleveland OH", "Seattle WA", "Milwaukee WI", "Cheyenne WY"]; // array of cities
var temp = [44, 35, 47, 42, 15, 30, 58, 37, 22, 19, 21, 27, 45, 12, 23, 21, 2, 24, 8, 13, 24, 27, 34, 0, 26, 21, 33, 13, 14]; // array of temperatures


function setup() {
  createCanvas(windowWidth, windowHeight); // create a large canvas
  fill(160); // grey color
}

function draw() {
  background(255); // draws the background
  drawGraph(); // draws the x and y axis
  textSize(20); // graph title font size
  text("Average January Temperatures for US Cities", 10, windowHeight - 10); // graph title
  makeCities(); // make the point for each city
  displayCity(); // displays text for the city and temp for each point
}

// draws graph with x and y axis and labels
function drawGraph() {
  fill(160); // grey color
  line(50, 50, 50, windowHeight - 100); // x-axis
  line(50, windowHeight - 100, windowWidth - 25, windowHeight - 100); // y-axis
  textSize(15); // font size
  text("latitude", 10, 20); // label for x-axis
  text("longitude", windowWidth / 2, windowHeight - 50); // label for y-axis
  textSize(12); // latitude marks
  text("50 -", 25, 60);
  text("25 -", 25, windowHeight - 100);
  text("125", 80, windowHeight - 85);
  text("70", windowWidth - 70, windowHeight - 85);
}

//  plots points for city latitidude and longitude pair
function makeCities() {
  for (i = 0; i < longitude.length; i++) { // loops through all the latitudes
    plotPoint(longitude[i], latitude[i]); // and draws the points based on latitude, longitude and temperature
  }
}

// creates the circle for each city and fills it with a color based on temperature
function plotPoint(long, lat) {
  var x = translateLong(long); // converts longitude into an x coordinate
  var y = translateLat(lat); // converts latitude into a y coordinate
// determines the fill color by temperature
  if (temp[i] >= 50) { 
    fill(244,78,66);  // red
  } else if (temp[i] >= 40) {
      fill(244, 173, 66); // orange
  } else if (temp[i] >= 30) {
      fill(244, 244, 66); // yellow
  } else if (temp[i] >= 20) {
      fill(128, 244, 66); // green
  }  else if (temp[i] >= 10) {
      fill(66, 244, 226); // light blue
  }  else {
      fill(66, 134, 244); // blue
  }
  ellipse(x, y, 10, 10); // draws the circle for each
}

// converts latititude into a screen y coordinate that is spread across canvas
function translateLat(lat) {
  return (1-(lat - 25) / 35) * (windowHeight - 75) - 100; // difference between the current latitiude minus number close to the min latitiude divided by how much spacing I want times the graph height, then inverted because the y is top left and I want cities north to south 
}

// converts longitude into a screen x coordinate that is spread across canvas
function translateLong(long) {
  return (1-(long - 70) / 60) * (windowWidth - 70); // difference between the current longitude minus number close to min longitude divided by how much spacing I want times the graph width, then inverted because I want the x to go from west to east
}

// displays the city name based on mouse hovering over a coordinate
function displayCity() {
  for (i = 0; i < city.length; i++) { // loops through each city
    var x = translateLong(longitude[i]);
    var y = translateLat(latitude[i]); 
  if (mouseX >= (x - 5) && mouseX <= x + 5) { // displays city name and temperature when mouse is over center point of ellipse
    if (mouseY >= (y - 5) && mouseY <= y + 5) {
      fill(0); // grey color
      textSize(10);
      text(city[i], x + 15, y); 
      text(temp[i] + " degrees", x + 15, y + 15);
      }
    } 
  }
}
