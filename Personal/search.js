
import { keepDelete } from './delete.js';
import { keepEdit } from './edit.js';



export const fullyData=async ()=>{
    const url=`https://678ed693a64c82aeb12183e7.mockapi.io/users`
    try{
    const response= await fetch(url);
    const data= await response.json();
    return data
    }catch(error){
        console.error('məlumat xətası')
    }
}


fullyData()
.then(el=>takeUser(el))
.catch(error=>console.error(error,'bir xeta var'))




export function takeUser(data){
    
 data.forEach(element => {
    createUserPanel(element)
 });
 keepDelete();
 keepEdit();
}


export function createUserPanel(element){
    if(element){
     const{name,age,photo,id}=element
     console.log(name);
     
     createHmtlBox(name,age,photo,id)
  }
}   
    



function createHmtlBox(name,age,photo,id){
    const userBoard=document.querySelector('.user-board');
    const userPanel=document.createElement('div');
    userPanel.classList.add('user-panel');
    const informaitonBox=document.createElement('div');
    informaitonBox.classList.add('informaition-text');
    const headerText=document.createElement('h3');
    headerText.textContent=`İstifadəçi məlumatı`
    const underline=document.createElement('p');
    underline.classList.add('underline');
    // person line
    const personInformationBox=document.createElement('div');
    personInformationBox.classList.add('person-information-box')
    // img-start
    const imgBox=document.createElement('div');
    imgBox.classList.add('img-box');
    const img=document.createElement('img');
    img.classList.add('person-img');
    img.src=`${photo}`
    imgBox.append(img);
    // img-end
    // person line
    const personSelfBox=document.createElement('div');
    personSelfBox.classList.add('person-self-box');
    const personName=document.createElement('p');
    personName.textContent=`AD:${name}`;
    const personAge=document.createElement('p');
    personAge.textContent=`Yaş:${age}`;
    // button-line
    const buttonBox=document.createElement('div');
    buttonBox.classList.add('button-box');
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent=`Sil`
    deleteBtn.classList.add('delete');
    deleteBtn.setAttribute('id',id);
    const editBtn=document.createElement('button');
    editBtn.setAttribute('id',id);
    editBtn.textContent=`Redaktə et`;
    editBtn.classList.add('edit');
    buttonBox.append(deleteBtn,editBtn);
    personSelfBox.append(personName,personAge);
    personInformationBox.append(imgBox,personSelfBox);
    informaitonBox.append(headerText,underline);
    userPanel.append(informaitonBox,personInformationBox,buttonBox);
    userBoard.append(userPanel);
}




 
 