const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const imagg = document.querySelector("img")
const audioSrc = document.querySelector('audio ')
const nameMusic = document.querySelector('.nameOfMusic')
const nameSinger = document.querySelector('.nameOfSinger')

const audioList = [
    {
        name : "Without Me",
        singer: "Halsey",
        img: "images/halsey.jpg",
        audio: "Audio/Halsey - Without Me.mp3"
    },
    {
        name : "Thunder",
        singer: "Lucas Estroda",
        img: "images/lucas.jpg",
        audio: "Audio/Lucas Estrada ft. LRMEO - Thunder (Lyric Video).mp3"
    },
    {
        name : " A Sky Full Of Stars",
        singer: "Coldplay",
        img: "images/skyjpg.jpg",
        audio: "Audio/@coldplay - A Sky Full Of Stars (Lyrics).mp3"
    },
    {
        name : "Dusk Till Dawn",
        singer: "Zayn Malik",
        img: "images/zaynjpg.jpg",
        audio: "Audio/ZAYN - Dusk Till Dawn (Official Video) ft. Sia.mp3"
    }
    
]

let currentIndex = 0;

imagg.src = audioList[currentIndex].img

nameMusic.textContent = audioList[currentIndex].name

nameSinger.textContent = audioList[currentIndex].singer

audioSrc.src = audioList[currentIndex].audio

console.log(audioSrc);
next.addEventListener("click", () =>{
    if(currentIndex < audioList.length){
        audioSrc.setAttribute("autoplay" , 'autoplay');
        currentIndex++;
        if (currentIndex == audioList.length) {
            currentIndex = 0
            imagg.src = audioList[currentIndex].img
        
            nameMusic.textContent = audioList[currentIndex].name
            
            nameSinger.textContent = audioList[currentIndex].singer
            
            audioSrc.src = audioList[currentIndex].audio
        }
        else{
 
            imagg.src = audioList[currentIndex].img
    
            nameMusic.textContent = audioList[currentIndex].name
            
            nameSinger.textContent = audioList[currentIndex].singer
            
            audioSrc.src = audioList[currentIndex].audio
        }
       
        
        
    }
    
   
})
prev.addEventListener("click", () =>{
    if(currentIndex === 0){
        audioSrc.setAttribute("autoplay" , 'autoplay');
        currentIndex = audioList.length - 1
        
        imagg.src = audioList[currentIndex].img
    
        nameMusic.textContent = audioList[currentIndex].name
        
        nameSinger.textContent = audioList[currentIndex].singer
        
        audioSrc.src = audioList[currentIndex].audio
        
        
    }
    else{
        currentIndex--;
        imagg.src = audioList[currentIndex].img
    
        nameMusic.textContent = audioList[currentIndex].name
        
        nameSinger.textContent = audioList[currentIndex].singer
        
        audioSrc.src = audioList[currentIndex].audio
    }
   
})
