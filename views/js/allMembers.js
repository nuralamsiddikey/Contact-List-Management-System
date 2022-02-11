
fetch('/userAll/showAllMembers')
.then(res=>res.json())
.then(data=>{
    const containerAll=document.getElementById('showAllData');
   


    data.forEach(element => {

        const p=document.createElement('P');
        p.innerHTML=`
        <table style="width:100%;background:lightgray">
        
        <tr>
          <td>${element.firstName}</td>
          <td>${element.lastName}</td>
          <td>${element.age}</td>
          <td>${element.contactNumber}</td>
         
          <td>${element.city}</td>
          <td>${element.mail}</td>

          <td class="update" onclick="updateOne('${element._id}')"><button>update</button></td>
          <td class="delete" onclick="deleteOne('${element._id}')" ><button>delete</button></td>
        </tr>
      
      </table>

        `
        containerAll.appendChild(p)
    
    

    

       
    });
})
 



fetch('/userAll/showAllMembers')
.then(res=>res.json())
.then(data=>{

    const showTotalMembera=document.getElementById('showTotalMember')

   const len=data.length;
    
   showTotalMembera.innerHTML=len
   
})
 

function updateOne(id){
 
    const update=document.getElementById('updateOne');
    update.style.width="500px";
   
    
 

}
function vanish(){
  const update=document.getElementById('updateOne');
  update.style.width="0";
}



function deleteOne(id){
  fetch(`/userDelete/userOne/${id}`,{
    method:'DELETE',
  
  })
 window.location="http://localhost:3000/userAll/allMembers";
  
}
