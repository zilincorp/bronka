

// Контейнер 2 анимация приближения


function up2() {


  var distance1 = document.getElementById("container2").getBoundingClientRect();

  var left1 = distance1.left;
  var top1 = distance1.top;
// console.log( "left1 " + left1);
// console.log( "top1 " + top1);

  var DocH = $(document).height();
// console.log("DocH " + DocH);




  var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  console.log("scrollTop " + scrollTop);

  var topFin1 = (DocH/4) - top1 - scrollTop/2;
  console.log("topFin1 " + topFin1);

  var DocW = $(document).width();
  console.log(" DocW " + DocW);

  var leftFin1 = -1*(left1) + DocW/4;
  console.log("leftFin1 " + leftFin1);


  document.getElementById("body").classList.add("active1");

  document.getElementById("external2").classList.add("active1");
  document.getElementById("external3").classList.add("active1");
  document.getElementById("external4").classList.add("active1");
  document.getElementById("external5").classList.add("active1");

  // document.getElementById("body").style.overflow = "hidden";





  document.getElementById("body").style.transform = 'scale(2) translateX(' + leftFin1 + 'px' + ') translateY(' + topFin1  + 'px)';

}

// Контейнер 2 анимация приближения

// Контейнер 2 анимация удаления

function down2() {

  // document.getElementById("body").classList.remove("active1");

  document.getElementById("external2").classList.remove("active1");
  document.getElementById("external3").classList.remove("active1");
  document.getElementById("external4").classList.remove("active1");
  document.getElementById("external5").classList.remove("active1");

  // document.getElementById("body").style.overflow = "hidden";


  // document.getElementById("html").style.transform = 'translateY(' + 0  + 'px)';

  setTimeout("document.getElementById(\"body\").style.transform = 'scale(1) translateX(' + 0 + 'px' + ') translateY(' + 0  + 'px)';", 100);

}

// Контейнер 2 анимация удаления



// Контейнер 3 анимация приближения



function up3() {

  var distance2 = document.getElementById("container3").getBoundingClientRect();

  var left2 = distance2.left;
  var top2 = distance2.top;

  console.log( "left2 " + left2);
  console.log( "top2 " + top2);

  var DocH = $(document).height();
  console.log("DocH " + DocH);

  var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  console.log("scrollTop " + scrollTop);

  var topFin2 = (DocH/4) - top2 - scrollTop/2;
  console.log("topFin2 " + topFin2);

  var DocW = $(document).width();
  console.log(" DocW " + DocW);

  var leftFin2 = -1*(left2) + DocW/4 ;
  console.log("leftFin1 " + leftFin2);

  document.getElementById("body").classList.add("active1");

  document.getElementById("external2").classList.add("active1");
  document.getElementById("external3").classList.add("active1");
  document.getElementById("external4").classList.add("active1");
  document.getElementById("external5").classList.add("active1");


  // document.getElementById("body").style.overflow = "hidden";



  document.getElementById('body').style.transform = 'scale(2) translateX(' + leftFin2 + 'px' + ') translateY(' + topFin2  + 'px)';


}

// Контейнер 3 анимация приближения



// Контейнер 3 анимация удаления


function down3() {


  // document.getElementById("body").classList.remove("active1");

  document.getElementById("external2").classList.remove("active1");
  document.getElementById("external3").classList.remove("active1");
  document.getElementById("external4").classList.remove("active1");
  document.getElementById("external5").classList.remove("active1");


  // document.getElementById("body").style.overflow = "hidden";


  // setTimeout("document.getElementById(\"body\").style.width = \"100%\";", 100);


  // document.getElementById("html").style.transform = 'translateY(' + 0  + 'px)';

  document.getElementById("body").style.transform = 'scale(1) translateX(' + 0 + 'px' + ') translateY(' + 0  + 'px)';



}








// Контейнер 3 анимация удаления




// Контейнер 4 анимация приближения

function up4() {

  var distance1 = document.getElementById("container4").getBoundingClientRect();

  var left1 = distance1.left;
  var top1 = distance1.top;
  // console.log( "left1 " + left1);
  // console.log( "top1 " + top1);

  var DocH = $(document).height();
  // console.log("DocH " + DocH);

  var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  console.log("scrollTop " + scrollTop);

  var topFin1 = (DocH/4) - top1 - scrollTop/2;
  console.log("topFin1 " + topFin1);


  var DocW = $(document).width();
  console.log(" DocW " + DocW);

  var leftFin1 = -1*(left1) + DocW/4 - 100;
  console.log("leftFin1 " + leftFin1);

  document.getElementById("body").classList.add("active1");

  document.getElementById("external2").classList.add("active1");
  document.getElementById("external3").classList.add("active1");
  document.getElementById("external4").classList.add("active1");
  document.getElementById("external5").classList.add("active1");

  // document.getElementById("body").style.overflow = "hidden";

  // setTimeout("document.getElementById(\"body\").style.width = \"200%\";", 100);

  // document.getElementById("html").style.transform = 'translateY(' + htmlY1  + 'px)';

  document.getElementById("body").style.transform = 'scale(1.5) translateX(' + leftFin1 + 'px' + ') translateY(' + topFin1  + 'px)';

}

// Контейнер 4 анимация приближения

// Контейнер 4 анимация удаления

function down4() {

  // document.getElementById("body").classList.remove("active1");

  document.getElementById("external2").classList.remove("active1");
  document.getElementById("external3").classList.remove("active1");
  document.getElementById("external4").classList.remove("active1");
  document.getElementById("external5").classList.remove("active1");

  // document.getElementById("body").style.overflow = "hidden";

  // document.getElementById("body").style.width = "100%";

  document.getElementById("body").style.transform = 'scale(1) translateX(' + 0 + 'px' + ') translateY(' + 0  + 'px)';





}

// Контейнер 4 анимация удаления


// Контейнер 5 анимация приближения

function up5() {

  var distance1 = document.getElementById("container5").getBoundingClientRect();

  var left1 = distance1.left;
  var top1 = distance1.top;
  // console.log( "left1 " + left1);
  // console.log( "top1 " + top1);

  var DocH = $(document).height();
  // console.log("DocH " + DocH);

  var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  console.log("scrollTop " + scrollTop);

  var topFin1 = (DocH/4) - top1 - scrollTop/2;
  console.log("topFin1 " + topFin1);
  
  var DocW = $(document).width();
  console.log(" DocW " + DocW);

  var leftFin1 = -1*(left1) + DocW/4 +200;
  console.log("leftFin1 " + leftFin1);

  document.getElementById("body").classList.add("active1");

  document.getElementById("external2").classList.add("active1");
  document.getElementById("external3").classList.add("active1");
  document.getElementById("external4").classList.add("active1");
  document.getElementById("external5").classList.add("active1");

  // document.getElementById("body").style.overflow = "hidden";
  // document.getElementById("body").style.width = "200%";
  // document.getElementById("html").style.transform = 'translateY(' + htmlY1  + 'px)';


  document.getElementById("body").style.transform = 'scale(2) translateX(' + leftFin1 + 'px' + ') translateY(' + topFin1  + 'px)';

}

// Контейнер 5 анимация приближения

// Контейнер 5 анимация удаления

function down5() {

  // document.getElementById("body").classList.remove("active1");

  document.getElementById("external2").classList.remove("active1");
  document.getElementById("external3").classList.remove("active1");
  document.getElementById("external4").classList.remove("active1");
  document.getElementById("external5").classList.remove("active1");

  // document.getElementById("body").style.overflow = "hidden";

  // setTimeout("document.getElementById(\"body\").style.width = \"100%\";", 100);

  // document.getElementById("html").style.transform = 'translateY(' + 0  + 'px)';

  document.getElementById("body").style.transform = 'scale(1) translateX(' + 0 + 'px' + ') translateY(' + 0  + 'px)';

}

// Контейнер 5 анимация удаления

