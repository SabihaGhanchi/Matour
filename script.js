var imgChanger = document.querySelector(".fifth");
const img = ["url(image-1.jpg)", "url(image-2.jpg)", "url(image-3.jpg)", "url(image-4.jpg)","url(image-5.jpeg)" ];

function bgChanger(index){
   imgChanger.style.backgroundImage = img[index];
}