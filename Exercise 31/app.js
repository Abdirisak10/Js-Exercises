async function usersdata(){
    try{
        console.log("Displaying User data")

        const jawaabcelin = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!jawaabcelin.ok){
            throw new Error('Http error aa jiro')
        }

        // haddii ay celad dhici weyso waxa xiga
        const jawaab = await jawaabcelin.json();
        console.log(jawaab)
    }
    catch(error){
        console.log(error)
    }
}
usersdata();