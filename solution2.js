const speed =80
const speedlimit=70;
const points= Math.abs((speed-speedlimit)/5);
if (speed<=70){
    console.log("Ok")
    } if(points>12){
        console.log("License suspended");
    }else if(speed>=70){
        console.log("point:" + points);
    }
    
    

