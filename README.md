# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh






*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
    

}

body{ 
  /* width: 1000px;
  margin: auto; */
height: 1000px;}
/* .head{
    background-image: linear-gradient(90deg,rgb(32, 0, 126) 0%, rgb(230, 30, 182) 100%);
    height:90px;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: aqua;
    display: flex;
    justify-content: space-between;    
} */


.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 9999;
    /* background: -webkit-gradient( linear, left top, right top, from(#20007e), to(#e61eb6)); */
    /* background: linear-gradient( 90deg, black 0%, grey 100%); */
    background-color: gray;
    padding: 20px 0;
    -webkit-box-shadow: 0 0 10px #111;
    box-shadow: 0 0 10px #111;
    transition: all 0.5s ease;
    top: 0px;
}

.logo{
  margin-top: -60px;
}

.nav-item{
    margin-right: 30px;
}
.navbar{
display: flex;
margin-right: 0;
}

.nav-item a{
    color: white;
    text-decoration: none;
    font-size: 14px;
}
li{
    list-style: none;
}

.navbar-toggler:not(:disabled):not(.disabled) {
    cursor: pointer;
}
@media only screen and (max-width: 800px) {
  .navbar {display: none;}
}



 /* HIDE AND SHOW NAVBAR */

ul{
  right: 0px;  
}
 #ham{
  width: 30px;
  display: none;
  margin: 5px;
}

@media only screen and (max-width: 800px) {
  #ham{
    display: block;}
}

#ham-c{
  width: 20px;
  display: none;
  margin-right: 0px;
}


.hide-show{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  transition: 2s;
  
}



li a {
  /* background-color: #717171; */
  display: block;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  transition: 1s;
}

li a:hover {
  background-color: white;
  color: green;
  border-radius: 40%;
}


.list-one{
  display: none;
  transition: 3s;
  border-radius: 30px;

}


/* CTA */

.CTA{
  position: absolute;
  top: auto;
  z-index: 99;
  width: 100%;
  /* left: auto;
  right: auto; */
  /* padding: 20px; */
  text-align: center;
}




.CTA-h1{
  margin-top: 20px;
  font-size: 30px;
  padding-top: 10px;
  color: white;
  font-weight: bold;
  font-family: 'Merriweather', serif;
  text-shadow: 5px 5px 5px green;


}
.CTA-p{
  color: white;
  padding-top: 5%;
  margin: auto;
}

.CTA-h2{
  color: white;
  font-size: 35px;
  width: 100%;
  padding-top: 9%;
  font-family: 'Merriweather', serif;
  text-shadow: 5px 5px 5px green;
}


@media only screen and (max-width: 319px) {
  .CTA-p {
    /* font-size:0.50rem */
  }
}

/* @media only screen and (min-width: 700px) {
  .CTA {
    padding-top: 100px;
  }
} */
.CTA-p:hover{
  transition: all ease 2s;
  box-shadow: 7px 7px 15px 22px rgb(0, 0, 0, 0.25);
  color:white;
  padding-top: -2%;
}

.CTA-h2:hover{
  transition: all ease 2s;
  box-shadow: 7px 7px 15px 22px rgb(0, 0, 0, 0.25);
  color:white;
  padding-top: -2%;
}


.CTA-button{
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin-top:6%;
  background-color: green;
  font-weight: bold;
  color: white;
}

.CTA-button:hover{
  padding: 13px;
  transition: 1s;
  background-color: white;
  color: green;
}


/* CAROUSEL */

body {

  /* width: 90%; */
  margin: auto;
}
.mySlides {display: none;}
/* img {vertical-align: middle;} */

/* Slideshow container */
.slideshow-container {
  width: 100%;
  /* position: relative; */
  margin-top: 83px;
}

/* Caption text */
.text {
  color: red;
  font-size: 15px;
  padding: 8px 12px;
  /* position: absolute; */
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  /* from {opacity: }  */
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}

.img-slide{
  width:100%;
  height: 500px
}

@media only screen and (max-width: 250px) {
 .img-slide {height: 700px;}
}












/* SECOND SECTON */

.second-section{
  padding-top: 30px;
  width: 100%;
  display:flex ;
  justify-content: space-around;

}

@media only screen and (max-width: 800px) {
  .second-section{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
}


.second-section1{
  padding-left: 50px;
  font-size: 0.86rem;

}
.second-section2{
  width: 100%;
}
.sometext{
  padding-top: 120px;
  padding-left: 40px;
  line-height: 40px;
}

@media only screen and (max-width: 800px) {
  .sometext{
    padding: 0;
    line-height: 29px;
 }

}

@media only screen and (max-width: 800px) {
  .second-section1{
    padding: 0;

 }

}


.pngholder1{
height: 300px;
display: flex;
align-items: flex-end;
flex-direction: column;
padding-right: 10px;

}

.pngholder2{
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 10px;

}

@media only screen and (max-width: 800px) {
  .pngholder1, .pngholder2{
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    width: 80%;
    margin: auto;
    height: 125px;

  }
}
.pngs{
  width: 120px;
  height: 120px;
  border-radius: 60px;
}


@media only screen and (max-width: 800px) {
  .pngs {width: 90px;
  height: 90px;
  border-radius: 50%;
}
}


.png1{
 margin-right: 110px;
}
.png2{
  margin-top: 5px;
}
.png3{
  margin-top: 5px;
}
.png4{
  margin-top: 50px;
}

@media only screen and (max-width: 800px) {
  .png1, .pmg2, .png3, .png4{

    margin: 0px;



  }
}










/* SERVICES SECTION */




.services{
  margin-bottom: 30px;
}
.services-div{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.services-text{
  text-align: center;
  color: green;
  font-weight: bold;
}
.reduce-div{
  margin-right: -50px;
}


.recycle-div{
  margin-top: -4px;
  width: 175px;
  margin-right: -50px;
}
.recycle{
  width: 175px;
  margin-top: 8px;
  margin-right: -50px;
}



/* ANOTHER SECTION */


.another-section{
  display: flex;
  justify-content: space-around;

}

@media only screen and (max-width: 800px) {
  .another-section {
    flex-direction: column;
  }
}

.words{
  /* width: 30%; */
  padding-top: 50px;
  /* text-align: center; */
}

.words2{
  /* width: 30%; */
  padding-top: 50px;
  /* text-align: center; */


}

.words3{
  /* width: 30%; */
  padding-top: 50px;
  /* text-align: left; */


}



/* FOOTER */

.footer{
  display: flex;
  justify-content: space-around;
  height: 350px;
  /* background-color: black; */
  margin-bottom: 40px;
}

@media only screen and (max-width: 800px) {
  .footer{

    flex-direction: column;
    height: auto;



}

}


.footer1{
  width: 30%;
}

@media only screen and (max-width: 800px) {
  .footer1{

    width: 100%;



  }
}

.footer2{
  width: 100%;
  color: black;
  font-weight: bold;

}
.footer3{
  width: 100%;
  color: black;
  font-weight: bold;


}
.social-links{
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 50px;
  color: red;
  text-decoration: none;
}

.ss-holder{
  /* width: 100%; */
  text-align: center;
}
.fa {
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  padding: 10px;
}


.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;


}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-instagram {
  background: #125688;
  color: white;
}


.fa-linkedin {
  background: #007bb5;
  color: white;
}

.footer-words{
  padding: 50px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  color: rgb(40, 36, 36);
}