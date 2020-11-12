//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogimage = loadImage("images/dogImg.png");
  happyDogimage = loadImage("images/dogImg1.png");  

}

function setup() {
  createCanvas(500, 500);

  
  
  dog = createSprite(200,400,50,50);
  dog.addImage(dogimage);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

if(keyWentDown(UP_ARROW)){

   writeStock(foodS);
   dog.addImage(happyDogimage);

}





  drawSprites();



  //add styles here
  text("Note;Press the Up arrow to feed the dog milk",100,200);


}

function readStock(data){

    foodS = data.val();

}

function writeStock(){

    database.ref('/').update({

      Food:x

    })

}


