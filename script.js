let adButton=document.getElementById('addItems')

let holder=[]

function AddItems(event)
{
   
    let item1=document.getElementById('in-1').value
    const date=document.getElementById('in-2').value
    const priority=document.getElementById('in-3').value
    
    
   let objdata ={
        name:item1,
        date:date,
        priority:priority
    }
    
    console.log("objects",objdata)
    holder.push(objdata)

    localStorage.setItem('Items-added', JSON.stringify(holder));
    var retrievedObject = localStorage.getItem('Items-added');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    event.preventDefault();


    display(holder)
}


console.log(localStorage.getItem('Items-added'))

let id=0
function display(holder)
{
    let To_do=document.getElementById('sec-2')
    let task=document.getElementById('sec-3')
    let jsonData = JSON.parse(localStorage.getItem('Items-added'));

    let input_box=document.createElement('input')
    let span=document.createElement('span')
    let chkbx=document.createElement('input')
    
    chkbx.setAttribute('id','checkbox-1')
    chkbx.setAttribute('type','checkbox')

    chkbx.style.backgroundColor='black'
    input_box.setAttribute('id','Dom-input')
    // input_box.style.marginTop="6px"
    span.appendChild(chkbx)
    input_box.appendChild(span)
   
    let current_date=new Date().toJSON().slice(0,10)

    // console.log(current_date)
    
    jsonData.forEach((element) => {
        if(element.date == current_date)
        {   
             
             id=id+1
            input_box.value=id +" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+element.name +" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+element.date+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+element.priority
            console.log(element.date)
            
            To_do.appendChild(input_box)
            To_do.appendChild(chkbx)
        }
        else{
            if(element.date > current_date)
            {  
               console.log("future date",element.date,element.name)
               input_box.value=id=id+1
               input_box.value=id +" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+element.name +" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+element.date+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+element.priority
               task.appendChild(input_box)
               task.appendChild(chkbx)
             }
        }
                      
})}





window.onload=display()
adButton.addEventListener("click",AddItems)