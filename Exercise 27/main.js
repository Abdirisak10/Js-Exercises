function xogSooAqriye(){
    return new Promise((guul,fashil)=>{

        setTimeout(()=>{
            const xog = true;
        if(xog){
            guul({ScoolName:"sheikh hassan barsane", ID:285,Name:"Abdirisak Ali Mohamed", Addrees:"Mishinka" })
        }else{
            fashil("wax xog ah lama hayyo mudane")
        }
        },2000)

        
    })
}
xogSooAqriye()
    .then((data)=>console.log("waa tan xogta:", data))
    .catch((Error)=>console.log(Error))