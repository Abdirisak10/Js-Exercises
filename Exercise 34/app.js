const Lists = document.querySelector('#Lists')
const Additem=()=>{
    const newli=document.createElement('li')
    newli.textContent='item 3'
    Lists.appendChild(newli)
}

const Removeitem=()=>{
    if(Lists.lastChild){
    Lists.removeChild(Lists.lastChild)
    }else{
        alert('Mudane ma jiro list kale!')
    }
    
}