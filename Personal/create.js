import { keepDelete } from "./delete.js";
import { keepEdit } from "./edit.js";
import { createUserPanel, fullyData } from "./search.js";




export function createStart(){
    const created=document.querySelector('.new-user');
    created.addEventListener('click',()=>{
        const firstModal=document.querySelector('#createFirst');
        firstModal.classList.remove('d-none');
        createds();
        deletes();
    }
)
}


function createds(){
    const addBtn=document.querySelector('.add-btn');
    addBtn.addEventListener('click',()=>{
     const addImg=document.querySelector('.create-img').value;
     const addName=document.querySelector('.create-name').value;
     const addAge=document.querySelector('.create-age').value;
     if (addName.trim().length>4&&addAge.length>1&&addImg.length>10) {
        addObj(addAge,addImg,addName)
        
     }
    })
}

function addObj(addAge,addImg,addName){
    
const added={
    name:addName,
    age:addAge,
    photo:addImg
}
console.log(added);
addProcces(added)
const firstModal=document.querySelector('#createFirst');
firstModal.classList.add('d-none');
}


const addProcces=async(data)=>{
    const url=`https://678ed693a64c82aeb12183e7.mockapi.io/users/`
    try{
   const response=await fetch(url,{
           method:'POST',
           headers: {
               'Content-Type': 'application/json', 
           },
           body:JSON.stringify(data)
          });
          if(response.ok){
           const userBoard = document.querySelector('.user-board');
           userBoard.innerHTML = '';
           const newData = await fullyData() 
           newData.forEach((user) => createUserPanel(user));
           keepDelete();
           keepEdit();
          }
          
    }catch(error){
        console.error(error)
    }
}

function deletes(){
    const modalsDeletes=document.querySelector('.back-btn');
    modalsDeletes.addEventListener('click',()=>{
        const firstModal=document.querySelector('#createFirst');
        firstModal.classList.add('d-none');
    })
    
}