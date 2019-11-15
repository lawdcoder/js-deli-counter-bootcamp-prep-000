var katzdateline = [];
var name
function TakeANumber(katzdateline, name)
{
for(var i = 0; i < katzdateline.length; i++)
console.log("Welcome ${katzdateline} and your cureent position is ${i}")
}

function nowServing()
{
console.log("First in line is ${katzdateline[0]}")
katzdateline.shift();
if(katzdateline.length===0)
console.log("There is Nobody waiting")
}
function currentLine(katzdateline)
{
  
}

