// Initialize the page control variable
var page = 1

// Initialize canvas width and height
var canv_w = 960
var canv_h = 540

// Image var width and height
var home1_w = 40
var home1_h = 40
var home1_x = 506
var home1_y = 200
var home2_w = 70
var home2_h = 70
var home2_x = parseInt((960 - home2_w)/2)
var home2_y = 300
var uncle_greg_icon_w = 80
var uncle_greg_icon_h = 100
var uncle_greg_icon_x = 20
var uncle_greg_icon_y = 20
var dialogue1_icon_w = 300
var dialogue1_icon_h = 170
var dialogue1_icon_x = 40
var dialogue1_icon_y = 120
var dialogue1_start = false
var dialogue2_icon_w = 300
var dialogue2_icon_h = 170
var dialogue2_icon_x = 620
var dialogue2_icon_y = 240
var dialogue2_start = false
var dialogue3_icon_w = 300
var dialogue3_icon_h = 170
var dialogue3_icon_x = 40
var dialogue3_icon_y = 360
var dialogue3_start = false
var page3_tonextpage = false
var apple_icon_offsetX
var apple_icon_offsetY
var apple_icon_w = 130
var apple_icon_h = 120
var apple_icon_x = 385
var apple_icon_y = 190
var apple_icon_moving = false
var apple_out_center = false
var orange_icon_offsetX
var orange_icon_offsetY
var orange_icon_w = 139
var orange_icon_h = 120
var orange_icon_x = 420
var orange_icon_y = 180
var orange_icon_moving = false
var orange_out_center = false
var banana_icon_offsetX
var banana_icon_offsetY
var banana_icon_w = 145
var banana_icon_h = 100
var banana_icon_x = 440
var banana_icon_y = 240
var banana_icon_moving = false
var banana_out_center = false
var pear_icon_offsetX
var pear_icon_offsetY
var pear_icon_w = 120
var pear_icon_h = 120
var pear_icon_x = 470
var pear_icon_y = 190
var pear_icon_moving = false
var pear_out_center = false
var box_icon_w = 220
var box_icon_h = 200
var box_icon_x = parseInt((960 - box_icon_w)/2)
var box_icon_y = 220
var center_rect_w = 250
var center_rect_h = 190
var center_rect_x = parseInt((960- center_rect_w)/2) 
var center_rect_y = parseInt((540- center_rect_h)/2) 

// Preload function
function preload() {
  // IMAGES PRELOAD
  page1_image = loadImage('../assets/page1.png')
  page2_image = loadImage('../assets/page2.png')
  page3_image = loadImage('../assets/page3.png')
  page4_image = loadImage('../assets/page4.png')
  page5_image = loadImage('../assets/page5.png')
  page6_image = loadImage('../assets/page6.png')
  page7_image = loadImage('../assets/page7.png')

  house_icon = loadImage('../assets/house_icon.png')
  apple_icon = loadImage('../assets/apple_icon.png')
  orange_icon = loadImage('../assets/orange_icon.png')
  banana_icon = loadImage('../assets/banana_icon.png')
  pear_icon = loadImage('../assets/pear_icon.png')
  box_icon = loadImage('../assets/emptybox_icon.png')
  uncle_greg_icon = loadImage('../assets/uncle_greg_icon.png')
  dialogue1_icon = loadImage('../assets/dialogue1_icon.png')
  dialogue2_icon = loadImage('../assets/dialogue2_icon.png')
  dialogue3_icon = loadImage('../assets/dialogue3_icon.png')
  // // AUDIO PRELOAD
  page3 = loadSound('../assets/audio/page3.m4a')
  page5 = loadSound('../assets/audio/page5.m4a')
  page6 = loadSound('../assets/audio/page6.m4a')
}

function setup() {
  // Initialize canvas
  var canv = createCanvas(canv_w, canv_h);
  // make element with id canvas-container the parent of the created canvas
  canv.parent("canvas-container");
}

function draw() {
  if (page === 1) {
    background(page1_image)
    // Check if mouse hover over the icon -> change color
    if ((mouseX >= home1_x) && (mouseX <= home1_x + home1_h) && (mouseY > home1_y) && (mouseY < home1_y + home1_w)) {
      tint(255, 190, 0);
      image(house_icon, home1_x, home1_y, home1_w, home1_h)
      noTint()
    } else {
      image(house_icon, home1_x, home1_y, home1_w, home1_h)
    }
  } 
  else if (page ===2){
    background(page2_image)
    if ((mouseX >= home2_x) && (mouseX <= home2_x + home2_h) && (mouseY > home2_y) && (mouseY < home2_y + home2_w)) {
      tint(160, 0, 0);
      image(house_icon, home2_x, home2_y, home2_w, home2_h)
      noTint()
    } else {
      image(house_icon, home2_x, home2_y, home2_w, home2_h)
    }
  }
  else if (page === 3){
    background('#9cbfe9')
    image(uncle_greg_icon, uncle_greg_icon_x, uncle_greg_icon_y, uncle_greg_icon_w, uncle_greg_icon_h)
    if(page3_tonextpage){
      setTimeout(function(){
        dialogue1_start = true
      },4450)
      setTimeout(function(){
        dialogue2_start = true
      },5650)
      setTimeout(function(){
        dialogue3_start = true
      },7250)
    }
    if(dialogue1_start){
      image(dialogue1_icon, dialogue1_icon_x, dialogue1_icon_y, dialogue1_icon_w, dialogue1_icon_h)
    }
    if(dialogue2_start){
      image(dialogue2_icon, dialogue2_icon_x, dialogue2_icon_y, dialogue2_icon_w, dialogue2_icon_h)
    }
    if(dialogue3_start){
      image(dialogue3_icon, dialogue3_icon_x, dialogue3_icon_y, dialogue3_icon_w, dialogue3_icon_h)
    }    
  }
  else if (page === 4) {
    background(page4_image)
    page3.stop()
  }
  else if (page === 5) {
    background(page5_image)
  }
  else if (page === 6) {
    background(page6_image)
    page5.stop()
    // Check if mouse hover over the icon -> change color
    if ((mouseX >= pear_icon_x) && (mouseX <= pear_icon_x + pear_icon_h) && (mouseY > pear_icon_y) && (mouseY < pear_icon_y + pear_icon_w) && !pear_icon_moving) {
      tint(255, 230, 0);
      image(pear_icon, pear_icon_x, pear_icon_y, pear_icon_w, pear_icon_h)
      noTint()
    } else {
      image(pear_icon, pear_icon_x, pear_icon_y, pear_icon_w, pear_icon_h)
    }
    if ((mouseX >= orange_icon_x) && (mouseX <= orange_icon_x + orange_icon_h) && (mouseY > orange_icon_y) && (mouseY < orange_icon_y + orange_icon_w) && !orange_icon_moving) {
      tint(200, 80, 80);
      image(orange_icon, orange_icon_x, orange_icon_y, orange_icon_w, orange_icon_h)
      noTint()
    } else {
      image(orange_icon, orange_icon_x, orange_icon_y, orange_icon_w, orange_icon_h)
    }
    if ((mouseX >= apple_icon_x) && (mouseX <= apple_icon_x + apple_icon_h) && (mouseY > apple_icon_y) && (mouseY < apple_icon_y + apple_icon_w) && !apple_icon_moving) {
      tint(160, 0, 0);
      image(apple_icon, apple_icon_x, apple_icon_y, apple_icon_w, apple_icon_h)
      noTint()
    } else {
      image(apple_icon, apple_icon_x, apple_icon_y, apple_icon_w, apple_icon_h)
    }
    if ((mouseX >= banana_icon_x) && (mouseX <= banana_icon_x + banana_icon_h) && (mouseY > banana_icon_y) && (mouseY < banana_icon_y + banana_icon_w) && !banana_icon_moving) {
      tint(255, 230, 0);
      image(banana_icon, banana_icon_x, banana_icon_y, banana_icon_w, banana_icon_h)
      noTint()
    } else {
      image(banana_icon, banana_icon_x, banana_icon_y, banana_icon_w, banana_icon_h)
    }
    image(box_icon, box_icon_x, box_icon_y, box_icon_w, box_icon_h)
  }
  else if (page === 7) {
    background(page7_image)
  }
}

function mousePressed() {
  // Iterate through pages with mousepressed conditions
  if (page === 1) {
    if ((mouseX >= home1_x) && (mouseX <= home1_x + home1_h) && (mouseY > home1_y) && (mouseY < home1_y + home1_w)) {
      page = 2
    }
  }
   else if (page === 2) {
    if ((mouseX >= home2_x) && (mouseX <= home2_x + home2_h) && (mouseY > home2_y) && (mouseY < home2_y + home2_w)) {
      page = 3
    }
  } else if (page === 3) {
    // Check if mouse position is in the position of uncle greg icon
    if ((mouseX >= uncle_greg_icon_x) && (mouseX <= uncle_greg_icon_x + uncle_greg_icon_h) && (mouseY > uncle_greg_icon_y) && (mouseY < uncle_greg_icon_y + uncle_greg_icon_w)&&!page3_tonextpage) {
      page3_tonextpage = true
      page3.play()
    }
    else if(page3_tonextpage){
      page = 4
    }
  }
  else if (page === 4) {
    page5.play()
    page = 5
  } 
  else if (page === 5) {
    page6.play()
    page = 6
  }
   else if (page === 6){
    // Check if mouse icon is in the position of the fruit icons, if users press it, change position of the icon and change the moving condition to false -> no more moving
    if ((mouseX >= apple_icon_x) && (mouseX <= apple_icon_x + apple_icon_h) && (mouseY > apple_icon_y) && (mouseY < apple_icon_y + apple_icon_w) && !apple_icon_moving) {
      apple_icon_offsetX = apple_icon_x - mouseX
      apple_icon_offsetY = apple_icon_y - mouseY
      apple_icon_moving = true
    }
    else if ((mouseX >= orange_icon_x) && (mouseX <= orange_icon_x + orange_icon_h) && (mouseY > orange_icon_y) && (mouseY < orange_icon_y + orange_icon_w) && !orange_icon_moving) {
      orange_icon_offsetX = orange_icon_x - mouseX
      orange_icon_offsetY = orange_icon_y - mouseY
      orange_icon_moving = true
    }
    else if ((mouseX >= banana_icon_x) && (mouseX <= banana_icon_x + banana_icon_h) && (mouseY > banana_icon_y) && (mouseY < banana_icon_y + banana_icon_w) && !banana_icon_moving) {
      banana_icon_offsetX = banana_icon_x - mouseX
      banana_icon_offsetY = banana_icon_y - mouseY
      banana_icon_moving = true
    }
    else if ((mouseX >= pear_icon_x) && (mouseX <= pear_icon_x + pear_icon_h) && (mouseY > pear_icon_y) && (mouseY < pear_icon_y + pear_icon_w) && !pear_icon_moving) {
      pear_icon_offsetX = pear_icon_x - mouseX
      pear_icon_offsetY = pear_icon_y - mouseY
      pear_icon_moving = true
    }
    else if(fruit_distributed()){
      page=7
    }
  }
}

// Function to drag objects around
function mouseDragged(){
  if(page === 6){
    if(apple_icon_moving){
      apple_icon_x = mouseX + apple_icon_offsetX
      apple_icon_y = mouseY + apple_icon_offsetY
    }
    else if(orange_icon_moving){
      orange_icon_x = mouseX + orange_icon_offsetX
      orange_icon_y = mouseY + orange_icon_offsetY
    }
    else if(banana_icon_moving){
      banana_icon_x = mouseX + banana_icon_offsetX
      banana_icon_y = mouseY + banana_icon_offsetY
    }
    else if(pear_icon_moving){
      pear_icon_x = mouseX + pear_icon_offsetX
      pear_icon_y = mouseY + pear_icon_offsetY
    }
  }
}

// Function to update the moving variables after mouse has been released
function mouseReleased(){
  if(page === 6){
    apple_icon_moving = false
    orange_icon_moving = false
    banana_icon_moving = false
    pear_icon_moving = false
    box_icon_moving = false
  }
}

let fruit_distributed = () => {
  let limit_x1 = center_rect_x
  let limit_x2 = center_rect_x + center_rect_w
  let limit_y1 = center_rect_y
  let limit_y2 = center_rect_y + center_rect_h
  if (!(apple_icon_x >= limit_x1 && apple_icon_x <= limit_x2 && apple_icon_y >= limit_y1 && apple_icon_y <= limit_y2)) {
    apple_out_center = true
  }
  if (!(banana_icon_x >= limit_x1 && banana_icon_x <= limit_x2 && banana_icon_y >= limit_y1 && banana_icon_y <= limit_y2)) {
    banana_out_center = true
  }
  if (!(orange_icon_x >= limit_x1 && orange_icon_x <= limit_x2 && orange_icon_y >= limit_y1 && orange_icon_y <= limit_y2)) {
    orange_out_center = true
  }
  if (!(pear_icon_x >= limit_x1 && pear_icon_x <= limit_x2 && pear_icon_y >= limit_y1 && pear_icon_y <= limit_y2)) {
    pear_out_center = true
  }
  return (apple_out_center&&orange_out_center&&banana_out_center&&pear_out_center)
}
