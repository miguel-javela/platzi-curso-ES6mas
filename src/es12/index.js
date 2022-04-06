//replace all
const string = "javascript es maravilloco, con javascript puedo crear el futuro de la web";
const replacedString = string.replace("javascript", "python")
console.log(replacedString);

const replacedString2 = string.replaceAll("javascript","python")//no me reconoce replaceAll
console.log(replacedString2);

//metodos privados
class Message{
    #show(val){
        console.log(val);
    };
    get #add(val){//tampoco me sirvio
        //...
    }
}

const message = new Message();
message.show('hola');

//promise any
const promise1 = new Promise ( (resolve,reject) => reject("1") );
const promise2 = new Promise ( (resolve,reject) => resolve("2") );
const promise3 = new Promise ( (resolve,reject) => resolve("3") );

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));//no me reconoce any

//
class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}

//nuevos operadores logicos
let isTrue = true;
let isFalse = false;
console.log(isTrue ??= isFalse);//no me lo reconoce
console.log(isTrue ||= isFalse);//no me lo reconoce
console.log(isTrue &&= isFalse);//no me lo reconoce

