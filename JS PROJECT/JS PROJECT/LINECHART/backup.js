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
var Carbohydratesindex=0,fatindex=0,proteinindex=0,countryindex=0;
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
    i++;
  }
  countryv=data[countryindex];
  fat=data[fatindex];
  protein=data[proteinindex];
  carbohydrate=data[carbohydrateindex];
   
   if(fat=="")  fat=0;
   if(protein=="") protein=0;
   if(carbohydrate=="") carbohydrate=0;

var index=country.indexOf(countryv);

     if(index!=-1)
     {
      proteinv[index]+=parseFloat(protein);
      Carbohydratesv[index]+=parseFloat(Carbohydrates);
      fatv[index]+=parseFloat(fat);
    }
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