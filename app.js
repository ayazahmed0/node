//Require Work Functions
// const function1 = require('./functions');
// console.log(function1.sum(23,23));

//Working on event

const EventEmitter = require('events');
// const EventEmitter = new event.EventEmitter;

// EventEmitter.on('notification',(...arg)=>{

//     console.log(arg[0]+arg[1]);

// });
// const eventdata = EventEmitter.emit('notification',1,2);


//Class With Emittt Event
// class person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }
//     get name(){
//        return this._name;
//     }
// }
// let pr = new person('Ayaz');
// let email = new person('ayazahmed0441@gmail.com');

// email.on('email',()=>{
//    console.log('This is email:'+email.name); 
// })
// email.emit('email');

// pr.on('name',() =>{
//     console.log('This is '+pr.name);
// })
// pr.emit('name');

//Start Work On Readline
// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// });
// let num1 = Math.floor((Math.random() * 10) +1 );
// let num2 = Math.floor((Math.random() * 10) +1 );
// let answer = num1+num2;
// rl.question(`What is the ${num1} + ${num2} answer is :`,(userinput) =>{
//     if(userinput.trim() == answer){
//             rl.close();
//     }else{
//       rl.setPrompt('The is incorrect Please Try Again \n');
//       rl.prompt();
//       rl.on('line',(userinput) => {
//         if(userinput.trim() == answer){
//             rl.close();
//         }else{
//           rl.setPrompt(`Answer Is in ${userinput} Please Try Agin \n`);
//           rl.prompt();
//         }
//       });
//     }
// }
// );
// rl.on('close',() => {
//     console.log('Correct !!!!!');
// });

//File Working File

const fs = require('fs');
// fs.writeFile('example.txt','This is just for testing',(arr) =>{

//     if(arr)
// console.log(arr);
//     else
//     console.log('File Created Successfully');
//       fs.readFile('example.txt','utf8',(err,file) => {
//         if(err)
//         console.log(err);
//         else
//         console.log(file);
//       })
    

// });

// fs.rename('testing.txt','finalexample.txt', (err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('File created successfully');
// });


fs.appendFile('finalexample.txt','\n Ayaz janjua is here and i will make a janjua foundation',(err)=>{
if(err)
console.log(err);
else
console.log('File Append Successfully');
})