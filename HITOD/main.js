 //khai báo biến slideIndex đại diện cho slide hiện tại
 var slideIndex;
 var he = setTimeout(showSlides, 5000);
 // KHai bào hàm hiển thị slide
 function showSlides() {
    clearTimeout(he);
     var i;
     var slides = document.getElementsByClassName("slide");
     var dots = document.getElementsByClassName("dot");
     var slidess = document.getElementsByClassName("slides");
     let temp = 3000;
     var size = [3000];
     for (i = 1; i < slides.length; i++) {
      temp -= 1200;
      size.push(temp);
     }
    //  for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";  
    //  }
     for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
     }
     slidess[0].style.transform = `translate3d(${size[slideIndex]}px, 0px, 0px)`;
    //  slides[slideIndex].style.display = "block"; 
     dots[slideIndex].className += " active";
     //chuyển đến slide tiếp theo
     slideIndex++;
     //nếu đang ở slide cuối cùng thì chuyển về slide đầu
     if (slideIndex > slides.length - 1) {
       slideIndex = 0
     }    
     //tự động chuyển đổi slide sau 5s
     he = setTimeout(showSlides, 5000);
 }
 //mặc định hiển thị slide đầu tiên 
 showSlides(slideIndex = 0);


 function CurrentSide(n) {
   showSlides(slideIndex = n);
 }