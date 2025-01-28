//Destructing

let arr = [10, 20, 30, 40, 5, 6, 7, 90, 30, 50]

/*  let fVal = arr[0] 
 */

//let [ a, b, c, d ] = arr

let [a1, a2, a3, ...a4] = arr

console.log (a1, a2, a3, a4)

let nestArr = [1, 2, 3, 4, [10, 20, [30, 40]]]

let [a, b, c, d, [a11, a12, [a21, a22]]] = nestArr

console.log(d, a21)

//object destructing

let obj ={
    id : "IOE34",
    name : "Praveen",
    role : "Front end"
}

let { name, id, role } = obj

console.log(id, name, role)
console.log(obj.id);


//nested Object 

let nestObj = {
    i : 2,
    name1 : "Joker",
    bankDetails : {
        accName : "Joker",
        accNo : 4567656,
        branch : "xyz"
    }
}

let {  i, name1,bankDetails:{accName, accNo, branch} } = nestObj

console.log( name1, branch );

