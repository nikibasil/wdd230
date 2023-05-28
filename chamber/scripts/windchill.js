// 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature 
var temp= 50;
var wSpeed= 10;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);

if (temp <=50 && wSpeed >3){
  document.getElementById("windChill").innerHTML= windChill;
  document.getElementById("wind").innerHTML= wSpeed;
  document.getElementById("temp").innerHTML= temp;
}
else {
    document.getElementById("wind").innerHTML= wSpeed;
  document.getElementById("temp").innerHTML= temp;
document.getElementById("windChill").innerHTML= "N/A"  ;
  }