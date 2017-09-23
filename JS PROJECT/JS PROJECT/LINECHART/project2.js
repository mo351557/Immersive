var fs=require('fs');
var ln = require('readline').createInterface({
  input: fs.createReadStream('Food.csv')
});

var country = ['Netherlands', 'Canada', 'United Kingdom' , 'United States' , 'Australia' , 'France' , 'Germany' , 'Spain', 'South Africa'];
var region=['northEurope','southEurope','centralEurope'];
var northEurope = ['United Kingdom', 'Denmark', 'Sweden', 'Norway'];
var centralEurope = ['France', 'Belgium', 'Germany', 'Switzerland', 'Netherlands'];
var southEurope = ['Portugal', 'Greece', 'Italy', 'Spain', 'Croatia', 'Albania'];
var data=[],final_c=[];
var carbohydrateindex=0,fatindex=0,proteinindex=0,countryindex=0;
var countryv = 0,Carbohydrates = 0,fat = 0,protein=0,i=0;

var Carbohydratesv = Array(3).fill(0);
var fatv = Array(3).fill(0);
var proteinv = Array(3).fill(0);

ln.on('line', function (line) {
  data=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
 // data=line.split(',');


while(i<1) 
  {
     countryindex=data.indexOf('countries_en');
    fatindex=data.indexOf('fat_100g');
    proteinindex=data.indexOf('proteins_100g');
    carbohydrateindex=data.indexOf('carbohydrates_100g');
    console.log(carbohydrateindex);
    i++;
  }
  countryv=data[countryindex];
  fat=data[fatindex];
  protein=data[proteinindex];
  carbohydrate=data[carbohydrateindex];
   //console.log("country "+carbohydrate);
   if(fat=="")  fat=0;
   if(protein=="") protein=0;
   if(carbohydrate==""){carbohydrate=0;}


/*
for (var v = 0; v < region.length; v++) {
  var index=region[i].indexOf(countryv);
  console.log(index);
     if(index!=-1)
     {
      continue;
      proteinv[v]+=parseFloat(protein);
      Carbohydratesv[v]+=parseFloat(Carbohydrates);
      fatv[v]+=parseFloat(fat);
    }
  }*/
var cc=country.indexOf(countryv);
     if(cc!=-1)
     {
  var aa=northEurope.indexOf(countryv);
 // console.log(index);
     if(aa!=-1)
     {
      proteinv[0]+=parseFloat(protein);
      Carbohydratesv[0]+=parseFloat(carbohydrate);
      fatv[0]+=parseFloat(fat);
    } 
  var bb=southEurope.indexOf(countryv);

    if(bb!=-1)
     {
      proteinv[1]+=parseFloat(protein);
      Carbohydratesv[1]+=parseFloat(carbohydrate);
      fatv[1]+=parseFloat(fat);
    }
      var cc=centralEurope.indexOf(countryv);
     if(cc!=-1)
     {
      proteinv[2]+=parseFloat(protein);
      Carbohydratesv[2]+=parseFloat(carbohydrate);
      fatv[2]+=parseFloat(fat);
    }
  }

       

/*var index=coun*try.indexOf(countryv);
     if(index!=-1)
     {
      proteinv[index]+=parseFloat(protein);
      Carbohydratesv[index]+=parseFloat(Carbohydrates);
      fatv[index]+=parseFloat(fat);
    }*/
});

ln.on('close', function() {
  for(var h=0;h<region.length;h++) {
    final_c.push({Region:region[h],
    Carbohydrates:Carbohydratesv[h],
    fat:fatv[h],
    protein:proteinv[h]
  });
    //console.log(country[h]+" "+Carbohydratesv[h]+" "+fatv[h]);
}    

console.log(final_c);
fs.writeFile('secondg.json', JSON.stringify(final_c));    


//console.log(JSON.stringify(final_c));
});