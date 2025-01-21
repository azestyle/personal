 
import { fullyData,createUserPanel } from './search.js';
import { keepDelete } from './delete.js';


 export function keepEdit(){
    const edited=document.querySelectorAll('.edit');
    edited.forEach((el)=>{
        el.addEventListener('click',()=>{
            const modalBox=document.querySelector('#modal-div');
            modalBox.classList.remove('d-none');
            modal();
            doIt(el.id);
        })
    })
    
 }

 function modal(){
 
 const modalClose=document.querySelector('.modal-dont');
 modalClose.addEventListener('click',()=>{
const modalBox=document.querySelector('#modal-div'); 
 modalBox.classList.add('d-none');
 })
 }


 function doIt(id){
    const confirmBtn=document.querySelector('.modal-btn')
    confirmBtn.addEventListener('click',()=>{
        personHandle(id);
    },{ once: true })
 }

 function personHandle(id){
    const objName=document.querySelector('.modal-name').value;
    const objAge=document.querySelector('.modal-age').value;
    if(objName.trim().length>4 && objAge>1){
        const modalObj={
            name:objName,
            age:Number(objAge)
        }
        editProcces(modalObj,id);
        const modalBox=document.querySelector('#modal-div'); 
        modalBox.classList.add('d-none');
    }else{
        doIt(id);
    }
    
   } 
    

 const editProcces=async(data,id)=>{
    const url=`https://678ed693a64c82aeb12183e7.mockapi.io/users/${id}`
    try{
       const response=await fetch(url,{
        method:'Put',
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