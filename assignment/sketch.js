let bgimg; //background image
let showimg; //image that will be shown on screen
let artwork; //artwork that will be used
let artwork1;
let artwork2;
let artwork3;
let works;
let counter = 0;
let audio; //app's audio
//let startbutton = {x:85, y:250, w:150, h:90, text: 'Start', text_size:50}; //the start button for the app
let startbutton;
let app = false; 
let audiobuttonon;
let audiobuttonoff;
let auswitch = 0;
let arrowl;
let arrowr;
let arrowrotate;
let pieces;
let piece;
let piece1;
let piece2;
let piece3;
let isstart=false;
//startbutton.on_clicked = start;
//startbutton.on_pressed = startapp;


function preload() {
  bgimg = loadImage("assets/kessanlisone.png");
  artwork = loadImage("assets/kessanlistwo.png");
  artwork1 = loadImage("assets/rothko.jpg");
  artwork2 = loadImage("assets/kandinsky.jpg");
  artwork3 = loadImage("assets/mywork.jpg");
  works = [artwork, artwork1, artwork2, artwork3];
  audio = createAudio("assets/pinkskyattempt.mp3");
  audiobuttonon = loadImage("assets/soundonsmall.png");
  audiobuttonoff = loadImage("assets/soundoff.png");
  arrowl = loadImage("assets/arrowleft.png");
  arrowr = loadImage("assets/arrowright.png");
  arrowrotate = loadImage("assets/rotateleft.png");
  piece = loadImage("assets/kessanlispiece.png");
  piece1 = loadImage("assets/rothkopiece.png");
  piece2 = loadImage("assets/kandinskypiece.png");
  piece3 = loadImage("assets/myworkpiece.png");
  pieces = [piece, piece1, piece2, piece3];
}

function setup() {
  createCanvas(300, 600);
  image(bgimg, 0, 0);
  
  audiobuttonon = createImg("assets/soundonsmall.png", '');
  arrowl = createImg("assets/arrowleft.png", '');
  arrowr = createImg("assets/arrowright.png", '');
  arrowrotate = createImg("assets/rotateleft.png", '');
   audiobuttonon.mousePressed(audioswitch);
  
  
}

function draw() {
  if (!app && !isstart)
    {
		background(220);
		image(bgimg, 0, 0);
      startbutton = createButton("Start");
	  startbutton.position (120, 560);
      startbutton.mousePressed(startapp);
	  
	  isstart = true;
	  console.log("display button");
    }
	
   if (app == true)
    {
	  //document.getElementsByTagName("button").style.display="none";
	  //document.getElementsByName("startbutton").style.display = "none";
	  console.log("display artwork");
      arrowl.mousePressed(clickedleft);
      arrowr.mousePressed(clickedright);
	  audiobuttonon.position (0, 540);
      arrowl.position (50, 550);
      arrowr.position (200, 550);
      arrowrotate.position (250,550);
    }
  
}

function startapp(){
  app = true;
  console.log('App is starting');
}

function audioswitch(){
  console.log("Audio Switch is called");
  if (auswitch == 0)
    {
      auswitch = 1;
      audio.play();
      audio.loop();
    }
  else
    {
      auswitch = 0;
      audio.stop();
    }
}

function clickedleft(){
	console.log("left arrow");
	image(works[counter],0,0);
	image(pieces[counter],0,0);
	//pieces[counter].mousePressed(showtext);
  counter--;
  console.log(counter);
  if (counter<0)
    {
      counter = works.length-1;
    }
  
}

function clickedright(){
	console.log("right arrow");
	image(works[counter],0,0);
	image(pieces[counter],0,0);
	//pieces[counter].mousePressed(showtext);
  counter++;
  console.log(counter);
  if (counter>=works.length)
    {
      counter = 0;
    }
  
} 

function showtext(){
	textSize(10);
	if (counter == 1)
	{
		text("Nikos Kessanlis, was a very important Greek artist of the 20th century (1930-2004). He was born in Thessaloniki and studied in Athens' school of Fine Arts from 1950 to 1955. In 1952, he participated in the national exhibition (Panhellenio) with three of his own artworks. From 1955 to 1960, he continued his studies in Rome at the School for the Preservation of Works of Art and worked as a preservationist on the works for the restoration of the wall paintings in the church of the Eremitani in Padua. In Rome, he also did his first personal exhibition of his works. In 1961 he won the Premio Lissone European Prize and honorable mention at the Sao Paolo Biennale. Kessanlis decided to stay in Paris and continue his work there, until 1981. Then, he was elected professor at the Athens School of Fine Arts and settled permanently in Athens at the beginning of the following year. He also served as Rector of the School until 1996. Kessanlis' work belongs in the Informalism movement (Art informel). He would experiment with different supplies, creating distorted images of a dramatic scale that were on the border between illusion and reality. A restless artist, who never stopped experimenting with techniques and methods, he has managed to transcend traditional painting materials and has found himself on the forestage of the avant garde throughout his career, moving from informel to mec art and then on to his photomechanical works done on sensitized cloth or cement. (National Gallery of Corfu, Wikipedia)");
	}
}