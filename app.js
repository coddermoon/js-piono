const pionoKeys = document.querySelectorAll('.key')

const playSound = (url)=>{
   
 new Audio(url).play()

}


pionoKeys.forEach((pionoKey,i)=>{

    const num = i < 9 ? '0'+ (i+1) : (i+1);
   
   const newUrl = `./piono-sound-24-keys/key${num}.mp3`
    
    pionoKey.addEventListener('click',()=>{
        playSound(newUrl)
    } )

})


   


   

  
