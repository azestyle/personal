
import { createUserPanel, fullyData } from './search.js';

 
 export function keepDelete(){
    const deleted=document.querySelectorAll('.delete');
    deleted.forEach((el)=>{
       el.addEventListener('click',()=>{
        deletedProcces(el.id);
        
       })
    }
    )
  
 }
 

 
 const deletedProcces=async(id)=>{
const url=`https://678ed693a64c82aeb12183e7.mockapi.io/users/${id}`
try{
   const response=await fetch(url,{
    method:'DELETE'
  })
 if(response.ok){
    const userBoard = document.querySelector('.user-board');
    userBoard.innerHTML = '';
    const newData = await fullyData() 
    newData.forEach((user) => createUserPanel(user));
    keepDelete();
  }          
  }catch(error){
  console.log(error)
}

 }          
 
  


 