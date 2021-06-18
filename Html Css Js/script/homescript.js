const slideImages = $(".slide");
const dots = document.getElementsByClassName("dot");
const size = slideImages.length;
let cur = 0;
let cek = true;
slideImages.hide();
slideImages.eq(cur).show();
dots[cur].style.backgroundColor = "#2c9ce3";
autoslide();
function autoslide(){
    if(cek){
        slideImages.eq(cur).show();
        cek =false;
    }else{
        dots[cur].style.backgroundColor="white";
        slideImages.eq(cur).hide();
        cur =(cur+1)%size;
        dots[cur].style.backgroundColor="#2c9ce3";
        slideImages.eq(cur).fadeIn(2000);
    }
        setTimeout(autoslide,5000);
  
}
$("#dot1").click(function(){
    dots[cur].style.backgroundColor="white";
    slideImages.eq(cur).hide();
    cur=0;
    dots[cur].style.backgroundColor="#2c9ce3";
    slideImages.eq(cur).fadeIn(2000);
})

$("#dot2").click(function(){
    dots[cur].style.backgroundColor="white";
    slideImages.eq(cur).hide();
    cur=1;
    dots[cur].style.backgroundColor="#2c9ce3";
    slideImages.eq(cur).fadeIn(2000);
})

$("#dot3").click(function(){
    dots[cur].style.backgroundColor="white";
    slideImages.eq(cur).hide();
    cur=2;
    dots[cur].style.backgroundColor="#2c9ce3";
    slideImages.eq(cur).fadeIn(2000);
})
$("#dot4").click(function(){
    dots[cur].style.backgroundColor="white";
    slideImages.eq(cur).hide();
    cur=3;
    dots[cur].style.backgroundColor="#2c9ce3";
    slideImages.eq(cur).fadeIn(2000);
})