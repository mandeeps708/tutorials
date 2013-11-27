var drumsKit = [{
    id: 0,
    name:'drum1',
    sources: ['/local/sounds/a.wav','/local/sounds/a.mp3'],
    color: '#1478AA',
    loop: 10,
    key: 'Q'
},{
    id: 1,
    name:'drum2',
    sources: ['http://www.w3c.com/demo/sample.mp3'],
    color: 'blue',
    loop: 5,
    key: 'W'
},{
    id: 6,
    name:'drum7',
    sources: ['/local/sounds/drum/d3.ogg'], 
    color: 'red',
    loop: -1,
    key: 'E'
},{
    id: 3,
    name:'drum4',
    sources: ['http://www.w3c.com/demo/d4.ogg','http://www.w3c.com/demo/d4.mp3'],
    color: 'blue',
    loop: 2,
    key: 'R'
}];
 
// Small utility function I wrote, for printing an array 
function printArray(arrayObj) {
    arrayObj.forEach(function(o) {
       console.log(o);
    });
}
 
// Part 1A, ok, I give my own solution, but maybe there is a better way...
function findBy(myArrayOfObjects, prop, val) {
  var results = [];
  myArrayOfObjects.forEach(function(obj) {
     if(obj[prop] == val) {
         // uncomment this part to see some traces
         //console.log(obj);
          // add the object to the resulting array
          results.push(obj);
     }
  }); 
  return results;
}
 
console.log("-----------------------------");
console.log("######### PART 1 ############");
console.log("-----------------------------");
 
// Test part 1A
console.log("### 1A filtering ###");
var r1 = findBy(drumsKit, 'id', '0');
console.log("result of findBy(drumsKit, 'id', '0'); : " + r1);
printArray(r1);
 
var r2 = findBy(drumsKit, 'color', 'blue');
console.log("result of findBy(drumsKit, 'color', 'blue'); : " + r2);
printArray(r2);
 
//   Part 1B               
function comparator(prop){
    // Write your code here...
}
 
// test 1B
console.log("### 1B : sorting by key ###");
drumsKit.sort(comparator('key')); //sort drumsKit by the key property
printArray(drumsKit);
 
console.log("### 1B : sorting by id ###");
drumsKit.sort(comparator('id')); //sort drumsKit by the id
printArray(drumsKit);
 
// Etc...
 
