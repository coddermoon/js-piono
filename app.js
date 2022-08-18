const pionoKeys = document.querySelectorAll('.key')

const playSound = (url) => {
    new Audio(url).play()

}

pionoKeys.forEach((pionoKey, i) => {

    const newUrl = `./piono-sound-24-keys/key${num}.mp3`

    pionoKey.addEventListener('click', () => {
        playSound(newUrl)
    })

})








