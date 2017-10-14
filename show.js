var field = [];
var scl = 10;
var stop = false;
var fireFighterResponse = 0.0;
var igniteChance = 1-fireFighterResponse;
var adjacentHit;
var toChange = [];
var count = 0;

//todo
// create seperate arrays for prey and predators
// fix movment so that diagnol is allowed
// spawning rates
// make it so that prey run away
// delete automatons from array rather than not showing
// make code cleaner in general



function setup(){
  createCanvas(1200, 800);
  frameRate(20);
  start();
}

function start(){
    for(var i=0; i<1200; i+=scl){
        field[i] = [];
        for(var j=0; j<800; j+=scl){
            field[i][j] = new automatons(i, j);
        }
    }
}

function updateCells(i, j){
    adjacentHit = Math.random();
    //if (field[i][j].color==2) console.log(adjacentHit);
    if(field[i][j].color==2){

        if(j>1 && field[i][j-scl].color==1){
            //field[i][j-scl].color = 2;
            toChange[count] = [i, j-scl];
            count++;
        }
        //console.log("i:"+i+" j:"+j);
        if(j<800-scl && field[i][j+scl].color==1){

            // field[i][j+scl].color = 2;
            toChange[count] = [i, j+scl];
            count++;
        }
        if(i>1 && field[i-scl][j].color==1){
            // field[i-scl][j].color = 2;
            toChange[count] = [i-scl, j];
            count++;
        }
        if(i<1200-scl && field[i+scl][j].color==1){
            // field[i+scl][j].color = 2;
            toChange[count] = [i+scl, j];
            count++;
        }
        if(j>1 && i>1 && field[i-scl][j-scl].color==1){
            // field[i-scl][j-scl].color = 2;
            toChange[count] = [i-scl, j-scl];
            count++;
        }
        if(j<800-scl && i<1200-scl && field[i+scl][j+scl].color==1){
            // field[i+scl][j+scl].color = 2;
            toChange[count] = [i+scl, j+scl];
            count++;
        }
        if(i>1 && j<800-scl && field[i-scl][j+scl].color==1){
            // field[i-scl][j+scl].color = 2;
            toChange[count] = [i-scl, j+scl];
            count++;
        }
        if(i<1200-scl && j>1 && field[i+scl][j-scl].color==1){
            // field[i+scl][j-scl].color = 2;
            toChange[count] = [i+scl, j-scl];
            count++;
        }
    }
    if(field[i][j].color==0){

    }

}

function draw(){
    if(!stop){
        background(100);
        noStroke();
        toChange = [];
        count = 0;
        for(var i=0; i<1200; i+=scl){
            for(var j=0; j<800; j+=scl){
                field[i][j].update();
                updateCells(i, j);
                field[i][j].show();
            }
        }
        for(var k=0; k<toChange.length; k++){
            field[toChange[k][0]][toChange[k][1]].color = 2;
        }
    }
}
