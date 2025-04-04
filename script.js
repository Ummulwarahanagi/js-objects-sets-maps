function person(Name,Age,Gender,Occupation){
    this.Name=Name;
    this.Age=Age;
    this.Gender=Gender;
    this.Occupation=Occupation;

    this.printDetails=function(){
          console.log("Name :"+this.Name);
          console.log("Age :"+this.Age);
          console.log("Gender :"+this.Gender);
          console.log("Occupation :"+this.Occupation);
          console.log("------------------------------")
    };
}

//creating two instances
let person1=new person("Alex",35,"Male","Soldier");
let person2=new person("Julie",25,"Female","Doctor");

//print the details
person1.printDetails();
person2.printDetails();

//task2 on sets
console.log("Returning an unique set of elements from an array:")
function Uniqueset(arr){
    return new Set(arr);
}
console.log(Uniqueset([1,1,2,3,3,4,5,5]));

console.log("Performing set operations:");
function setOperation(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    // Union: Combine elements from both sets
    let union = new Set([...set1, ...set2]);

    // Intersection: Elements present in both sets
    let intersection = new Set([...set1].filter(item => set2.has(item)));

    // Difference: Elements in set1 but not in set2
    let difference = new Set([...set1].filter(item => !set2.has(item)));

    console.log("Union of sets:", [...union]);
    console.log("Intersection of sets:", [...intersection]);
    console.log("Difference of sets:", [...difference]);
}

let arr1 = [1, 2, 3, 3, 4, 5];
let arr2 = [5, 6, 2, 7, 5, 8];

setOperation(arr1, arr2);
//subset
console.log("Performing subset: ")
function issubset(set1,set2){
    return ([...set1].every(item=>set2.has(item)));//convert set to array check all elements of set1 is in set2 
}

let set1=new Set([1,2,3]);
let set2=new Set([1,2,3,4,5]);
console.log(issubset(set1,set2));
console.log(issubset(set2,set1));

//creating Map and performing map operation

let personMap=new Map();//creating a map by calling Map()method

//Adding key-value pairs
personMap.set("name","alex");
personMap.set('age',35);
personMap.set("gender","male");
personMap.set("occupation",'Teacher');

//Accessing values
console.log("Name :",personMap.get("name"));
console.log("Age:",personMap.get("age"));

//updating values
console.log("Before updating the occupation was:",personMap.get("occupation"));
personMap.set("occupation","soldier");
console.log("After updating the occupation is:",personMap.get("occupation"));

//deleting value
console.log("deleting gender :")
personMap.delete("gender");
console.log("Gender :",personMap.get("gender"));

