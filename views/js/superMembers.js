fetch('/userAll/showAllMembers')
.then(res=>res.json())
.then(data=>{
    const container=document.getElementById('showSuperData');
    data.forEach(element => {
        if(element.category=='super'){
            const p=document.createElement("P")
            p.innerHTML=`   <table style="width:100%;background:lightgray">
        
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
          
          </table>
          `
            container.appendChild(p)
        }
    });
})

fetch('/userAll/showAllMembers')
.then(res=>res.json())
.then(data=>{
    const container=document.getElementById('showSuperMember');
    let cnt=0;
    data.forEach(element => {
        if(element.category=='super'){
         cnt++;
        }
    });
    container.innerHTML=cnt;
})