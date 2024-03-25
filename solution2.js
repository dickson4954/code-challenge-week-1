const speed =70 // prints the speed of the car
const speedlimit=70;
const points= Math.abs((speed-speedlimit)/5);// calculates the points of car moving car exceeding speedlimit
if (speed<=70){
    console.log("Ok")// prints "ok" when speed is <=70
    }  else if (points>12){
        console.log("License suspended");//prints "license suspended"when points is >=12
    }else if(speed>=70){
        console.log("point:" + points);// prints the number of points when the driver exceeds the speed limit
    }
    
    

