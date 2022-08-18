const pionoKeys = document.querySelectorAll('.key')

const playSound = (url)=>{
    console.log(url)

    new Audio(url).play()

}



// for(const pionoKey of pionoKeys ){


    
//     const newUrl = `./piono-sound-24-keys/key18.mp3`
    
//     pionoKey.addEventListener('click',()=>{
//         playSound(newUrl)
//         console.log(pionoKeys)
//     } )

// }



pionoKeys.forEach((pionoKey,i)=>{

    const num = i < 9 ? '0'+ (i+1) : (i+1);
    console.log(num)
    

    const newUrl = `./piono-sound-24-keys/key${num}.mp3`
    
    pionoKey.addEventListener('click',()=>{
        playSound(newUrl)
    } )

})


   


   

  
