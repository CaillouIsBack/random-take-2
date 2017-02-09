var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
   makeRect(0, 0, 200, 100, "navy", 1)
   makeImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/US_flag_48_stars.svg/220px-US_flag_48_stars.svg.png", 25, 45, 60, 30, 0.65)
 makeLine(27, 20, 27, 45, "red", 1) 
 makeLine(83, 20, 83, 45, "red", 1) 
 makeCircle(25, 70, 10, "blue", 1)
 makeCircle(25, 70, 7, "red", 1)
 makeCircle(80, 70, 10, "blue", 1)
 makeCircle(80, 70, 7, "red", 1)
 makeRect(8, 18, 20, 10, "white", 1)
 makeRect(82, 18, 20, 10, "white", 1)
 makeRect(82, 18, 20, 3, "blue", 1)
 makeRect(8, 18, 20, 3, "blue", 1)
 makeRect(82, 25, 20, 3, "red", 1)
 makeRect(8, 25, 20, 3, "red", 1)
 makeCircle(25, 70, 3, "white", 1)
 makeCircle(80, 70, 3, "white", 1)
makeText("Like this American Car? Looks pretty innocent to me", 5, 90, 5, "Pangolin", "red", 1)
var number = Math.random()
if(number<0.5){
    makeRect(5, 80, 115, 15, "orange", 0.4)
}
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeRect(0, 0, 200, 100, "crimson", 1)
    
 makeImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/US_flag_48_stars.svg/220px-US_flag_48_stars.svg.png", 65, 45, 60, 30, 1)
     makeLine(67, 20, 67, 45, "red", 1) 
 makeLine(123, 20, 123, 45, "red", 1) 
 makeCircle(65, 70, 10, "blue", 1)
 makeCircle(65, 70, 7, "red", 1)
 makeCircle(120, 70, 10, "blue", 1)
 makeCircle(120, 70, 7, "red", 1)
 makeRect(48, 18, 20, 10, "white", 1)
 makeRect(122, 18, 20, 10, "white", 1)
 makeRect(122, 18, 20, 3, "blue", 1)
 makeRect(48, 18, 20, 3, "blue", 1)
 makeRect(122, 25, 20, 3, "red", 1)
 makeRect(48, 25, 20, 3, "red", 1)
 makeCircle(65, 70, 3, "white", 1)
 makeCircle(120, 70, 3, "white", 1)
 makeText("Oh mai gud, its a bomb!", 50, 90, 5, "Pangolin", "gray", 1)
 makeCircle(100, 27, 15, "black", 1)
 makeEllipse(100, 15, 7, 2, "gray", 0.5)
 makeLine(100, 7, 100, 12, "tan", 1)
 makeLine(80, 10, 85, 15, "white", 1)
 makeLine(120, 10, 115, 15, "white", 1)
 var number = Math.random()
 if(number<0.5){
 makeRect(50, 80, 50, 15, "yellow", 0.35)
 }
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
makeRect(0, 0, 200, 100, "chocolate", 1)  

makeImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/US_flag_48_stars.svg/220px-US_flag_48_stars.svg.png", 95, 45, 60, 30, 0.2)
     makeLine(87, 10, 97, 35, "red", 1) 
 makeLine(143, 30, 133, 25, "red", 1) 
 makeCircle(85, 70, 10, "blue", 1)
 makeCircle(95, 60, 7, "red", 1)
 makeCircle(130, 50, 10, "blue", 1)
 makeCircle(150, 70, 7, "red", 1)
 makeRect(58, 28, 20, 10, "white", 1)
 makeRect(122, 38, 20, 10, "white", 1)
 makeRect(152, 18, 20, 3, "blue", 1)
 makeRect(78, 18, 20, 3, "blue", 1)
 makeRect(112, 5, 20, 3, "red", 1)
 makeRect(78, 25, 20, 3, "red", 1)
 makeCircle(95, 70, 3, "white", 1)
 makeCircle(150, 70, 3, "white", 1)
makeText("EXPLOSION", 90, 90, 5, "Sans-serif", "crimson", 1)
makeEllipse(100, 50, 50, 40, "orange", 0.35)
makeEllipse(110, 60, 60, 50, "yellow", 0.35)
var number = Math.random()
 if(number<0.5){
 makeRect(90, 80, 40, 15, "yellow", 0.35)
}}



// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var rando = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(rando<0.33){
        createFirstScene();}
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    else if(rando<0.67){
        createSecondScene();}
    
    // Else, call the function to create your third scene.
    
    else{
        createThirdScene();}

}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}