function xogAqrin(){
    return new Promise((gul,fashel)=>{

        setTimeout(()=>{
            const xog = true;
        if(xog){
            gul({ScoolName:"sheikh hassan barsane", ID:285,Name:"Abdirisak Ali Mohamed", Addrees:"Mishinka" })
        }else{
            fashel("wax xog ah lama hayyo")
        }
        },2000)

        
    })
}
// Async/await
async function xogtaQofka(){
    try{
        const xogo= await xogAqrin()
        console.log("Xogta waa tan soo ma ahan mudane: ",xogo)
    }
    catch(Error){
        console.log(Error)
    }
}
xogtaQofka();
