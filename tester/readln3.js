const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({input: fs.createReadStream('Indicators.csv')});
var sample = new Array();
var i = 0;
rl.on('line', (line) => { //to get input and read the file line by line

    var l = line.split(',');
    var y = '"Life expectancy at birth';
    var z = ' total (years)"';

    if (l[2] === y && l[3] === z) {
        var obj = {};
        obj["country"] = l[0];
        obj["indicator"] = l[2].slice(1) + l[3].slice(0, -1);
        obj["year"] = l[5];
        obj["value"] = l[6];
        sample.push(obj);
    }
});

var arr = []; //Array to save country names

var smarr = []; // To get the array of objects of key value pair of country and value
rl.on('close', () => {
    //console.log(sample);
    var myset = new Set(); // To avoid duplicates
    for (var i = 0; i < sample.length; i++) {
        myset.add(sample[i]['country']);
    }
  //  console.log(myset);
    var temparr = Array.from(myset); //To get set in an array

    //console.log(temparr.length);

    for (var j = 0; j < temparr.length; j++) { //To compare each country name on temparr to sample array using loop
        var val = 0;
        for (var k = 0; k < sample.length; k++) {

            if (sample[k]['country'] == temparr[j]) {
                val = val + parseFloat(sample[k]['value']); //add all values for each country
            }
        }
        arr[j] = val; //total value of each country
    }
    //console.log(arr);
    for (var jj = 0; jj < 212; jj++) {
        //  samobj[temparr[jj]] = arr[jj];     // ex:-  Arab world : 43.3656373
        var samobj = {};
        samobj['country'] = temparr[jj];
        samobj['value'] = arr[jj];
        //console.log(samobj);        //correct

        smarr.push(samobj);
    }

    smarr.sort(function(a, b) { //To sort the array based on the 'value' inside the object
        return a.value - b.value;
    });

    var finalArray = new Array(); //An Array to get the top countries
    var xx = smarr.length - 1;
    for (var l = 0; l < 5; l++) {
        finalArray[l] = smarr[xx];
        xx--;
    }
    console.log(finalArray);

    fs.writeFileSync('LifeExpectancy3.json', JSON.stringify(finalArray)); //Converting array of objects into JSON file
});
