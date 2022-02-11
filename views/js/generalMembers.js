fetch('/userAll/showAllMembers')
.then(res=>res.json())
.then(data=>{
    const container=document.getElementById('showGeneralData');
    data.forEach(element => {
        if(element.category=='general'){
            const p=document.createElement("P")
            p.innerHTML=` <table style="width:100%;background:lightgray">
        
        <tr>
          <td>${element.firstName}</td>
          <td>${element.lastName}</td>
          <td>${element.age}</td>
          <td>${element.contactNumber}</td>
         
          <td>${element.city}</td>
          <td>${element.mail}</td>

          <td class="update"><button>update</button></td>
          <td class="delete"><button>delete</button></td>
        </tr>
      
      </table>`
            container.appendChild(p)
        }
    });
})

fetch('/userAll/showAllMembers')
.then(res=>res.json())
.then(data=>{
    let cnt=0;
    const containerp=document.getElementById('showGeneralMember');
    data.forEach(element=>{
        if(element.category=='general'){
               cnt=cnt+1;
        }
    })
 
  containerp.innerHTML=cnt;



    });
