
import { fullyData } from './search.js';
import {  createStart } from './create.js';

createStart()
fullyData();

 
















































































// const box=document.querySelector('.big')
// const myAdress = async () => {
//   try {
//     const url = `https://jsonplaceholder.typicode.com/posts/1/comments`;
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log('data',data)
//     if(data){

//       takeElement(data);
//     }
//     // return data;
//    } catch (error) {
//     console.error("bir xeta var", error);
//   } 
//  };   

//  myAdress();
  
// // myAdress().then((data) => takeElement(data));

// function takeElement(el) {
//   el.forEach(({userId, title,id}) =>{
//     if(userId===7){
//       let divEelement=document.createElement('p');
//       let header=document.createElement('h1');
//       header.textContent=id
//       divEelement.textContent=title
//       box.append(divEelement,header);  
//     }
    
//   });
// }
// const data={
//   id :6,
//   age : '26',
//   name:'khayal'
// }
// const senddata=async()=>{
   
//     try{
//      const response=await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`,{
//         method:'POST',
//         headers:{
//           'Content-Type': 'application/json',
//       },
//         body:JSON.stringify(data)
//      });

//      const sendend=await response.json();
//      console.log(sendend);
     
//     }catch(error){
//         console.error(error)
//     }
// }

// senddata()