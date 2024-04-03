// Write your solution here!
const cats = (["Milo", "Otis", "Garfield"])


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

 
 let catName = 'Ralph'
 function destructivelyAppendCat(name){
    cats.push ("Ralph")
  }

let Name = "Bob"
function destructivelyPrependCat (name){
    cats.unshift ('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop()

}
function destructivelyRemoveFirstCat(){
    cats.shift()
}


function appendCat(name){
    let newCatsArray =[...cats, name];
    return newCatsArray
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1)
}

function removeFirstCat(){
    return cats.slice(1)
}
