var asteroid , asteroidImg , asteroidGroup , bullet , bulletImg;
var galaxyImg , rocket , rocketImg;
var bulletGroup;
var gameState = "play";
function preload()
{
	galaxyImg = loadImage("galaxy.jpg")
	rocketImg = loadImage("rocket.png")
	asteroidImg = loadImage("https___cdn.cnn.com_cnnnext_dam_assets_191121132750-nasa-bennu-asteroid.png")
	bulletImg = loadImage("Capture.PNG")
	
}

function setup() {
	createCanvas(800, 700);

	//Create the Sprites Here.
	
	rocket = createSprite(100,600,100,100)
	rocket.addImage(rocketImg)
	rocket.scale=0.3
	rocket.velocityY=0
	rocket.velocityX = 0

	asteroidGroup = new Group()
	bulletGroup = new Group()

}




function draw() {
  
  background(0);
	if(gameState == "play")
	{
		if(keyWentDown("space"))
  		{
		bullet=createSprite(rocket.x,rocket.y-150,20,20)
		bullet.addImage(bulletImg)
		bullet.velocityY=-20
		bulletGroup.add(bullet)
	  }

 	 if(asteroidGroup.isTouching(bulletGroup))
  		{
	 	 for(var i=0;i<asteroidGroup.length;i++)
	 	 	{
				if(asteroidGroup.isTouching(bulletGroup))
				{
					asteroidGroup[i].destroy()
					bulletGroup.destroyEach()
				}
	  		}
  		}

  	 if(asteroidGroup.isTouching(rocket))
  	 {
	   for(var i=0;i<asteroidGroup.length;i++)
	  	{
			if(asteroidGroup.isTouching(rocket))
			{
			gameState = "end"
 			}
	  	} 
  	 }
 	 controlRocket();
 	 asteroids();
	}
  if(gameState == "end")
  {
	text("game over",300,400)
	rocket.destroy()
	asteroidGroup.destroy()
	bulletGroup.destroy()

	
  }

  drawSprites();
 
}

function controlRocket()
{
	if(keyDown("RIGHT_ARROW"))
	{
		rocket.x = rocket.x+10

	}
	if(keyDown("LEFT_ARROW"))
	{
		rocket.x = rocket.x-10
	}
}

function asteroids()
{
	if(frameCount % 280 === 0)
	{
		asteroid = createSprite(500,200,50,50)
		asteroid.x=Math.round(random(100,700))
		asteroid.y=Math.round(random(10,120))
		asteroid.addImage(asteroidImg)
		asteroid.scale=0.2
		asteroid.lifetime=500
		asteroid.velocityY=3
		asteroidGroup.add(asteroid)
    
	}
}
