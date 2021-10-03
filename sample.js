
var rew = new XMLHttpRequest();

rew.open('GET','https://restcountries.eu/rest/v2/region/europe',true)

rew.send();

rew.onload=function()
{
    var result = JSON.parse(rew.response)
    console.log(result)

    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].name+" "+result[i].capital);
    }
}

