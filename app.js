const keys = document.querySelectorAll('.keys')

const playSound = (url)=>{
    console.log(url)

    new Audio(url).play()

}



for(const key of keys ){
    
    const newUrl = `./piono-sound-24-keys/key${number}.mp3`
    
    key.addEventListener('click',()=>{
        playSound(newUrl)
    } )

}



   


   

  
